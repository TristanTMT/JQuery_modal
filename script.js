$(function()
{
    let welcome_section = $('.welcome-section');
    let enter_button = welcome_section.find('.enter-button');

    setTimeout(function()
    {
        welcome_section.removeClass("content-hidden");
    }, 800);

    enter_button.on('click', function(e)
    {
        e.preventDefault();
        welcome_section.addClass("content-hidden").fadeOut();
    })
});