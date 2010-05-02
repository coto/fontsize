/*
####################################################################
 jQuery fontSizer 1.0

 Author: Rodrigo Augosto C. (coto) <contact@protoboard.cl>
 Twitter: http://twitter.com/coto
 URL: http://protoboard.cl
 Created: 2008
####################################################################

Tested: jQuery 1.2 > x < jQuery 1.4

Hosted in: http://github.com/coto/fontsizer

How to use:
	1. include jquery.js and jquery.fontSizer.js between <head></head> tags.
	2. give id's for both links, for example #increase (+) and #decrease (-)
	3. initialize the plugin, like the folowing:
		$(document).ready(function(){
			$('#increase').fontSizer({
				action: "up",
				max: 36
			});
			$('#decrease').fontSizer({
				action: 'down'
		});
	4. that's it. now, the parameters:
			- action: "up/down" (required)
			- elements: "element" (which element will be influenced by the font-size)
			- increment: number (how many steps will increase/decrease the font-size)
			- max: number (max. font-size)
			- min: number (min. font-size)

--------------------------------------------- */

;(function($) {

	$.fn.fontSizer = function(settings){
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
