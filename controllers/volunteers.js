const express = require("express");
const volunteersApi = require("../models/volunteers.js");
const volunteersRouter = express.Router();
function getVolunteersId(req, res) {
  const volunteersId = req.params.volunteersId;
  // if volunteersId missing lets throw error
  if (volunteersId === "" || volunteersId === undefined || volunteersId === null) {
    const message = `volunteersId parameter missing from URL. Please check parameters and try again`;
    console.log(message);
    res.status(500).json({
      error: "parameter missing",
      message
    });
    return;
  }
  return volunteersId;
}
volunteersRouter.get("/", async (req, res) => {
  try {
    const retrievedVolunteers = await volunteersApi.getAllVolunteers();
    console.log(retrievedVolunteers);
    res.status(200).json(retrievedVolunteers);
    return;
  } catch (e) {
    const message = `Failed to retrieve all Volunteers.
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

volunteersRouter.post("/", async (req, res) => {
  const volunteersData = req.body;
  try {
    const volunteersCreated = await volunteersApi.createVolunteers(volunteersData);
    res.status(201).json(volunteersCreated);
    console.log(volunteersCreated)
    return;
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: e,
      message
    });
    return;
  }

  
});

volunteersRouter.delete("/:volunteersId", async (req, res) => {
  const volunteersId = getVolunteersId(req, res);

  try {
    await volunteersApi.deleteVolunteersById(volunteersId);
    const message = `volunteers with volunteersId ${volunteersId}, has deleted successfully`;
    res.status(202).json(message);
    return;
  } catch (e) {
    console.error(e);
    res.status(500).json({
      error: e,
      message
    });
    return;
  }
  console.log('Delete hit')
});


module.exports = {
  volunteersRouter
};