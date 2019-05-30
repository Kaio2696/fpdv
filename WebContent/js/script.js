/*
  Neste arquivo você deve definir todas as chamadas do menu vertical colocando
  as informações como: name (O que vai aparecer no html) e o href (O link para
  onde deve ser direcionado), sendo necessário apenas as modificações nas
  constantes na var contentList.


  Para o funcionando é necessário ser chamado no html com:
      <aside class="sidebar"></aside>

  Não é necessário mais nenhuma chamada no html.


  O CSS está sendo gerado na pasta:
  src/components/menu/style.css
*/

$(document).ready(function() {

  $(function () {
    var menuVertical = $('.sidebar'); // Define o elemento principal a ser chamado
    var listVertical = $('<ul class="sidebar-list"></ul>'); // Lista dos elementos

    // Definir os conteúdos da lista
    var contentList = [{
        name: 'Manual da Marca',
        toggle: [{
            name: 'Marca',
            href: 'marca.html'
          },
          {
            name: 'Tipografia',
            href: 'tipografia.html'
          },
          {
            name: 'Cores',
            href: 'cores.html'
          },
          {
            name: 'Iconografia',
            href: 'iconografia.html'
          },
          {
            name: 'Banners',
            href: 'banner.html'
          },
          {
            name: 'Linguagem',
            href: 'conteudo2.0.html'
          }
        ]
      },
      {
        name: 'Sustentação',
        toggle: [
          {
            name: 'Botoes',
            href: 'botoes.html'
          },
          {
            name: 'Modal',
            href: 'botoes.html#modal'
          },
          {
            name: 'Navegação',
            href: 'navegacao.html'
          },
          {
            name: 'Tabelas e Listas',
            href: 'botoes.html#tabelas-listas'
          },
          {
            name: 'Paines e Cards',
            href: 'botoes.html#paineis-cards'
          },
          {
            name: 'Formularios',
            href: 'form.html'
          }
        ]
      },
      {
        name: 'Novos Projetos',
        toggle: [
          {
            name: 'Ações',
            href: 'acoes2.0.html'
          },
          {
            name: 'Banners',
            href: 'banner2.0.html'
          },
          {
            name: 'Cards',
            href: 'cards2.0.html'
          },
          {
            name: 'Navegação',
            href: 'navegacao2.0.html'
          },
          {
            name: 'Mosaico',
            href: 'mosaico.html'
          },
          {
            name: 'Mural',
            href: 'mural.html'
          }
        ]
      },
      {
        name: 'Mobile',
        href: 'mobile2.0.html'
      },
      {
        name: 'Downloads',
        toggle: [
          {
            name: 'CSS',
            href: 'css.html'
          },
          {
            name: 'JS',
            href: 'js.html'
          },
          {
            name: 'Bibliotecas',
            href: 'mockups.html'
          },
        ]
      }
      
    ]

    if (contentList) {
      $(menuVertical).html(listVertical);
      for (var i = 0; i < contentList.length; i++) {
        if (contentList[i].toggle) {
          $(listVertical).append($('<li class="sidebar-item active"><ul class="sidebar-anchor btn-accordion" ><h5 class="title-anchor row halign-between">' + contentList[i].name + '<i class="icon-btn-accordion icon-seta-baixo-b self-middle"></i></h5></ul></li>'));

          for (var n = 0; n < contentList[i].toggle.length; n++) {
            var indexToggle = $('ul.sidebar-list li.sidebar-item')[i];
            $(indexToggle).find('.btn-accordion').append($('<li class="toggle-item"><a class="toggle-anchor" href="' + contentList[i].toggle[n].href + '"><span class="content-anchor">' + contentList[i].toggle[n].name + '</span></a></li>'));
          }
        } else {
          $(listVertical).append($('<li class="sidebar-item active"><a class="sidebar-anchor" href="' + contentList[i].href + '"><span class="content-anchor">' + contentList[i].name + '</span></a></li>'));
        }
      }
    }

    $(menuVertical).prepend($('<div class="logo-sidebar" ><div class="btn-toggle-menu active self-middle"><span class="burger"></span><span class="burger"></span><span class="burger"></span></div><a href="home.html"><img class="img-sides-responsive" src="../assets/images/logo-guia-bs.png" /></a> <a class="atualizacoesMenu" href="atualizacoes.html"> Historico de atualizações </a></div> '));
       
  });




  function toggleSidebar() {
    $(".btn-toggle-menu").toggleClass("active");
    $(".sidebar").toggleClass("move-to-left");
    $("main").toggleClass("box-content full");
    $(".nav-top").toggleClass("nav-top-active-menu");
    $(".sidebar-item").toggleClass("active");
  }

  $("body").on("click tap", ".btn-toggle-menu", function () {
    toggleSidebar();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });


  // Toggle Sidebar
  $('body').on('click', '.btn-accordion', function () {
    var open = $(this).find('.icon-btn-accordion').hasClass('active');

    if (open) {
      $('.icon-btn-accordion').removeClass('active');
      $('.toggle-item').slideUp();
    } else {
      $('.icon-btn-accordion').removeClass('active');
      $('.toggle-item').slideUp();
      $(this).find('.icon-btn-accordion').toggleClass('active');
      $(this).find('.toggle-item').slideToggle();
    }
  });


  // Ancora com transição
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 700);
        return false;
      }
    }
  });
});

