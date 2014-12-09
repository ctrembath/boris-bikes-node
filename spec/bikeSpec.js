describe('Bike', function(){
  var bike = new Bike;

  it('is not broken when created', function() {
    expect(bike.broken).toEqual(false)
  });

});