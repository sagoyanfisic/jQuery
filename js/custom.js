(function(){
	//.animate( properties [, duration ] [, easing ] [, complete ] )

	var box = $('.box'),
			a = box.children('a'),
			figure = $('figure'),
			fail = $('#fail');

	figure.append('<span class="close">X</span>');

	var close = figure.children('span.close');

	box.hover(function(){
		$(this).stop(true, true).animate({
			'width': '1000px'
		}, 1200, 'swing', function(){
			$(this).css('background', 'yellow');
			$(this).children('a').stop(true, true).animate({
				'top': '0'
			}, 1200, 'linear', function(){
				$(this).css('padding', '20px');
			});
		});
	}, function(){
		$(this).stop(true, true).animate({
			'width': '600px'
		}, 1200, 'linear', function(){
			$(this).css('background', '#ddd');
			$(this).children('a').stop(true, true).animate({
				'top': '-100px'
			}, 1200, 'linear', function(){
				$(this).css('padding', '5px 10px');
			});
		});
	});

	a.on('click', function(){
		fail.stop(true, true).fadeTo('_default', 0.8);
		figure.delay(600).stop(true, true).fadeIn(1200);
	});

	close.on('click', function(){
		figure.stop(true, true).fadeOut();
		fail.delay(600).stop(true, true).fadeOut();
	})

})();