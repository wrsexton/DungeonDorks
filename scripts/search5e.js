// API url
const $dndAPI = 'http://www.dnd5eapi.co/api/';

// Spellbook elements
const $spellBookButton = $('#spell-book-dropdown');
const $spellSearchButton = $('#spell-search-btn')
const $spellDisplay = $('#spell-display');
const $spellBookContent = $('#spell-book-content');
const $spellSearchInput = $('#spell-search');
const $spellSearchSuggestions = $('#spell-search-suggestions');

// Get full spell list from API
const spells = [];
fetch($dndAPI + 'spells/')
  .catch(() => $(".spell-book").hide())
  .then(blob => blob.json())
  .then(data => spells.push(...data.results));

// Turns 1 into 1st, 2 into 2nd, etc.
// Only works on numbers 0-99
const ordinal_suffix_of = (i) => {
  var j = i % 10;
  if (j == 1 && i != 11) {
      return i + "st";
  }
  if (j == 2 && i != 12) {
      return i + "nd";
  }
  if (j == 3 && i != 13) {
      return i + "rd";
  }
  return i + "th";
}

// User RegExp?  TODO
// function findMatches(searchTerm, list){
//   return list.filter(item => {
//     const regex = new RegExp(searchTerm, `gi`);
//     return place.city.match(regex) || place.state.match(regex);
//   });
// }

// Checks to see if 'str' contains 'contains'
// (returns true if it does)
const strContains = (str, contains) => {
  return (str.toLowerCase().indexOf(contains.toLowerCase()) >= 0);
}

// Removes characters incompatible with UTF-8
const strFix = (str) => {
  var output = "";
  for (var i=0; i<str.length; i++) {
      if (str.charCodeAt(i) <= 127) {
          output += str.charAt(i);
      }
  }
   return output;
}

// Print components of spell, including materials if needed
const printSpellComponents = (spell) => {
  let components = spell.components.toString();
  if(strContains(components, "M")) {
    components += ` (` + spell.material + `)`;
  }
  return components;
}

// Print spell description
const printSpellDescription = (d) => {
  let dStr = "<p>";
  if(d.length > 0) {
    dStr += `${d[0].toString()}</p><div class="spell-sub-desc">`;
    for(i=1;i<d.length;i++) {
      dStr+= `<p>${d[i].toString()}</p>`;
    }
    dStr += `</div>`;
  } else {
    dStr += `${d.toString()}</p>`;
  }
  return strFix(dStr);
}

// Code for formatting and printing spell data
const printSpell = (spell) => {
  //console.log(spell);
  // Spell name
  const name = spell.name;
  // Spell level
  const lvl = spell.level > 0 ?
              ordinal_suffix_of(spell.level) + "-level " :
              "Cantrip ";
  // Spell School
  const school = spell.school.name;
  // Spell description
  const desc = printSpellDescription(spell.desc);
  // Casting Time
  const cTime = spell.casting_time;
  // Spell Range
  const range = spell.range;
  // Spell Components
  const components = printSpellComponents(spell);
  // Spell Duration
  const duration = spell.duration;
  // Apply formatting HTML and add data
  let spellHTML = `
  <div class="spell">
    <p class="spell-name">
      ${name}
    </p>
    <div class="spell-data">
      <p class="level-school">
        ${lvl + school}
      </p>
      <p class="casting-time">
        <span class="spell-label">Casting Time: </span>
        ${cTime}
      </p>
      <p class="spell-range">
        <span class="spell-label">Range: </span>
        ${range}
      </p>
      <p class="spell-components">
        <span class="spell-label">Components: </span>
        ${components}
      </p>
      <p class="spell-duration">
        <span class="spell-label">Duration: </span>
        ${duration}
      </p>
      <div class="spell-desc">
        ${desc}
      </div>
    </div>
  </div>
  `;
  // Set HTML to constructed HTML
  return spellHTML;
}

// Uses the indexes of spells returned by getSearchIndexes to
// build HTML content using the responseJSONs
const getSearchResults = (searchContainer,searchTerm,func) => {
  // Get the relevant spells based on user searchterm
  const spellsFound = searchContainer.filter(spell => strContains(spell.name,searchTerm));
  // If there's no spells found, report that to the user
  if(spellsFound.length == 0) {
    $spellDisplay.html("No results Found");
    return;
  }
  let htmlData = "";
  // Loop over spells
  spellsFound.forEach(spell => {
    const result = [];
    fetch(spell.url)
      .then(blob => blob.json(),
            () => htmlData += "<br>ERROR<br>")
      .then(data => htmlData += func(data),
            () => htmlData += "<br>ERROR<br>")
      .then(() => $spellDisplay.html(htmlData).css("text-align", "left"));
  });
}

function displaySpellSuggestions() {
  if(this.value == ``) {
    $spellSearchSuggestions.html(``);
    return;
  }
  const spellsFound = spells.filter(spell => strContains(spell.name,this.value));
  const html = spellsFound.map(spell => {
    const regex = new RegExp(this.value, `gi`);
    const spellName = spell.name.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
    <li>
      <span class="name">${spellName}</span>
    </li>
    `
  }).join(``);
  console.log(html);
  $spellSearchSuggestions.html(html);
}

$(document).ready(function() {
  // When the main spellbook button is clicked, hide or show the
  // search interface.
  $spellBookButton.click(function() {
    $spellBookContent.slideToggle(400);
  });
  // When the search button is clicked, run an API request to
  // retrieve any possibly relevant data based on the key entered.
  $spellSearchButton.click(function(e) {
    // Prevent this button from reloading the page
    e.preventDefault();
    $spellSearchSuggestions.html(``);
    // Put up some temporary text while the routine searches.
    // Also change text alignment to center
    $spellDisplay.html("Searching...").css("text-align", "center");
    // Grab all the spells from the API as a list
    getSearchResults(spells, $spellSearchInput.val(), printSpell);
  });

  $spellSearchInput.on(`change`, displaySpellSuggestions)
  $spellSearchInput.on(`keyup`, displaySpellSuggestions)
});
