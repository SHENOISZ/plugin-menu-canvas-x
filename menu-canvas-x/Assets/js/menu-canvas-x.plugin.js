/**
 * Created by shenoisz on 28/06/16.
 */

var mozilla = navigator.userAgent.split('Firefox')[1];

var paginas = $('html, body');

if (mozilla == undefined) {

    var paginas = $('body') || $('html, body');
}

var menu_bar = $('.btn-mobile-menu-bar'),
    mobile_menu = $('.btn-mobile-menu'),
    area_all = $('.btn-mobile-menu-bar-all');

function toggleMenu( ) {

    var exibir = $( mobile_menu )
        .toggleClass('btn-mobile-menu-rotate')
        .hasClass('btn-mobile-menu-rotate');

    if ( exibir ) {

        area_all.css('display', 'block');
        menu_bar.animate( );
        menu_bar.animate( {'width': '300px'}, 300, function ( ) {

            paginas.css('overflow-y', 'hidden');
        } );
    } else {

        area_all.css('display', 'none');
        menu_bar.animate( );
        menu_bar.animate( {'width': '0'}, 300, function ( ) {

            paginas.css('overflow-y', 'scroll');
        } );
    }

    var menu_efect = $('.btn-menu-efect');
    /* tenta opacidade */
    var opacidade = document.body.style.opacity;

    if ( opacidade !== undefined ) {

        menu_efect.animate( {

                'opacity': '0.30',
                'width': '38px',
                'height': '38px',
                'border-radius': '30px',
                'top': '-4px',
                'left': '1px'
            }
            , 120, function ( ) {

                menu_efect.animate( {

                        'opacity': '0.0',
                        'width': '3px',
                        'height': '3px',
                        'border-radius': '3px',
                        'top': '13px',
                        'left': '18px'
                    }
                    , 120);
            } );
    } else {

        menu_efect.css('display', 'none');
    }
}

mobile_menu.click( toggleMenu );

area_all.click( toggleMenu );

/* tamanho maximo da pagina  */
var max_width = 768;

window.onresize = function ( ) {

    if ( paginas.width( ) > max_width ) {

        area_all.css('display', 'none');
        mobile_menu.removeClass('btn-mobile-menu-rotate');

        menu_bar.animate({'width': '0'}, 300, function ( ) {

            menu_bar.animate( );
            paginas.css('overflow-y', 'scroll');
        });
    }
};
