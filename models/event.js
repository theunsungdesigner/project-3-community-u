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
//Schema for event, nested are donations in which event will be cultivating 
const EventModelSchema = new Schema({
  typeOfEvent: String, //Donation drive, Food Donation, Clothing Drive
  name: String, //organization name, or meetup name
  financial: Boolean,
  organizationType: String,
  goalBased: String,
  food: String, //produce, protien, dry-goods
  clothing: String, //children, men's, women's
  goods: String //
})


const EventModel = mongoose.model('Event', EventModelSchema)
/**
 *  getAllEvents
 */
function getAllEvent() {
  return EventModel.find();
}

/**
*  getEventById
* @param {string} EventId
*/
function getEventById(EventId) {
  return EventModel
      .findById(EventId);
}

/**
*
* @param {string} EventId
*/
function deleteEventById(EventId) {
  return EventModel
      .findOneAndDelete({_id: EventId});
}

function updateEventById(EventId, EventData) {
  return EventModel
      .findOneAndUpdate({_id: EventId}, EventData);
}

function createEvent(eventData) {
  if (!eventData.description){
      eventData.description = getRandomDescription();
  }
  return EventModel.create(eventData);
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
  getAllEvent,
  createEvent,
  getEventById,
  updateEventById,
  deleteEventById
}
