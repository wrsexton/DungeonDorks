$(document).ready(function() {
  // Hide all faq answers by default
  $("#faq li .faq-ans").each(function(i) {
    $(this).hide();
  });
  // Toggle visibility of faq answers when questions are clicked
  $("#faq li .faq-q").each(function(i) {
    $(this).click(function() {
      $(this).parent().children('.faq-ans').slideToggle(400);
    });
  });
});
