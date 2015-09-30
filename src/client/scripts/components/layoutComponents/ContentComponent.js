'use strict';
 
/*
 * Content Component
************************************ */

var contentComponent = {
	render() {
		var pageContent = JSON.parse(localStorage.getItem('questionsAndAnswersData'))[0];
		var activePage = JSON.parse(localStorage.getItem('activePage'));
		var content;
		var header = '';
		var main = '';
		var footer = '<div class="footer"></div>';

		header = headerComponent.render();
		main = questionsComponent.render();

		content = '<div class="content">'+ 
					'<div class="header">'+
						header + 
					'</div>'+
					'<div class="main">'+
						main +
					'</div>'+
					footer +
				'</div>';


		return content;
	}
};