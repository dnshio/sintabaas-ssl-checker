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

	var content = [
		['Create assembla project'],
		['Createssf'],
		['tew'],
		['Createssf'],
		['tewfwef gwergw']
	];

	var consoleContent = [
		['<li class="prompt">Adapter 1: nat</li>'],

		['<li class="prompt">SSH address: 85.54.12.1:22</li>'],

		['<li>Machine booted and ready!</li>'],

		['<li>Clearing any previously set network interfaces</li>'],

		['<li class="error">default: Error: Connection timeout. Retrying...</li>'],

		['<li class="error">default: Error: Connection timeout. Retrying...</li>'],

		['<li class="error">default: Error: Connection timeout. Retrying...</li>'],

		['<li class="error">default: Error: Connection timeout. Retrying...</li>'],

		['<li class="error">default: Error: Connection timeout. Retrying...</li>'],

		['<li class="prompt">SSH address: 85.54.12.100:22</li>'],

		['<li>SSH auth method: private key</li>'],

		['<li>default: Forwarding ports...</li>'],

		['<li>Whitelisted...</li>'],

		['<li>Mounting shared folders...</li>'],

		['<li>default: Forwarding ports...</li>'],

		['<li>Clearing any previously set forwarded ports...</li>'],

		['<li>Clearing any previously set network interfaces...</li>'],

		['<li class="prompt">ls -lahs</li>'],

		['<li>Dec 10 15:09:01 precise32 CRON[3403]: (root) CMD (  [ -x /usr/lib/php5/maxlifetime ]</li>'],

		['<li>Dec 10 14:17:01 precise32 CRON[3371]: (root) CMD (   cd / && run-parts --report /etc/cron.hourly)</li>'],

		['<li>Dec 10 14:28:30 precise32 dhclient: DHCPREQUEST of 10.0.2.15 on eth0 to 10.0.2.2 port 67</li>'],

		['<li>Dec 10 14:28:30 precise32 dhclient: DHCPACK of 10.0.2.15 from 10.0.2.2</li>'],

		['<li>Dec 10 14:28:30 precise32 dhclient: bound to 10.0.2.15 -- renewal in 40643 seconds.</li>'],

		['<li>Dec 10 14:39:01 precise32 CRON[3389]: (root) CMD (  [ -x /usr/lib/php5/maxlifetime ]</li>'],

		['<li>[ -d /var/lib/php5 ] && find /var/lib/php5/ -depth -mindepth 1 -maxdepth 1 -type f -cmin +$(/usr/lib/php5/maxlifetime)</li>'],

		['<li class="error">Dec 11 02:09:01 precise32 CRON[3738]: (root) CMD (  [ -x /usr/lib/php5/maxlifetime ]</li>'],

		['<li class="prompt">find /var/lib/php5/ -depth -mindepth 1 -maxdepth 1 -type f -cmin</li>'],

		['<li class="prompt">cd / && run-parts --report /etc/cron.hourly</li>'],

		['<li class="prompt">Dec 11 06:25:01 precise32 rsyslogd: [origin software="rsyslogd" swVersion="5.8.6" x-pid="690" x-info="http://www.rsyslog.com"] rsyslogd was HUPed</li>'],

		['<li>fsck from util-linux 2.20.1</li>'],

		['<li>fsck from util-linux 2.20.1</li>'],

		['<li>/dev/mapper/precise32-root: clean, 54414/5185536 files, 910145/20711424 blocks</li>'],

		['<li>/dev/sda1 was not cleanly unmounted, check forced.</li>'],

		['<li>rpcbind: Cannot open "/run/rpcbind/rpcbind.xdr" file for reading, errno 2 (No such file or directory)</li>'],

		['<li>rpcbind: Cannot open "/run/rpcbind/portmap.xdr" file for reading, errno 2 (No such file or directory)</li>'],

		['<li class="error">/dev/sda1: 230/124496 files (1.7% non-contiguous), 40058/248832 blocks</li>'],

		['<li>mountall: fsck /boot [307] terminated with status 1</li>'],

		['<li> * Starting NSM status monitor [74G[ OK ]</li>'],

		['<li>Skipping profile in /etc/apparmor.d/disable: usr.sbin.rsyslogd</li>'],

		['<li> * Starting AppArmor profiles        [80G [74G[ OK ]</li>'],

		['<li> * Stopping System V initialisation compatibility [74G[ OK ]</li>'],

		['<li> * Starting System V runlevel compatibility [74G[ OK ]</li>'],

		['<li> * Starting CPU interrupts balancing daemon [74G[ OK ]</li>'],

		['<li> * Starting deferred execution scheduler [74G[ OK ]</li>'],

		['<li> * Starting regular background program processing daemon [74G[ OK ]</li>'],

		['<li> * Starting save kernel messages [74G[ OK ]</li>'],

		['<li> * Starting NTP server ntpd        [80G 74G[ OK ]</li>'],

		['<li> * Stopping save kernel messages [74G[ OK ]</li>'],

		['<li>Starting the VirtualBox Guest Additions ...done.</li>'],

		['<li>Starting VirtualBox Guest Addition service  ...done.</li>'],

		['<li class="error">Warning: DocumentRoot [/var/www/ssl] does not exist</li>'],

		['<li> * Starting web server apache2        [80G [74G[ OK ]</li>'],

		['<li>RTNETLINK answers: File exists</li>'],

		['<li> * Stopping System V runlevel compatibility [74G[ OK ]</li>'],

		['<li>Clearing any previously set network interfaces</li>']
	];
});