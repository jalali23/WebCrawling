$(document).ready(function() {
    $('.search-button').click(function(){
        if($(this).attr('data-open')=='open'){
            $('.search-box').slideDown('normal');
            $(this).find('i').removeClass('fa-search');
            $(this).find('i').addClass('fa-times');
            $(this).attr('data-open','close');	
        } else {
            $('.search-box').slideUp('normal');
            $(this).find('i').removeClass('fa-times');
            $(this).find('i').addClass('fa-search');
            $(this).attr('data-open','open');
        }
       });
    $('.responsive-menu-icon').click(function(){
     var responsiveMenu = $('.responsive-menu');
     responsiveMenu.show();
     responsiveMenu.animate({
      right: 0
     },400);
     $('body').append('<div class="back-container"></div>');
     $('.back-container').click(function(){
      var responsiveMenu = $('.responsive-menu');
      responsiveMenu.animate({
       right: '-220px'
      },400,function(){
       responsiveMenu.hide();
      });
      $(this).remove();
     });
    });
    $('.responsive-filter-icon').click(function(){
        var responsiveFilter = $('.responsive-filter');
        responsiveFilter.show();
        responsiveFilter.animate({
         right: 0
        },400);
        $('.btn-filter').click(function(){
         var responsiveFilter = $('.responsive-filter');
         responsiveFilter.animate({
          right: '-220px'
         },400,function(){
          responsiveFilter.hide();
         });
        });
       
       });  
       $('.button-input').click(function(){
		if($(this).attr('data-input') == "off"){
			$('#form').attr('action',"{% url 'courses' %}");
            $('.form-control').attr('placeholder',"جستجوی دوره ...");
            $(this).css('box-shadow','none');
            $(this).css('border','none');
			$(this).css('background','#f5f5f5');
			$(this).attr('data-input','on');
		} else {
			$('#form').attr('action',"{% url 'articles' %}");
			$(this).css('background','yellow');
            $(this).css('box-shadow','rgb(249, 217, 43) 1px 1px 3px 3px');
            $(this).css('border','none');
            $('.form-control').attr('placeholder',"جستجوی مقاله ...");
			$(this).attr('data-input','off');
		}
     	});
	   
       //sliderr//
       function classToggle() {
        var el = document.querySelector('.icon-cards__content');
        el.classList.toggle('step-animation');
      }     
      document.querySelector('#toggle-animation').addEventListener('click', classToggle);  
      

 });