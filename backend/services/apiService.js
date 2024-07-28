const axios = require('axios');

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

/**
 * Fetches all event pages for a given venue ID.
 * @param {string} venueID - Venue ID to fetch events for.
 * @returns {Promise<Array>} - List of all events.
 */
async function fetchAllPages(venueID) {
  let events = [];
  let page = 0;
  let totalPages = 5; // Get spike arrest violation when > 6

  while (page < totalPages) {
    try {
      const response = await axios.get(apiUrl, {
        params: {
          apikey: apiKey,
          venueId: venueID,
          classificationName: 'music',
          local: '*',
          page: page,
        },
      });

      if (response.data._embedded) {
        events = events.concat(response.data._embedded.events);
      }

      totalPages = response.data.page.totalPages;
      page += 1;
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error.message);
      break; // Exit the loop if an error occurs
    }
  }

  return events;
}

module.exports = {
  fetchAllPages,
};