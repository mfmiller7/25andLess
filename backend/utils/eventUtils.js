/**
 * Filters events by a maximum price.
 * @param {Array} events - List of events.
 * @param {number} maxPrice - Maximum price to filter by.
 * @returns {Array} - Filtered events.
 */
function filterEventsByPrice(events, maxPrice) {
    return events.filter(event => event.priceRanges?.some(priceRange => priceRange.min <= maxPrice));
  }
  
  /**
   * Parses event data to a simplified format.
   * @param {Object} event - Event data.
   * @returns {Object} - Parsed event data.
   */
  function parseEventData(event) {
    const venue = event._embedded?.venues?.[0];
  
    return {
      name: event.name,
      url: event.url,
      image: event.images?.[0]?.url || null,
      localDate: event.dates.start.localDate,
      localTime: event.dates.start.localTime,
      genre: event.classifications?.[0]?.genre?.name || null,
      subGenre: event.classifications?.[0]?.subGenre?.name || null,
      info: event.info || null,
      priceMin: event.priceRanges?.[0]?.min || null,
      priceMax: event.priceRanges?.[0]?.max || null,
      venueName: venue?.name || null,
      venueCity: venue?.city?.name || null,
      venueState: venue?.state?.stateCode || null,
      venueCountry: venue?.country?.countryCode || null,
    };
  }
  
  module.exports = {
    filterEventsByPrice,
    parseEventData,
  };  