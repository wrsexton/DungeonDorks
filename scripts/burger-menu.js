/* State / Flag variable for determining status of
 hamburger menu. */
let burgerExp = false;

// Hamburger menu button
const $burger = $("#swordburger");
// Main Nav interface
const $mainNav = $(".main-nav");
// Media query for determining window size
const mql = window.matchMedia("(min-width:769px)");
// Speed for transition on click (ms)
const toggleSpeed = 400;

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
    // Otherwise...
    } else {
      // Ensure burger is visible and main nav is not
      $mainNav.hide();
      $burger.show();
    }
  }
}

$( document ).ready(function() {
  // Check window size and set main nav and burger visibility
  burgerTransition();

  $burger.click(function() {
    // Fade out the current burger image
    $burger.fadeOut(toggleSpeed, function() {
      // Slide the main nav
      $mainNav.slideToggle(toggleSpeed);
      // If the burger is collapsed
      if(!burgerExp) {
        // Change image to crossed swords
        $burger.attr("src", "img/swordcross.png");
      } else {
        //Change image to sword burger
        $burger.attr("src", "img/swordburger.png");
      }
      // Toggle state
      burgerExp = !burgerExp;
      // Fade back in with new image
      $burger.fadeIn(toggleSpeed);
    });
  });
  /* When the window is resized, check the transition
   function */
  $(window).resize(() => burgerTransition());
});
