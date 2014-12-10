describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000');
});

  it('should welcome you to boris bikes', function(){
    casper.then(function(){
     "body".should.contain.text("Welcome to Boris Bikes!");
    });
  });

  it('has a bike button', function() {
    casper.then(function(){
      expect('body').should.contain.an.element.with.attr("bike");
    });
  });
});