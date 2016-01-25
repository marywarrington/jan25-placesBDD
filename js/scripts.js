function Place(placeName, placeCompanion, placeReturn) {
  this.placeName = placeName;
  this.placeCompanion = placeCompanion;
  this.placeReturn = placeReturn;
}

$(document).ready(function() {
  $('form#placeForm').submit(function(event) {
    event.preventDefault();
    var placeName = $('#placeInput').val();
    var placeCompanion = $('#companionInput').val();
    var placeReturn = $('input:checked').val();

    var newPlace = new Place(placeName, placeCompanion, placeReturn);
    console.log(newPlace)

    $('placeListHidden').show();
    $('ul#placeList').append('<li class="placeItems">' + placeName + '</li>');

    $('li.placeItems').last().click(function() {
      $("div#resultsList").show();
      $("span#placeOutput").text(newPlace.placeName);
      $("span#companionOutput").text(newPlace.placeCompanion);
      $("span#returnOutput").text(newPlace.placeReturn);
    });
  });
});
