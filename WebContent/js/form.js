$(document).ready(function(){
	$("#slider1").slider();
	$("#slider2").slider();
	$("#slider3").slider();

	$(".mascara_").inViewport(function(px){
    if(px){
			setTimeout(function(){
				$('.controle').removeClass('transparent').addClass("animated fadeInRight");
	    }, 420);
			setTimeout(function(){
				$('.gilete').removeClass('transparent').addClass("animated fadeInRight");
	    }, 400);
			setTimeout(function(){
				$('.doces').removeClass('transparent').addClass("animated fadeInRight");
	    }, 450);
			setTimeout(function(){
				$('.computer').removeClass('transparent').addClass("animated fadeInRight");
	    }, 510);
			setTimeout(function(){
				$('.borracha').removeClass('transparent').addClass("animated fadeInRight");
	    }, 550);
			setTimeout(function(){
				$('.caneta').removeClass('transparent').addClass("animated fadeInRight");
	    }, 650);
    }
	});

	$('.alertas_').inViewport(function(px){
    if(px){
			setTimeout(function(){
				$('.old-game').removeClass('transparent').addClass("bounceInRight");
			}, 700);
		}
	});

	 $(".mask-options").change(function(){ //Quando houver uma mudança no select
	   var opt = $(".mask-options option:selected").val();
		 $('.box-option-selected .option-selected').addClass('transparent').hide();
		 $('.box-option-selected .'+opt+'').removeClass('transparent').show();
	 });
	});
