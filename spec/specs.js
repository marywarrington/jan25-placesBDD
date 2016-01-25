describe('Place', function() {
  it('should create a places object', function() {
    var testPlace = new Place("Crater Lake", "Mom", true);
    expect(testPlace.placeName).to.equal("Crater Lake");
    expect(testPlace.placeCompanion).to.equal("Mom");
    expect(testPlace.placeReturn).to.equal(true);
  });

});
