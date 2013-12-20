/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$("#slider").on("orbit:ready", function(event) {    
    
    });

$(document).ready(function() {
    
    //Rating Icon Click
    $('#rating-icon').click(function() {
        if ( $("#ratings").is( ":hidden" ) ) {
            $("#ratings").slideDown();
        } else {
            $("#ratings").slideUp();
        }
    });   
    // Price Icon Clicked
    $('#price-icon').click(function() {
        if ( $("#price-range").is( ":hidden" ) ) {
            $("#price-range").slideDown();
        } else {
            $("#price-range").slideUp();
        }
    });   
    
    // Accommodation Icon
    $('#accomodation-icon').click(function() {
        if ( $("#accomodation-type").is( ":hidden" ) ) {
            $("#accomodation-type").slideDown();
        } else {
            $("#accomodation-type").slideUp();
        }
    });   
    
    //Hotel Icon Click
    $('#hotel-icon').click(function() {
        if ( $("#hotel-preference").is( ":hidden" ) ) {
            $("#hotel-preference").slideDown();
        } else {
            $("#hotel-preference").slideUp();
        }
    });   
    
    // Animation on Link Click
    //Add Animation on Links Click
    $('a[href*=#]').click(function() {
        
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);            
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');            
            if ($target.length) {
                var targetOffset = $target.offset().top;                                 
                $('html,body')
                .animate({
                    scrollTop: targetOffset
                }, 1000);
                return false;
            }
        }
    });   
    
});