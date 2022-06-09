$( document ).ready(function() {
    $(window).resize(function() {
        if(window.screen.availWidth > 1440) {
            document.getElementById("sidebar").style = "";
            document.getElementById("container").style = "";
            $("#sidebar").removeClass('sidebarMenu');
        }
    });
    var themeSwitch = true;
    $('.themeSwitch').click(function(){
        // $(this).toggleClass('switch-on');
        //$("body").toggleClass('darkTheme');
        if(!themeSwitch) {
            document.getElementById("theme").href = "darkTheme.css";
            themeSwitch = true;
        }
        else {
            document.getElementById("theme").href = "lightTheme.css";
            themeSwitch = false;
        }
    });
    var menuHamburger = true;
    $('#menuHamburgerBase').click(function(){
        
        document.getElementById("sidebar").style.width = "100px";
        if(!menuHamburger) {
            $("#sidebar").removeClass('sidebarMenu');
            document.getElementById("sidebar").style.display = "none";
            document.getElementById("container").style.filter = "";
            menuHamburger = true;
        }
        else {
            $("#sidebar").addClass('sidebarMenu');
            document.getElementById("sidebar").style.display = "block";
            document.getElementById("container").style.filter = "blur(10px)";
            menuHamburger = false;
        }
    });
    
});