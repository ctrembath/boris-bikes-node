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

Station.prototype.release = function(bike){
  this.bikeNumber.pop(bike);
};
module.exports = Station;