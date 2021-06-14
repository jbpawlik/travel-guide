// Business Logic

function travelGuide() {
  this.destinations = {}
}

function Destination(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}