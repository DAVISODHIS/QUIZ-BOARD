// BUSINESS LOGIC
var sum = 0;
function scoreCalculator(userValue) {
  var names = ["js", "year", "framework","function","dom","link"];
  names.forEach(function(name) {
    var userValue = $("input:radio[name=" + name + "]:checked").val();
    if(userValue === "10") {
      sum+=10;
    }
  });
}