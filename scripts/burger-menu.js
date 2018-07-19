/* State / Flag variable for determining status of
 hamburger menu. */
let burgerExp = false;
// Flag for whether or not the black version of the swordburger displays
let blackFlag = false;
// Image paths
const crossPath = "img/swordcross";
const burgerPath = "img/swordburger";

// Main section outside of header and footer
const $mainContent = $('.main-content');
// Hamburger menu button
const $burger = $("#swordburger");
// Main Nav interface
const $mainNav = $(".main-nav");
// Media query for determining window size
const mql = window.matchMedia("(min-width:769px)");
// Speed for transition on click (ms)
const toggleSpeed = 400;

// Function for selecting swordburger or cross and black or white image
const burgerSelect = () => {
  if(burgerExp) {
    // Change image to crossed swords
    $burger.attr("src", crossPath + (blackFlag ? "_blk.png" : ".png"));
  } else {
    //Change image to sword burger
    $burger.attr("src", burgerPath + (blackFlag ? "_blk.png" : ".png"));
  }
}

/* Function for assisting transition between
 device sizes.  Hides the hamburger button and
 shows the main nav (and vice versa) based on
 screen size and the state of the menu */
const burgerTransition = () => {
  // If the burger is not expanded (read: collapsed)...
  if(!burgerExp) {
    // If the screen is greater than 769px...
    if (mql.matches) {
      // Ensure main nav is visible and burger is not
      $mainNav.show();
      $burger.hide();
    } else {
      // Ensure burger is visible and main nav is not
      $mainNav.hide();
      $burger.show();
    }
  // Ensure menu button shows and hides appropriately
  } else if(mql.matches) {
    $burger.hide();
  } else {
    $burger.show();
  }
}

$( document ).ready(function() {
  // Check window size and set main nav and burger visibility
  burgerTransition();

  // Force main content to use the correct padding
  $mainContent.css('padding-top',$('header').height());
  $mainContent.css('padding-bottom',$('footer').height());

  $burger.click(function() {
    // Fade out the current burger image
    $burger.fadeOut(toggleSpeed, function() {
      // Slide the main nav
      $mainNav.slideToggle(toggleSpeed);
      // Toggle state
      burgerExp = !burgerExp;
      burgerSelect();
      // Fade back in with new image
      $burger.fadeIn(toggleSpeed);
    });
  });

  // Toggle to black swordburger image on hover
  $burger.hover(function() {
    // On mouse enter, turn the black flag on and select
    blackFlag = true;
    burgerSelect();
  },function() {
    // On mouse exit, turn the black flag off (white swords) and select
    blackFlag = false;
    burgerSelect();
  });

  // Collapse burger menu on main content click
  $('.main-content, .main-nav ul li a').click(function() {
    console.log("bleh");
    if(burgerExp) {
      $burger.trigger('click');
    }
  });

  /* When the window is resized, check the transition
   function */
  $(window).resize(() => burgerTransition());
});
