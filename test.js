var request = require('request');

var cheerio = require('cheerio');

var url='https://campkesem.givebig.org/c/CK13/a/campkesem-emory/p/CounselorDiana/';

request(url, function (error, response, html){
	if (!error && response.statusCode == 200) {
		var $ = cheerio.load(html);
		var fundraiser_name = $('div.profile_wrapper strong').text();
		var fundraiser_url = url;
		var raised_amount = 0;
		var raised_again = 0;
		var current = 0;
		$('table.recent_donations_table td').each(function(i, elem) {
			var text = $(this).text();
			if (text.indexOf("donated") > -1){
				var parts = text.split("donated $");
				if (parts[1].indexOf(",") > - 1){
					var thousands = parts[1].split(",");
					var big = parseInt(thousands[0]) * 1000;
					var little = parseInt(thousands[1]);
					var thousands_total = big + little;
					current = thousands_total;
				}
				else{
					current = parseInt(parts[1]);
				}
			}
			else if (text.indexOf("May") > -1){
				raised_amount += current;
			}
			else if (text.indexOf("June") > -1) {
				raised_amount += current;
			}
			else if (text.indexOf("July") > -1) {
				raised_amount += current;
			}
			else if (text.indexOf("August") > -1) {
				raised_amount += current;
			}
		});
		if ($('div.comments_navigation').length > 0){
			twoPages(url, raised_amount);
		}
	}
	
});

function twoPages(url, raised_sofar){
	var extended = url + '?tp=2';
	request(extended, function (error, response, html){
		if (!error && response.statusCode == 200) {
			var $ = cheerio.load(html);
			var current = 0;
			$('table.recent_donations_table td').each(function(i, elem) {
				var text = $(this).text();
				if (text.indexOf("donated") > -1){
					var parts = text.split("donated $");
					if (parts[1].indexOf(",") > - 1){
						var thousands = parts[1].split(",");
						var big = parseInt(thousands[0]) * 1000;
						var little = parseInt(thousands[1]);
						var thousands_total = big + little;
						current = thousands_total;
					}
					else{
						current = parseInt(parts[1]);
					}
				}
				else if (text.indexOf("May") > -1){
					raised_sofar += current;
				}
				else if (text.indexOf("June") > -1) {
					raised_sofar += current;
				}
				else if (text.indexOf("July") > -1) {
					raised_sofar += current;
				}
				else if (text.indexOf("August") > -1) {
					raised_sofar += current;
				}
			});	
		}
	console.log(raised_sofar);
	});
}
