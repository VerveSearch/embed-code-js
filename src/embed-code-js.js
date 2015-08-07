(function(W,$){
	W.vs =  W.vs || {};
	W.vs.EmbedCode = function(el, opts){ 
			this.parentEl = el;
			this.url = opts.url || window.location.href;
			this.extra = opts.extra || ""; 
			this.className = opts.className || '';
			this.width = opts.width || 700;
			this.height = opts.height || 800; 
	};
	W.vs.EmbedCode.boot = function(){
		$('.embed-code[data-embed-code]').each(function(k,o){ 
			if(!$(this).data('__EMBED_CODE__')){
				$(this).data('__EMBED_CODE__', new W.vs.EmbedCode(this));
			}
		});
	}; 
	W.vs.EmbedCode.prototype = {
		render: function(parentEl){ 
			var el = parentEl || this.parentEl; 
			el.append('<div class="'+this.className+'"><textarea><iframe src="' + this.url + '" width="'+this.width+'" height="'+this.height+'"></iframe>'+this.extra+'</textarea></div>');
	 	}
	};
	$.fn.EmbedCode = function(options){ 
		return this.each(function(){
			$(this).data('__EMBED_CODE__', (p = new W.vs.EmbedCode($(this), options)).render());
		});
	};
	$(document).ready(function(){
		W.vs.EmbedCode.boot(); 
	});
})(window,jQuery);