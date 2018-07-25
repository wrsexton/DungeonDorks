const $dndAPI = 'http://www.dnd5eapi.co/api/';
const $spells = 'spells/';

const $spellBookButton = $('#spell-book-dropdown');
const $spellSearchButton = $('#spell-search-btn')
const $spellDisplay = $('#spell-display');
const $spellBookContent = $('#spell-book-content');
const $spellSearchInput = $('#spell-search')

console.log('reloaded');

const printSpell = (spell) => {
  const name = spell.name;
  const desc = spell.desc[0];
  const cTime = spell.casting_time;
  const school = spell.school.name;
  const range = spell.range;
  const components = spell.components;
  //console.log(components);
  let spellHTML = $spellDisplay.html();
  spellHTML += `<div class="spell">`;
  spellHTML += `<p class="spell-name">`;
  spellHTML += name;
  spellHTML += `</p>`;
  spellHTML += `<p class="spell-desc">`;
  spellHTML += desc;
  spellHTML += `</p>`;
  spellHTML += `</div>`;
  $spellDisplay.html(spellHTML);
}

// Checks to see if 'str' contains 'contains' (returns true if it does)
const strContains = (str, contains) => {
  return (str.toLowerCase().indexOf(contains.toLowerCase()) >= 0);
}

const getSearchIndexes = (searchContainer,searchTerm) => {
  let indexes = [];
  $(searchContainer).each(function(i) {
    const $name = $(this)[0].name;
    if(strContains($name,searchTerm)) {
      indexes[indexes.length] = (i + 1);
    }
  });
  return indexes;
}

const getSearchResults = (searchContainer,searchTerm,func) => {
  const indexes = getSearchIndexes(searchContainer,searchTerm)
  if(indexes.length == 0) {
    $spellDisplay.html("Nothing Found")
  } else {
    $spellDisplay.html("")
  }
  $(indexes).each(function(i) {
    console.log(3);
    const $spell = $.get($dndAPI + $spells + indexes[i], function() {
      console.log(4);
      func($spell.responseJSON);
    });
  });
}

$spellBookButton.click(function() {
  console.log(0);
  $spellBookContent.slideToggle(400);
});

$spellSearchButton.click(function() {
  console.log(1);
  const $spellRequest = $.get($dndAPI + $spells, function() {
    console.log(2);
    getSearchResults($spellRequest.responseJSON.results,$spellSearchInput.val(), printSpell);
  }).fail(function() {
    console.log(10);
  }).always(function() {
    console.log(20);
  });
});

$(document).ready(function() {

});
