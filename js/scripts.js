$(document).ready(function() {
  $("form#datingPreferences").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (age) {
      var match;
      if (gender === 'male' && age <= 40) {
        match ="Paul Rudd";
      }
      if (gender === 'male' && age > 40) {
        match ="Harrison Ford";
      }
      if (gender === 'female' && age <= 40) {
        match ="Katy Perry";
      }
      if (gender === 'female' && age > 40) {
        match ="Heather Locklear";
      }


    } else {
      alert('Please enter your age.');
    }
    $("#yourCeleb").empty().append(match);
    alert(match);
    $("#match").show();
    event.preventDefault();
  });
});
