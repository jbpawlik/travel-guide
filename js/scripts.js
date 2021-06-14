// TravelGuide Logic

function TravelGuide() {
  this.state = {}
}

TravelGuide.prototype.addState = function(state) { 
  this.state[state.location] = state 
  }


// Destination logic

function Destination(landmark, season, notes) { 
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

// State logic

function State(location){
  this.location = location;
}

State.prototype.addDestination = function(destination) {
  this.destination[destination.landmark] = destination
}

let indiana = new State("Indiana")
let newHampshire = new State("New Hampshire")

let indianaDestination1 = new Destination('Harts creek', 'muggy all year, or its cold', 'everyone plays basketball')
let indianaDestination2 = new Destination("Indianapolis", "great in winter the walkways are covered and heated", "Once again, big basketball place")
let newHampshireDestination1 = new Destination('The Old Man on the Mountain', 'Winter', 'Nice place to leave')
let newHampshireDestination2 = new Destination("Franconia", "Franconia in autumn is a delight", "Lots of hikers and granite")

let travelGuide = new TravelGuide

indiana.addDestination(indianaDestination1)
indiana.addDestination(indianaDestination2)

newHampshire.addDestination(newHampshireDestination1)
newHampshire.addDestination(newHampshireDestination2)

travelGuide.addState(indiana)
travelGuide.addState(newHampshire)
