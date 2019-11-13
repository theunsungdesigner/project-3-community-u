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
//Schema for volunteers, nested are volunteerss in which volunteers will be cultivating 
const VolunteersModelSchema = new mongoose.Schema({
  volunteerName: String, //Volunteers drive, Food Volunteers, Clothing Drive
  schoolName: String, //produce, protien, dry-goods
  organization: String, //children, men's, women's
  eventId: mongoose.Types.ObjectId
})


const VolunteersModel = mongoose.model('Volunteers', VolunteersModelSchema)
/**
 *  getAllVolunteerss
 */
function getAllVolunteers() {
  return VolunteersModel.find();
}

/**
*  getVolunteersById
* @param {string} VolunteersId
*/
function getVolunteersById(VolunteersId) {
  return VolunteersModel
      .findById(VolunteersId);
}

/**
*
* @param {string} VolunteersId
*/
function deleteVolunteersById(VolunteersId) {
  return VolunteersModel
      .findOneAndDelete({_id: VolunteersId});
}

function updateVolunteersById(VolunteersId, VolunteersData) {
  return VolunteersModel
      .findOneAndUpdate({_id: VolunteersId}, VolunteersData);
}
const getVolunteersByEventId =()=>{
    return volunteersCollection.find({ eventId })

}

function createVolunteers(volunteersData) {
  if (!volunteersData.description){
      volunteersData.description = getRandomDescription();
  }
  return VolunteersModel.create(volunteersData);
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
  getAllVolunteers,
  createVolunteers,
  getVolunteersById,
  updateVolunteersById,
  getVolunteersByEventId,
  deleteVolunteersById
}
