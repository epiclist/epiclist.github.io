/* global */
/* exported makeVisible*/

/*==|== PRIMARY SCRIPT =====================================================

	AUTHOR: JUAN CRISTOBAL PAZOS - LA LEGION SPA

	========================================================================== */

//*********************************************************************************************************

function makeVisible( ) {
	var win = $( window );
	var allServices = $( '.js-visible' );

	allServices.each( function( i, el ) {
		el = $( el );
		if ( el.visible( true ) ) {
			el.addClass( 'visible' );
		}
	} );

	win.scroll( function( event ) {
		allServices.each( function( i, el ) {
			el = $( el );
			if ( el.visible( true ) ) {
				el.addClass( 'come-in' );
			}
			else {
				el.removeClass( 'come-in' );
				if ( el.hasClass( 'visible' ) ) {
					el.removeClass( 'visible' );
				}
			}
		} );
	} );
}

//*********************************************************************************************************