





// Copia o código de demonstração
$(function () {

  var arrCopy = document.querySelectorAll('.btn-copy');

  for (i = 0; i < arrCopy.length; i++) {
    arrCopy[i].addEventListener('click', function (e) {
      var btnCopy = e.target;
      var elemTArea = btnCopy.parentElement.querySelector('.demo-code');
      e.preventDefault();

      elemTArea.select();
      document.execCommand('copy');
    })
  }
})

// Função para increase de numbers
var countValues = 0;
function increaseNumbers(valuetoCount){
  if(countValues == 0){
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: valuetoCount
      }, {
          duration: 2000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
  countValues++;
}

//Função Global para chamar as animações
(function($, win) {
    $.fn.inViewport = function(cb) {
       return this.each(function(i,el){
         function visPx(){
           var H = $(this).height(),
               r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
           return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
         } visPx();
         $(win).on("resize scroll", visPx);
       });
    };
  }(jQuery, window));

// Toggle HTML
$('.btn-html').click(function(){
	var pai = $(this).parent();
	$(pai).find('.scrl-form').toggleClass('active');
});
