$(document).ready(function(){
	   //$()
	   //.read()
	   //function(){}

	$('.icon-grid').click(function(){
   		$('.view-list').removeClass().addClass('webzine-list');
   		})

   	$('.icon-list').click(function(){
   		$('.webzine-list').removeClass().addClass('view-list');
   	})

   	$('.fix_option').click(function(){
   		$(this).next('ul').slideToggle();
   	})


	$('.head .depth02>ul>li').click(function(){
		var dep_idx = $(this).index();
		
		$('.head .depth02>ul>li').eq(dep_idx).find('.depth03').css('display','block')
		.parent('li').siblings().find('.depth03').css('display','none')

	})








})
