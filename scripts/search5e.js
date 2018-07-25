// API strings
const $dndAPI = 'http://www.dnd5eapi.co/api/';
const $spells = 'spells/';

// Spellbook elements
const $spellBookButton = $('#spell-book-dropdown');
const $spellSearchButton = $('#spell-search-btn')
const $spellDisplay = $('#spell-display');
const $spellBookContent = $('#spell-book-content');
const $spellSearchInput = $('#spell-search')

// Code for formatting and printing spell data
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

// Gets the indexes of the spells found and stores them in an array
// so that they can be looked up in the spells section of the API as
// full JSON objects
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

// Uses the indexes of spells returned by getSearchIndexes to
// build HTML content using the responseJSONs
const getSearchResults = (searchContainer,searchTerm,func) => {
  const indexes = getSearchIndexes(searchContainer,searchTerm)
  if(indexes.length == 0) {
    $spellDisplay.html("No results Found");
  } else {
    $spellDisplay.html("");
  }
  $(indexes).each(function(i) {
    const $spell = $.get($dndAPI + $spells + indexes[i], function() {
      func($spell.responseJSON);
    });
  });
}

$(document).ready(function() {
  $spellBookButton.click(function() {
    $spellBookContent.slideToggle(400);
  });

  $spellSearchButton.click(function(e) {
    e.preventDefault();
    const $spellRequest = $.get($dndAPI + $spells, function() {
      getSearchResults($spellRequest.responseJSON.results,$spellSearchInput.val(), printSpell);
    }).fail(function() {
      $spellDisplay.html("ERROR");
    });
  });
});
