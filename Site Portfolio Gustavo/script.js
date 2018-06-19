(function($){

    $(document).ready(function(){

        $(' .lightbox').fancybox();






   // $('*').css('border', '4px solid blue');

   //animation
   //$(' .box:first').hide(500).delay(300).show(800);
   //$('#grow').animate({height: '200px', width: '200px', }, 800);

   //index filter
   //$('p:eq(2)').css('border', '4px solid red');

   //relationship filters
   //$(' .box:parent').css('border', '4px solid red');


$(".item")
  .hide()
  .first()
  .show("fast", function showNext() {
    $(this)
      .next("div")
      .slideDown(1000, "easeInOutExpo", showNext);
  });




$("#imgId").click(function(){
  $(this).animate({ 
    width: 200%,
    height: 200%
  }, 3000 );
});

var checkClass = function() {
  
  // Remove Existing Hide 
  if ( $('img').hasClass('hide') ) {
    $('img').removeClass('hide'); 
  }
  
};

// Click Photography
$('#fotografia').click( function() {
  
  // Check Class
  checkClass();
  
  // Hide Other Stuff
  $('img:not(.fotografia)').toggleClass('hide');

});

// Click Illustration
$('#ilustracao').click( function() {
  
    checkClass();
    $('img:not(.ilustracao)').toggleClass('hide');
  
});

// Click Logo
$('#design').click( function() {
 
    checkClass();
    $('img:not(.design)').toggleClass('hide');
  
});

// Show All 
$('#all').click( function() {
  
  checkClass();
});
        });

})(jQuery)
