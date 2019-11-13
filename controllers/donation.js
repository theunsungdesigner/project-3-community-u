const express = require("express");
const donationApi = require("../models/donations.js");
const donationRouter = express.Router();
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
donationRouter.get("/", async (req, res) => {
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

donationRouter.post("/", async (req, res) => {
  const donationData = req.body;
  try {
    const donationCreated = await donationApi.createDonation(donationData);
    res.status(201).json(donationCreated);
    console.log(donationCreated)
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

donationRouter.delete("/:donationId", async (req, res) => {
  const donationId = getDonationId(req, res);

  try {
    await donationApi.deleteDonationById(donationId);
    const message = `donation with donationId ${donationId}, has deleted successfully`;
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
  donationRouter
};