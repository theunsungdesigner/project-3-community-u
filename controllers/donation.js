const express = require("express");
const donationApi = require("../models/donations.js");
const donationRouter = express.Router();

// helper function to ensure donationId
// error function borrowed from Brandon Moody GA-SEI lead instructor
function getDonationId(req, res) {
  const donationId = req.params.donationId;
  // if donationId missing lets throw error
  if (donationId === "" || donationId === undefined || donationId === null) {
    const message = `donationId parameter missing from URL. Please check parameters and try again`;
    console.log(message);
    res.status(500).json({
      error: "parameter missing",
      message
    });
    return;
  }
  return donationId;
}
//get all donation route
donationRouter.get("/donation", async (req, res) => {
  try {
    const retrievedDonation = await donationApi.getAllDonation();
    console.log(retrievedDonation);
    res.status(200).json(retrievedDonation);
    return;
  } catch (e) {
    const message = `Failed to retrieve all Donations.
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

//get single donation by Id route
donationRouter.get("/:donationId", async (req, res) => {
    //donationApi.getDonationByEventId(req.param.eventId)
    
  const donationId = getDonationId(req, res);
  try {
    const retrievedDonation = await donationApi.getDonationId(donationId);
    return res.status(200).json(retrievedDonation);
  } catch (e) {
    const errorMessage = `failed to retrieve donationId, check res.json
    "${donationId}". Please make sureId exists`;
    console.log(message);
    console.error(e);
    res.status(404).json({
      error: e,
      message
    });
    return;
  }
});
//create donation
donationRouter.post("/", async (req, res) => {
  const donationData = req.body;
  try {
    const donationCreated = await donationApi.createDonation(donationData);
    res.status(201).json(donationCreated);
    return;
  } catch (e) {
    const message = `failed to create donation using data from request body
          ${JSON.stringify(donationData, null, 4)}
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

//delete donation 
donationRouter.delete("/:donationId", async (req, res) => {
  const donationId = getDonationId(req, res);

  try {
    await donationApi.deleteDonationById(donationId);
    const message = `donation with donationId ${donationId}, has deleted successfully`;
    res.status(202).json(message);
    return;
  } catch (e) {
    const message = `failed to retrieve donation using donationId
          "${donationId}". Please make sureId exists`;
    console.log(message);
    console.error(e);
    res.status(500).json({
      error: e,
      message
    });
    return;
  }
});

// Update donation By ID Route
donationRouter.put('/:donationId', async (req, res) => {
  // ensure donationId
  const donationId = getDonationId(req, res);
  // get data to update Donation
  const donationPayload = req.body;

   try {
      await donationApi.updateDonationById(donationId, donationPayload);
      const message = `donation with donationId ${donationId}, has updated successfully`;
      res.status(204).json(message);
      return;
   } catch(e) {
      const message = `failed to create donation using data from request body
          ${JSON.stringify(donationPayload, null, 4)}
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

donationRouter.get("/hello", (req, res) => {
  res.json(donationApi.getHelloWorldString());
});

module.exports = {
  donationRouter
};
