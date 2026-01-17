const text = document.getElementById('text');
const text2 = document.getElementById('multiple');
var score = 0;
var multiplier = 1;
var cps = 1;
// Define the function in a <script> tag
function myFunction() {
  score += 1;
  text.textContent = score * multiplier;
  text2.textContent = 'x' + multiplier;
}
function powerup1(){
  if(score > 10){
    multiplier += 1;
    score -= 10;
    text.textContent = score * multiplier;
    text2.textContent = 'x' + multiplier;
  }
}



