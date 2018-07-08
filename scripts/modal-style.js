// Modals
const $modalName = $('#modal-name');
const $modalContact = $('#modal-contact');
// Modal launch buttons
const $modalNameLaunch = $('#name-randomizer-launch');
const $modalContactLaunch = $('#modal-contact-launch');
// Non-modal area - for darkening non-modal area
const $nonModalArea = $('.non-modal');

// Effect for when bootstrap modal is called
const modalOnCall = (m) => {
  // Slide transition time (ms)
  const slideTime = 1000;
  // Darken background
  $nonModalArea.css("opacity", 0.1);
  // Slide modal down
  m.slideDown(slideTime);
}

// Brighten background when bootstrap modal is dismessed
const modalOnDismiss = () =>
  $nonModalArea.css("opacity", 1);


// On popup
$modalNameLaunch.on('click', ()=>modalOnCall($modalName));
$modalContactLaunch.on('click', ()=>modalOnCall($modalContact));

// On dismiss
$modalName.on('hidden.bs.modal', ()=>modalOnDismiss());
$modalContact.on('hidden.bs.modal', ()=>modalOnDismiss());
