/* Collapse/Expand Button for Dice rollers */
const $collapseDice = $(".dice-collapse");

/* Dice Roll Buttons */
const $d4 = $("#d4");
const $d6 = $("#d6");
const $d8 = $("#d8");
const $d10 = $('#d10');
const $d12 = $('#d12');
const $d20 = $('#d20');
const $d100 = $('#d100');

/* Dice Roll Result Boxes */
const $d4Result = $('#d4-result');
const $d6Result = $('#d6-result');
const $d8Result = $('#d8-result');
const $d10Result = $('#d10-result');
const $d12Result = $('#d12-result');
const $d20Result = $('#d20-result');
const $d100Result = $('#d100-result');

/* Collapse/expand dice roller dropdown */
const slideCollapse = () =>
  $collapseDice.next().slideToggle(500);

/* Dice Roller */
const roll = (max) =>
  (Math.floor(Math.random()*max) + 1);

/* Connect Listeners */
/* Dice Roller Collapse / Expand */
$collapseDice.on("click", ()=>slideCollapse());
$collapseDice.on("keypress", function(e) {
  if(e.keypress == '13' || e.which == '13')
    slideCollapse();
});
/* Dice roller rolls */
$d4.on("click", ()=>$d4Result.text(roll(4)));
$d6.on("click", ()=>$d6Result.text(roll(6)));
$d8.on("click", ()=>$d8Result.text(roll(8)));
$d10.on("click", ()=>$d10Result.text(roll(10)));
$d12.on("click", ()=>$d12Result.text(roll(12)));
$d20.on("click", ()=>$d20Result.text(roll(20)));
$d100.on("click", ()=>$d100Result.text(roll(100)));
