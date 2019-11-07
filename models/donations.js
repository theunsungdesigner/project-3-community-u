const mongoose = require('./connection.js');
const Schema = mongoose.Schema;

mongoose.Promise =  global.Promise;

const sampleDescriptions = [
  'Lorem ipsum dolor amet messenger bag edison bulb lumbersexual pitchfork woke cold-pressed snackwave hella raw denim wolf cred. Church-key kogi af, knausgaard blog polaroid vaporware retro chambray shaman succulents gochujang ramps etsy air plant. Small batch tumeric flexitarian master cleanse biodiesel synth swag freegan pour-over chicharrones intelligentsia fingerstache. Post-ironic yuccie la croix, cred pinterest meditation sustainable cliche tote bag kombucha. Offal vaporware hoodie vegan woke before they sold out hexagon enamel pin dreamcatcher kitsch narwhal. Truffaut seitan swag, tbh farm-to-table cornhole ethical quinoa migas literally organic succulents.',
  'Letterpress sartorial plaid, affogato shabby chic glossier irony hexagon brooklyn pitchfork brunch pour-over church-key street art lumbersexual. Selvage woke synth iPhone, try-hard beard post-ironic austin green juice crucifix celiac messenger bag. Portland roof party gastropub pug, tilde wolf vice lyft dreamcatcher af. Mixtape hexagon selvage pop-up, post-ironic whatever stumptown squid chicharrones neutra marfa tote bag health goth keffiyeh. Pok pok leggings seitan la croix squid. VHS retro williamsburg, readymade locavore viral meditation kogi marfa forage street art affogato drinking vinegar activated charcoal. Roof party pitchfork brooklyn, 90s kale chips asymmetrical live-edge mlkshk subway tile air plant green juice.',
  'Swag kombucha mumblecore, wayfarers vinyl photo booth jianbing selfies hexagon pour-over. Messenger bag fashion axe knausgaard hashtag iPhone lomo kogi trust fund semiotics hoodie. Whatever sartorial kinfolk, kitsch literally flannel tofu enamel pin ramps tote bag tumeric listicle. Vape tacos truffaut shaman fashion axe. Pug cold-pressed jianbing poutine succulents selfies hexagon roof party helvetica chia enamel pin tattooed flexitarian YOLO. Readymade tbh tilde activated charcoal.'
];
// function taken from GA-sei24 immersive homework
function getRandomDescription () {
  return sampleDescriptions[Math.floor(Math.random()*sampleDescriptions.length)];
}
//Schema for donation, nested are donations in which donation will be cultivating 
const DonationModelSchema = new mongoose.Schema({
  typeOfDonation: String, //Donation drive, Food Donation, Clothing Drive
  food: String, //produce, protien, dry-goods
  clothing: String, //children, men's, women's
  goods: String, //
  eventId: mongoose.Types.ObjectId
})


const DonationModel = mongoose.model('Donation', DonationModelSchema)
/**
 *  getAllDonations
 */
function getAllDonation() {
  return DonationModel.find();
}

/**
*  getDonationById
* @param {string} DonationId
*/
function getDonationById(DonationId) {
  return DonationModel
      .findById(DonationId);
}

/**
*
* @param {string} DonationId
*/
function deleteDonationById(DonationId) {
  return DonationModel
      .findOneAndDelete({_id: DonationId});
}

function updateDonationById(DonationId, DonationData) {
  return DonationModel
      .findOneAndUpdate({_id: DonationId}, DonationData);
}
const getDonationByEventId =()=>{
    return donationCollection.find({ eventId })

}

function createDonation(donationData) {
  if (!donationData.description){
      donationData.description = getRandomDescription();
  }
  return DonationModel.create(donationData);
}


function getHelloWorldString() {
  return 'hello world'
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getHelloWorldString,
  getAllDonation,
  createDonation,
  getDonationById,
  updateDonationById,
  getDonationByEventId,
  deleteDonationById
}
