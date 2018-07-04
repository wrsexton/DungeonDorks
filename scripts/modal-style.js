// Modals
var $modalName = $('#modal-name');
var $modalContact = $('#modal-contact');
// Modal launch buttons
var $modalNameLaunch = $('#name-randomizer-launch');
var $modalContactLaunch = $('#modal-contact-launch');
// Non-modal area - for darkening non-modal area
var $nonModalArea = $('.non-modal');

// Effect for when bootstrap modal is called
function modalOnCall(m) {
  // Slide transition time (ms)
  let slideTime = 1000;
  // Darken background
  $nonModalArea.css("opacity", 0.1);
  // Slide modal down
  m.slideDown(slideTime);
}

// Effect for when bootstrap modal is dismessed
function modalOnDismiss() {
  // Brighten background
  $nonModalArea.css("opacity", 1);
}

// On popup
$modalNameLaunch.on('click', ()=>{modalOnCall($modalName)});
$modalContactLaunch.on('click', ()=>{modalOnCall($modalContact)});

// On dismiss
$modalName.on('hidden.bs.modal', ()=>{modalOnDismiss()});
$modalContact.on('hidden.bs.modal', ()=>{modalOnDismiss()});
