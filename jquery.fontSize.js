/*!
 * jQuery fontSize v1.0
 * http://protoboard.cl/
 *
 * Copyright 2011, Rodrigo Augosto (@coto)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: Mon Mar 22 01:01:29 2011 -0500
 */

;(function($) {

	$.fn.fontSize = function(settings){
		defaults = {
			action: "up",
			increment: 1,
			max: 30,
			min: 8,
			widget: {css: ["mas","menos"]},
			headers: {},
			debug: false
		},
		this.click(function(){
			if(settings['elements'] == "")
				return;
			elements = settings['elements'];
			var action = $.trim((settings['action']==undefined)? defaults.action:settings['action']);
			var factor = parseInt((settings['increment']==undefined)? defaults.increment:settings['increment']);
			var max = parseInt((settings['max']==undefined)? defaults.max:settings['max']);
			var min = parseInt((settings['min']==undefined)? defaults.min:settings['min']);
			var patron = /px$/;
			if ($(elements).children().size() == 0){
					tamanno = $(elements).css('font-size');
					if (action == "up"){
						new_tamanno = parseInt(tamanno.replace(patron, '')) + factor;
						if(new_tamanno > max){
							return;
						}
					}
					else{
						new_tamanno = parseInt(tamanno.replace(patron, '')) - factor;
						if(new_tamanno < min){
							return;
						}
					}
					$(elements).css('font-size',new_tamanno+'px');
			}
			else{
				$(elements).children().each(function(){
					tamanno = $(this).css('font-size');
					if (action == "up"){
						new_tamanno = parseInt(tamanno.replace(patron, '')) + factor;
						if(new_tamanno > max){
							return;
						}
					}
					else{
						new_tamanno = parseInt(tamanno.replace(patron, '')) - factor;
						if(new_tamanno < min){
							return;
						}
					}
					$(this).css('font-size',new_tamanno+'px');
				});
			}

		})
	}
})(jQuery);
