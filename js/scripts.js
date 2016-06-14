$(document).ready(function() {
  $("form#datingPreferences").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      var match;
      if (gender === 'male' && age <= 40) {
        match ="Paul Rudd";
        $("#photo").append("<img src='img/rudd.jpg'>");
      }
      if (gender === 'male' && age > 40) {
        match ="Harrison Ford";
        $("#photo").append("<img src='img/ford.jpg'>");
      }
      if (gender === 'female' && age <= 40) {
        match ="Katy Perry";
        $("#photo").append("<img src='img/perry.jpg'>");
      }
      if (gender === 'female' && age > 40) {
        match ="Heather Locklear";
        $("#photo").append("<img src='img/locklear.jpg'>");
      }


    } else {
      alert('Please enter your age.');
    }
    $("#yourCeleb").empty().append(match);

    $("#match").show();
    event.preventDefault();
  });
});
