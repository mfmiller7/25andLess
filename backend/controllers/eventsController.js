const { fetchAllPages } = require('../services/apiService');
const { filterEventsByPrice, parseEventData } = require('../utils/eventUtils');

/**
 * Handles GET requests to fetch events for a venue.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
async function getEvents(req, res) {
  const { venueID } = req.params;

  console.log(`Received request for venue: ${venueID}`);

  try {
    const allEvents = await fetchAllPages(venueID);

    console.log(`Total events: ${allEvents.length}`);

    const filteredEvents = filterEventsByPrice(allEvents, 25);

    console.log(`Events under $25: ${filteredEvents.length}`);

    if (filteredEvents.length === 0) {
      res.send('No events under $25');
    } else {
      const parsedEvents = filteredEvents.map(parseEventData);
      res.json(parsedEvents);
    }
  } catch (error) {
    console.error('Error processing request:', error.message);
    res.status(500).send('Error fetching data');
  }
}

module.exports = {
  getEvents,
};