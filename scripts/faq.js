const showAns = ans => ans.slideToggle(400);

// Hide all faq answers by default
$("#faq li .faq-ans").each(function(i) {
  $(this).hide();
});
// Toggle visibility of faq answers when questions are clicked
$("#faq li .faq-q").each(function(i) {
  const $faqAns = $(this).parent().children('.faq-ans');
  $(this).click(() => showAns($faqAns));
  $(this).keypress(function (ev) {
        const keycode = (ev.keyCode ? ev.keyCode : ev.which);
        if (keycode == '13') showAns($faqAns);
    });
});
