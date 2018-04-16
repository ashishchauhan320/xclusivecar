// Preloader 
jQuery(document).ready(function () {
    //Preloader
    jQuery(document).ready(function () {
        jQuery('.preloader').remove();
    });
    
 
jQuery(window).on('load', function() {
			setTimeout(function() {
				jQuery('body').addClass('loaded'); 
			}, 100);
		});
    // grab the initial top offset of the navigation 
  var stickyNavTop = $('body').offset().top;
  // our function that decides weather the navigation bar should have "fixed" css position or not.
  var stickyNav = function () {
      var scrollTop = $(window).scrollTop(); // our current vertical position from the top

      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > 10) {
          $('header').addClass('sticky animated fadeInDown');
      } else {
          $('header').removeClass('sticky fadeInDown');
      }

  };

    //$(function () {
            jQuery(document).on('click','.gallery_menu a',function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                       jQuery('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
   /*  $('.gallery_menu a').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });*/
      //  });
    
  stickyNav();
  // and run it again every time you scroll
  $(window).scroll(function () {
      stickyNav();
  });

    /**** owl carousel ****/
  jQuery('#doc_slide').owlCarousel({
      autoplay: 3000,
      loop: true,
      margin: 50,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 1,
              nav: true
          },
          1000: {
              items: 3,
              nav: true,
          }
      }
  })
  
  
   if(navigator.userAgent.match(/Trident\/7\./)) {
  document.body.addEventListener("mousewheel", function() {
    event.preventDefault();
    var wd = event.wheelDelta;
    var csp = window.pageYOffset;
    window.scrollTo(0, csp - wd);
  });
}
    /****testimonial ****/
  jQuery('#testimonial_slides').owlCarousel({
      autoplay: 3000,
      loop: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 1,
              nav: false
          },
          1000: {
              items: 1,
              nav: false,
          }
      }
  })
   /****gallery ****/
  jQuery('#glry').owlCarousel({
      autoplay: 3000,
      loop: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 2,
              nav: true
          },
          1000: {
              items: 4,
              nav: true,
          }
      }
  })
  
   /****Course slider ****/
  jQuery('#crs_slide').owlCarousel({
      autoplay: 3000,
      loop: true,
            margin: 20,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 2,
              nav: true
          },
          1000: {
              items: 4,
              nav: true,
          }
      }
  })
  
   /**** owl carousel ****/
  jQuery('.tab_image_slider').owlCarousel({
      autoplay: 3000,
      loop: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 1,
              nav: false
          },
          1000: {
              items: 1,
              nav: false,
          }
      }
  })
  
  
   /****prodcut slider ****/
  jQuery('#Product_slides').owlCarousel({
      autoplay: 3000,
      loop: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true,
          },
          600: {
              items: 1,
              nav: true,
          },
          1000: {
              items: 1,
              nav: true,
          }
      }
  })
  
  
   
            jQuery(".login_btn .caret1").click(function() {
                jQuery(".view_links").toggle();
            });
       

var activeIndex = function() {
	var count = $('#carouselExampleControls').find('.carousel-item').length,
			idx = 0;
	$('#carouselExampleControls').find('.carousel-item').each(function() {
		if($(this).hasClass('active'))
			idx = $(this).index() + 1;
	});
	$('.count').html(idx + '/' + count);
}

activeIndex();

$('#carouselExampleControls').on('slid.bs.carousel', function () {
  activeIndex();
})


  
    // Wow 
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function (box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
  });
  wow.init(); 

    jQuery(window).on(' load resize', function () {
           var common_height = jQuery(".block-2").height();
           jQuery(".left_block, .right_block").css('height', common_height);
       });
    
    
    jQuery('.cs-btn').append("<span class='lines top'></span><span class='lines right'></span><span class='lines bottom'></span><span class='lines left'></span>");
        jQuery('.cs-btn').attr('pk', '');
    
    
   particlesJS("particles-js", {"particles":{"number":{"value":105,"density":{"enable":true,"value_area":1123}},"color":{"value":"#ffffff"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":170,"color":"#b89648","opacity":1,"width":2},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    
    particlesJS("particles-js1", {"particles":{"number":{"value":105,"density":{"enable":true,"value_area":1123}},"color":{"value":"#ffffff"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":170,"color":"#b89648","opacity":1,"width":2},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    
     particlesJS("particles-js3", {"particles":{"number":{"value":105,"density":{"enable":true,"value_area":1123}},"color":{"value":"#ffffff"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":170,"color":"#b89648","opacity":1,"width":2},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    
    particlesJS("particles-js4", {"particles":{"number":{"value":105,"density":{"enable":true,"value_area":1123}},"color":{"value":"#ffffff"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":170,"color":"#b89648","opacity":1,"width":2},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    
     particlesJS("particles-js5", {"particles":{"number":{"value":105,"density":{"enable":true,"value_area":1123}},"color":{"value":"#ffffff"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":170,"color":"#b89648","opacity":1,"width":2},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    
    particlesJS("particles-js6", {"particles":{"number":{"value":105,"density":{"enable":true,"value_area":1123}},"color":{"value":"#ffffff"},"shape":{"type":"triangle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":0,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":170,"color":"#b89648","opacity":1,"width":2},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;
    
    

    
    
});