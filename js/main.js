$( document ).ready(function() {
	$("#btnSubmit").click(function(){
		checkHttps();
		consoleFrame();
	});

	var consolePanel = document.getElementById('console-panel');
	var topPanel = document.getElementsByClassName('top')[0];

	var delay = 0;
	var checkHttps = function() {
		for(var i = 0; i < content.length; i++) {
			var rand = ((Math.floor(Math.random() * 30) + 10) * 100);
			delay = delay + rand;
			showEl($('#top-steps'), i, '', delay, false);

			if(i == (content.length - 1)){
				setTimeout(function(){
					checkHttps();
				}, 2000);
			}
		}
	};

	var bottomDelay = 0;
	var consoleFrame = function() {
		var times = 2;
		for(var j = 0; j < times; j++){
			for(var i = 0; i < consoleContent.length; i++) {
				var rand = ((Math.floor(Math.random() * 80) + 1) * 10);
				bottomDelay = bottomDelay + rand;

				if(j == (times - 1) && i == (consoleContent.length - 1)) {
					showEl($('#console-panel'), i, 'console', bottomDelay, true);
				}else {
					showEl($('#console-panel'), i, 'console', bottomDelay, false);
				}
			}
		}
	};

	var showEl = function(el, num, type, delay, last) {
		setTimeout(function(){
			$(el).addClass('show');

			if(type == 'console'){
				$(el ).append(consoleContent[num]);
			}else {
				$(el ).append('<li>' + content[num] + '</li>');
			}

			if(last) {
				$('#console-panel li' ).css( 'opacity', '0' );
				setTimeout(function(){
					$('#console-panel li' ).css( 'opacity', '1' );
					setTimeout(function(){
						$('#console-panel' ).empty();
						var endMessage = [
							['We are not sure...'],
						    ['Yes']
						];
						$(el ).append('<li class="error">' + endMessage[Math.floor(Math.random()*endMessage.length)] + '</li>');
					}, 200);
				}, 200);
			}

			topPanel.scrollTop = topPanel.scrollHeight;
			consolePanel.scrollTop = consolePanel.scrollHeight;
		}, delay);
	};

	var endMessage = [
		['We are not sure...'],
		['Yes']
	];
});