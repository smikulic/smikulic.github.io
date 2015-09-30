'use strict';

/*
 * Header Component
************************************ */

var headerComponent = {

	_expandAll() {
		var answers = document.getElementsByClassName('answerContainer');

		var i = 0;
		for (; i < answers.length; i++) {
			answers[i].className = 'answerContainer active';
		}
		
	},

	render() {
		var headerData = JSON.parse(localStorage.getItem('headerData'))[0];
		var content;

		content = '<div class="expand-all" onClick="headerComponent._expandAll()">Expand all</div> \
					<div class="resource">Resource: \
						<br /> \
			  			<a href="'+ headerData.resource +'">'+ headerData.resourceName +'</a> \
			  		</div>';


		return content;
	}
};