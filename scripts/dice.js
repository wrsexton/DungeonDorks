/* Dice Roller Collapse / Expand Function */
$(".dice-collapse").on("click", function() {
  $(this).next().slideToggle(500);
});
$(".dice-collapse").on("keypress", function(e) {
  if(e.keypress == '13' || e.which == '13') {
    $(this).next().slideToggle(500);
  }
});

/* Dice Roller Function */
function roll(max) {
  let randomNumber = Math.random();
  return (Math.floor(randomNumber*max) + 1);
}

/* Get Buttons */
var $d4 = $("#d4");
var $d6 = $("#d6");
var $d8 = $("#d8");
var $d10 = $('#d10');
var $d12 = $('#d12');
var $d20 = $('#d20');
var $d100 = $('#d100');

/* Get Result Boxes */
var $d4Result = $('#d4-result');
var $d6Result = $('#d6-result');
var $d8Result = $('#d8-result');
var $d10Result = $('#d10-result');
var $d12Result = $('#d12-result');
var $d20Result = $('#d20-result');
var $d100Result = $('#d100-result');

/* Connect Listeners */
$d4.on("click", ()=>{
  $d4Result.text(roll(4));
});
$d6.on("click", ()=>{
  $d6Result.text(roll(6));
});
$d8.on("click", ()=>{
  $d8Result.text(roll(8));
});
$d10.on("click", ()=>{
  $d10Result.text(roll(10));
});
$d12.on("click", ()=>{
  $d12Result.text(roll(12));
});
$d20.on("click", ()=>{
  $d20Result.text(roll(20));
});
$d100.on("click", ()=>{
  $d100Result.text(roll(100));
});
