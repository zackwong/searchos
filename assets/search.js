openLink = function(){
  var input = document.getElementById('text1').value;
  var lp1 = "http://www.123.com/";
  var lp2 = ".html";
  var link = lp1 + input + lp2;
  window.open(link);
}