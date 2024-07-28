const express = require('express');
const { getEvents } = require('./controllers/eventsController');

const router = express.Router();

router.get('/:venueID', getEvents);

module.exports = router;