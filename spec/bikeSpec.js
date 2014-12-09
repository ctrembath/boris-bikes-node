var Bike = require('../src/bike');

describe('Bike', function(){
  var bike = new Bike();

  it('is not broken when created', function() {
    expect(bike.broken).toEqual(false);
  });

  it('can be broken', function(){
    bike.smash();
            expect(bike.broken).toEqual(true);
  });
});