'use strict';

/*
 * SideNavigation Component
************************************ */

var sideNavigationComponent = {
	_handleClick(event) {
		localStorage.setItem('activePage', JSON.stringify(event.target.id));
		pageLoad(homePage, true);
	},

	render() {
		var questionsAndAnswersData = JSON.parse(localStorage.getItem('questionsAndAnswersData'))[0];
		var activePage = JSON.parse(localStorage.getItem('activePage'));
		var content;
		var questionSets = questionsAndAnswersData.questionSets;
		var questionSetsLength = questionSets.length;
		var list = '';
		var sideNavigationHeader = '';
		var sideNavigationListIcon = '';
		var currentQuestionSetCount = 0;
		var totalQuestionSetCount = 0;
		var totalQuestionSetPercentage = 0;

		// Total count
		var j = 0;
		for (; j < questionSetsLength; j++) {
			var questionSet = questionSets[j].id;
			totalQuestionSetCount += questionsAndAnswersData[questionSet].length;
		}

		// Set question data
		var i = 0;
		for (; i < questionSetsLength; i++) {
			var cx = 'sideNavigation-listElement';
			var questionSet = questionSets[i].id;

			if (questionSet === activePage) {
				cx += ' active';
			}

			currentQuestionSetCount = questionsAndAnswersData[questionSet].length;
			totalQuestionSetPercentage = Math.round(currentQuestionSetCount / totalQuestionSetCount * 100, 2);

			switch(questionSet) {
				case 'generalQuestions':
					sideNavigationListIcon = '<i class="material-icons">description</i>';
					break;
				case 'htmlQuestions':
					sideNavigationListIcon = '<i class="material-icons">dashboard</i>';
					break;
				case 'cssQuestions':
					sideNavigationListIcon = '<i class="material-icons">aspect_ratio</i>';
					break;
				case 'jsQuestions':
					sideNavigationListIcon = '<i class="material-icons">code</i>';
					break;
			}

			list += '<div id="'+ questionSets[i].id +'" class="'+ cx +'" onClick="sideNavigationComponent._handleClick(event)">'+ 
						sideNavigationListIcon +
						questionSets[i].name +
						'<span class="count">'+
							currentQuestionSetCount +
							' ('+ totalQuestionSetPercentage +'%)'+
						'</span>'+
					'</div>';
		};

		sideNavigationHeader = '<div class="sideNavigation-header">Siniša Mikulić</div>';

		content = '<div class="sideNavigation">'+ 
					sideNavigationHeader + 
					list +
				'</div>';


		return content;
	}
};