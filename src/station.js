function Station(){
  this.bikeNumber = [];
}

Station.prototype.bikeCount = function(){
  var number = this.bikeNumber.length;
  return number;
};

Station.prototype.dock = function(bike) {
  this.bikeNumber.push(bike);
};

module.exports = Station;