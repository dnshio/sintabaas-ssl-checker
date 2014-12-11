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
			showEl($('#top-steps'), i, '', delay);

			if(i == (content.length - 1)){
				setTimeout(function(){
					checkHttps();
				}, 2000);
			}
		}
	};

	var bottomDelay = 0;
	var consoleFrame = function() {
		for(var i = 0; i < consoleContent.length; i++) {
			var rand = ((Math.floor(Math.random() * 80) + 1) * 10);
			bottomDelay = bottomDelay + rand;
			showEl($('#console-panel'), i, 'console', bottomDelay);

			if(i == (consoleContent.length - 1)){
				setTimeout(function(){
					consoleFrame();
				}, 2000);
			}
		}
	};

	var showEl = function(el, num, type, delay) {
		setTimeout(function(){
			$(el).addClass('show');

			if(type == 'console'){
				$(el ).append(consoleContent[num]);
			}else {
				$(el ).append('<li>' + content[num] + '</li>');
			}

			topPanel.scrollTop = topPanel.scrollHeight;
			consolePanel.scrollTop = consolePanel.scrollHeight;
		}, delay);
	};
});