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

	_searchAll(event) {
		var questions = document.getElementsByClassName('name');
		var keyword = document.getElementById('search').value;

		var i = 0;
		for (; i < questions.length; i++) {
			if (questions[i].title.toLowerCase().indexOf(keyword) === -1) {
				questions[i].parentNode.remove();
			}
		}

		if (event.keyCode == 8) {
			document.getElementById('search').value = '';
			pageLoad(homePage, true);
		}
	},

	render() {
		var headerData = JSON.parse(localStorage.getItem('headerData'))[0];
		var content;

		content = '<input id="search" type="text" onKeyUp="headerComponent._searchAll(event)" placeholder="Search for questions..." /> \
					<i class="material-icons search-icon">search</i> \
					<div class="expand-all" onClick="headerComponent._expandAll()">Expand all</div> \
					<div class="resource">Resource: \
						<br /> \
			  			<a href="'+ headerData.resource +'">'+ headerData.resourceName +'</a> \
			  		</div>';


		return content;
	}
};