describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000');
});

  it('should welcome you to boris bikes', function(){
    casper.then(function(){
     expect('body').to.contain.text("Welcome to Boris Bikes!");
    });
  });


  it('has a bike button', function() {
     casper.then(function(){
      this.clickLabel('bike', 'button');
    });
   });
});