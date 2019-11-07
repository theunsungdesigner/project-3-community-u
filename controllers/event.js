const express = require("express");
const eventApi = require("../models/event.js");
const eventRouter = express.Router();

// helper function to ensure eventId
// error function borrowed from Brandon Moody GA-SEI lead instructor
function getEventId(req, res) {
  const eventId = req.params.eventId;
  // if eventId missing lets throw error
  if (eventId === "" || eventId === undefined || eventId === null) {
    const message = `eventId parameter missing from URL. Please check parameters and try again`;
    console.log(message);
    res.status(500).json({
      error: "parameter missing",
      message
    });
    return;
  }
  return eventId;
}
//get all event route
eventRouter.get("/", async (req, res) => {
  try {
    const retrievedEvent = await eventApi.getAllEvent();
    console.log(retrievedEvent);
    res.status(200).json(retrievedEvent);
    return;
  } catch (e) {
    const message = `Failed to retrieve all Events.
          Please check mongod service and make sure it is running`;
    console.log(message);
    console.error(e);
    res.status(500).json({
      error: e,
      message
    });
    return;
  }
});

//get single event by Id route
eventRouter.get("/:eventId", async (req, res) => {
  const eventId = getEventId(req, res);
  try {
    const retrievedEvent = await eventApi.getEventId(eventId);
    return res.status(200).json(retrievedEvent);
  } catch (e) {
    const errorMessage = `failed to retrieve eventId, check res.json
    "${eventId}". Please make sureId exists`;
    console.log(message);
    console.error(e);
    res.status(404).json({
      error: e,
      message
    });
    return;
  }
});
//create event
eventRouter.post("/", async (req, res) => {
  const eventData = req.body;
  try {
    const eventCreated = await eventApi.createEvent(eventData);
    res.status(201).json(eventCreated);
    return;
  } catch (e) {
    const message = `failed to create event using data from request body
          ${JSON.stringify(eventData, null, 4)}
          , please check request body and try again`;
    console.log(message);
    console.log(e);
    res.status(500).json({
      error: e,
      message
    });
    return;
  }
});

//delete event 
eventRouter.delete("/:eventId", async (req, res) => {
  const eventId = getEventId(req, res);

  try {
    await eventApi.deleteEventById(eventId);
    const message = `event with eventId ${eventId}, has deleted successfully`;
    res.status(202).json(message);
    return;
  } catch (e) {
    const message = `failed to retrieve event using eventId
          "${eventId}". Please make sureId exists`;
    console.log(message);
    console.error(e);
    res.status(500).json({
      error: e,
      message
    });
    return;
  }
});

// Update event By ID Route
eventRouter.put('/:eventId', async (req, res) => {
  // ensure eventId
  const eventId = getEventId(req, res);
  // get data to update Event
  const eventPayload = req.body;

   try {
      await eventApi.updateEventById(eventId, eventPayload);
      const message = `event with eventId ${eventId}, has updated successfully`;
      res.status(204).json(message);
      return;
   } catch(e) {
      const message = `failed to create event using data from request body
          ${JSON.stringify(eventPayload, null, 4)}
          ,please check request body and try again`;
      console.log(message)
      console.error(e);
      res.status(500).json({
          error: e,
          message,
      });
      return;
   }
});

eventRouter.get("/hello", (req, res) => {
  res.json(eventApi.getHelloWorldString());
});

module.exports = {
  eventRouter
};
