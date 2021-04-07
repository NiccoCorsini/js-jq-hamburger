var open = $(".header-right > a");

var menu = $(".hamburger-menu");

var close = $(".hamburger-menu > .close");

//OPEN MENU
open.click(function(){
    menu.show();
});

//CLOSE MENU
close.click(function(){
    menu.hide();
})