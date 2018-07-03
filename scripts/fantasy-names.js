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
var myNameJSON = '[{'; // Begin Fake JSON
// Dwarf First Male
myNameJSON += '"name":"Gunthir",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Flint",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Dwarf First Female
myNameJSON += '"name":"Fiona",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Ruby",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Dwarf First Non-Gender-Conforming
myNameJSON += '"name":"Yggsvard",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Ostred",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Dwarf Last
myNameJSON += '"name":"Stonehammer",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Salt",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Gembeard",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Hillborn",';
myNameJSON += '"race":"dwarf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
// Human First Male
myNameJSON += '},{';
myNameJSON += '"name":"Hektor",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Paul",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Gregory",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Solomon",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Human First Female
myNameJSON += '"name":"Victoria",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Terra",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Hildreth",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Josephine",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Human First Non-Gender-Conforming
myNameJSON += '"name":"Reese",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Pat",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Alex",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Adrian",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Human Last
myNameJSON += '"name":"Crestborn",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Smith",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Silvertongue",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Wood",';
myNameJSON += '"race":"human",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
// Elf First Male
myNameJSON += '"name":"Rothilion",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Balris",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Finn",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Silvas",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"m",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Elf First Female
myNameJSON += '"name":"Silvia",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Miamoira",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Zyllana",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Uribella",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"f",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Elf First Non-Gender-Conforming
myNameJSON += '"name":"Cyran",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Ertorias",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Faleth",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
myNameJSON += '"name":"Harpe",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"first"';
myNameJSON += '},{';
// Elf Last
myNameJSON += '"name":"Dorro",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Zumnorin",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Ferrenne",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '},{';
myNameJSON += '"name":"Lunetide",';
myNameJSON += '"race":"elf",';
myNameJSON += '"gender":"ngc",';
myNameJSON += '"anthroponymy":"last"';
myNameJSON += '}]'; // End Fake JSON

// parse JSON
var fantasyNames = $.parseJSON(myNameJSON);

// Search function for fantasy name JSON
function getFantasyName(race, gender, anthroponymy) {
  let filteredNames = fantasyNames;
  // filter race
  if(race !== '') {
    filteredNames = $.grep(filteredNames, function(obj,i) {
      return obj.race === race;
    });
  }
  // filter gender
  if(gender !== '') {
    filteredNames = $.grep(filteredNames, function(obj,i) {
      return obj.gender === gender;
    });
  }
  // filter anthroponymy
  if(anthroponymy !== '') {
    filteredNames = $.grep(filteredNames, function(obj,i) {
      return obj.anthroponymy === anthroponymy;
    });
  }
  //re-use roll function from dice.js
  var randomIndex = roll(filteredNames.length) - 1;
  return filteredNames[randomIndex].name;
};

// Full name helper function
function getFullFantasyName(race, gender) {
  let firstName = getFantasyName(race,gender,'first');
  let lastName = getFantasyName(race,'','last');
  return (firstName + ' ' + lastName);
};

// Connect functions to button click event
$('#name-randomizer').on('click', function(e){
  let race = $('input[name=radio-race]:checked', '#name-race').val();
  let gender = $('input[name=radio-gender]:checked', '#name-gender').val();
  $('#name-randomizer-result').text(getFullFantasyName(race,gender));
});
