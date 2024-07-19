const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const url = process.env.API_URL || 'https://app.ticketmaster.com/discovery/v2/events.json';
const api_key = process.env.API_KEY || 'CJpHB9QmKVH7R5eXhWTLOG31VacUGhtt';

function filterEventsByPrice(events, maxPrice) {
    return events.filter(event => {
        if (event.priceRanges && event.priceRanges.length > 0) {
            return event.priceRanges.some(priceRange => priceRange.min <= maxPrice);
        }
        return false;
    });
};

function parseEventData(event) {
    return {
        name: event.name,
        url: event.url,
        image: event.images && event.images.length > 0 ? event.images[0].url : null,
        localDate: event.dates.start.localDate,
        localTime: event.dates.start.localTime,
        genre: event.classifications && event.classifications.length > 0 ? event.classifications[0].genre.name : null,
        subGenre: event.classifications && event.classifications.length > 0 ? event.classifications[0].subGenre.name : null,
        info: event.info || null,
        priceMin: event.priceRanges && event.priceRanges.length > 0 ? event.priceRanges[0].min : null,
        priceMax: event.priceRanges && event.priceRanges.length > 0 ? event.priceRanges[0].max : null,
        venueName: event._embedded && event._embedded.venues && event._embedded.venues.length > 0 ? event._embedded.venues[0].name : null,
        venueCity: event._embedded && event._embedded.venues && event._embedded.venues.length > 0 ? event._embedded.venues[0].city.name : null,
        venueState: event._embedded && event._embedded.venues && event._embedded.venues.length > 0 ? event._embedded.venues[0].state.stateCode : null,
        venueCountry: event._embedded && event._embedded.venues && event._embedded.venues.length > 0 ? event._embedded.venues[0].country.countryCode : null
    };
};

async function fetchAllPages(postal, radius, startDate, endDate) {
    let events = [];
    let page = 0;
    let totalPages = 5;

    while (page < totalPages) {
        const response = await axios.get(url, {
            params: {
                apikey: api_key,
                postalCode: postal,
                radius: radius,
                unit: 'miles',
                classificationName: 'music',
                startDateTime: `${startDate}T00:00:00Z`,
                endDateTime: `${endDate}T23:59:59Z`,
                page: page
            }
        });

        if (response.data._embedded) {
            events = events.concat(response.data._embedded.events);
        }
        
        totalPages = response.data.page.totalPages;
        page += 1;
    }

    return events;
}

app.get('/:postal/:radius/:start/:end', async (req, res) => {
    const { postal, radius, start, end } = req.params;

    console.log(`Received request for postal: ${postal}, radius: ${radius}`);

    try {
        const allEvents = await fetchAllPages(postal, radius, start, end);

        console.log(`Total events fetched: ${allEvents.length}`);

        const filteredEvents = filterEventsByPrice(allEvents, 25);

        const parsedEvents = filteredEvents.map(parseEventData);

        res.json(parsedEvents);
    } catch (error) {
        console.error('Error fetching data from Ticketmaster API:', error.message);
        if (error.response) {
            console.error('Response data:', error.response.data);
        }
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});