/**************************************
* Correct method for loading JSON,
* does not work locally due to CORS :(
**************************************/
// var xhr = new XMLHttpRequest();
// var url = 'data/names.json';
//
// xhr.open("GET", url, true);
// xhr.onload = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText);
//     } else {
//       console.error(xhr.statusText);
//     }
//   }
// };
// xhr.onerror = function (e) {
//   console.error(xhr.statusText);
// };
// xhr.send(null);

/**************************************
* Temporary built-in JSON for testing
**************************************/
// Begin Fake JSON
const myNameJSON = `
[
  {
    "name":"Gunthir",
    "race":"dwarf",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Flint",
    "race":"dwarf",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Fiona",
    "race":"dwarf",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Ruby",
    "race":"dwarf",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Yggsvard",
    "race":"dwarf",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Ostred",
    "race":"dwarf",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Stonehammer",
    "race":"dwarf",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Salt",
    "race":"dwarf",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Gembeard",
    "race":"dwarf",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Hillborn",
    "race":"dwarf",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Hektor",
    "race":"human",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Paul",
    "race":"human",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Gregory",
    "race":"human",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Solomon",
    "race":"human",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Victoria",
    "race":"human",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Terra",
    "race":"human",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Hildreth",
    "race":"human",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Josephine",
    "race":"human",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Reese",
    "race":"human",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Pat",
    "race":"human",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Alex",
    "race":"human",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Adrian",
    "race":"human",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Crestborn",
    "race":"human",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Smith",
    "race":"human",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Silvertongue",
    "race":"human",
    "gender":"",
    "anthroponymy":"last"
  },{
    "name":"Wood",
    "race":"human",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Rothilion",
    "race":"elf",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Balris",
    "race":"elf",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Finn",
    "race":"elf",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Silvas",
    "race":"elf",
    "gender":"m",
    "anthroponymy":"first"
  },{
    "name":"Silvia",
    "race":"elf",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Miamoira",
    "race":"elf",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Zyllana",
    "race":"elf",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Uribella",
    "race":"elf",
    "gender":"f",
    "anthroponymy":"first"
  },{
    "name":"Cyran",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Ertorias",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Faleth",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Harpe",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"first"
  },{
    "name":"Dorro",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Zumnorin",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Ferrenne",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"last"
  },{
    "name":"Lunetide",
    "race":"elf",
    "gender":"ngc",
    "anthroponymy":"last"
  }
]`
// End Fake JSON

// parse JSON
const fantasyNames = $.parseJSON(myNameJSON);

// Search function for fantasy name JSON
const getFantasyName = (race, gender, anthroponymy) => {
  let filteredNames = fantasyNames;
  // filter race
  if(race !== '')
    filteredNames = $.grep(filteredNames, (obj,i) => obj.race === race);
  // filter gender
  if(gender !== '')
    filteredNames = $.grep(filteredNames, (obj,i) => obj.gender === gender);
  // filter anthroponymy
  if(anthroponymy !== '')
    filteredNames = $.grep(filteredNames, (obj,i) => obj.anthroponymy === anthroponymy);
  //re-use roll function from dice.js
  const randomIndex = roll(filteredNames.length) - 1;
  return filteredNames[randomIndex].name;
};

// Full name helper function
const getFullFantasyName = (race, gender) =>
  (`${getFantasyName(race,gender,'first')}
  ${getFantasyName(race,'','last')}`);

// Connect functions to button click event
$('#name-randomizer').on('click', function(e){
  // Get race and gender from radio buttons
  const race = $('input[name=radio-race]:checked', '#name-race').val();
  const gender = $('input[name=radio-gender]:checked', '#name-gender').val();
  // Roll the dice and give the user a name!
  $('#name-randomizer-result').text(getFullFantasyName(race || '',gender || ''));
});
