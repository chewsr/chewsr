$(document).ready(function() {

    /* ======= Twitter Bootstrap hover dropdown ======= */   
    /* Ref: https://github.com/CWSpear/bootstrap-hover-dropdown */ 
    /* apply dropdownHover to all elements with the data-hover="dropdown" attribute */
    
    $('[data-hover="dropdown"]').dropdownHover();
    
    /* ======= Fixed header when scrolled ======= */    
    $(window).on('scroll load', function() {
         
         if ($(window).scrollTop() > 0) {
             $('#header').addClass('scrolled');
         }
         else {
             $('#header').removeClass('scrolled');
             
         }
    });
    
    
    /* ======= jQuery Placeholder ======= */
    /* Ref: https://github.com/mathiasbynens/jquery-placeholder */
    
    $('input, textarea').placeholder();    
    
    /* ======= jQuery FitVids - Responsive Video ======= */
    /* Ref: https://github.com/davatron5000/FitVids.js/blob/master/README.md */
    
    $(".video-container").fitVids();
    
    /* ======= FAQ accordion ======= */
    function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find('.panel-title a')
        .toggleClass('active')
        .find("i.fa")
        .toggleClass('fa-plus-square fa-minus-square');
    }
    $('.panel').on('hidden.bs.collapse', toggleIcon);
    $('.panel').on('shown.bs.collapse', toggleIcon);    
    
    
    /* ======= Header Background Slideshow - Flexslider ======= */    
    /* Ref: https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties */
    if ($(window).width() < 640) {
      $('.slide-2').remove()
    }
    
    $('.bg-slider').flexslider({
        animation: "fade",
        directionNav: false, //remove the default direction-nav - https://github.com/woothemes/FlexSlider/wiki/FlexSlider-Properties
        controlNav: false, //remove the default control-nav
        slideshowSpeed: 8000
    });
	
	/* ======= Stop Video Playing When Close the Modal Window ====== */
    $("#modal-video .close").on("click", function() {
        $("#modal-video iframe").attr("src", $("#modal-video iframe").attr("src"));        
    });
     
    
     /* ======= Testimonial Bootstrap Carousel ======= */
     /* Ref: http://getbootstrap.com/javascript/#carousel */
    $('#testimonials-carousel').carousel({
      interval: 8000 
    });
    
    
    /* ======= Style Switcher ======= */    
    $('#config-trigger').on('click', function(e) {
        var $panel = $('#config-panel');
        var panelVisible = $('#config-panel').is(':visible');
        if (panelVisible) {
            $panel.hide();          
        } else {
            $panel.show();
        }
        e.preventDefault();
    });
    
    $('#config-close').on('click', function(e) {
        e.preventDefault();
        $('#config-panel').hide();
    });
    
    
    $('#color-options a').on('click', function(e) { 
        var $styleSheet = $(this).attr('data-style');
		$('#theme-style').attr('href', $styleSheet);	
				
		var $listItem = $(this).closest('li');
		$listItem.addClass('active');
		$listItem.siblings().removeClass('active');
		
		e.preventDefault();
		
	});


});

function scrollTo(e, ele) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: ele.offset().top
  },800);
}

$(document).ready(function(){
  
  
  $(".btn-cta-primary, .btn-cta-secondary").click(function(e) {
    scrollTo(e, $("#cta-section"))
    dataLayer.push({
      event: 'click event',
      'page': 'Subscription'
    })
  })
  
  $('.home-nav').click(function(e){
    scrollTo(e, $('body'))
    dataLayer.push({
      event: 'click event',
      'page': 'Home'
    })
  })
  
  $('.how-nav').click(function(e) {
    scrollTo(e, $('#why'))
    dataLayer.push({
      event: 'click event',
      'page': 'How it works'
    })
  })
  
  $('.giveback-nav').click(function(e) {
    scrollTo(e, $('#giveback'))
    dataLayer.push({
      event: 'click event',
      'page': 'Give back'
    })
  })
  
  $('.about-nav').click(function(e) {
    scrollTo(e, $('.about-us-section'))
    dataLayer.push({
      event: 'click event',
      'page': 'About Us'
    })
  })
  
  
  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email)
  }

  $('.email-button').click(function(e){
    var email = $('.email-input').val()
    if (isEmail(email)) {
      var signup = $('.signup-form')
      signup.empty()
      signup.append('<div class="alert alert-success">Your subscription to Chewsr has been confirmed<br/>Thank you for your support.</div>')
      
      dataLayer.push({
        event: 'email subscription',
        'email': email
      })      
      
    }
  })
  
  
});