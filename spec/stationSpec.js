var Station = require('../src/station.js');

describe('Station', function(){
  var station = new Station();
  var bike = jasmine.createSpyObj;

  it('should accept a bike', function(){
    expect(station.bikeCount()).toEqual(0);
    station.dock(bike);
    expect(station.bikeCount()).toEqual(1);
  });

  it('should release a bike', function(){
    station.release(bike);
    expect(station.bikeCount()).toEqual(0);
  });
}); 

