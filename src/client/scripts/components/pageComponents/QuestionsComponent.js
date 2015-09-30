'use strict';

/*
 * questions Component
************************************ */

var questionsComponent = {

	_toggleAnswer(event) {
		var targetAnswer = document.getElementById('answer' + event.target.id);

		if (targetAnswer.className !== 'answerContainer active') {
			targetAnswer.className += ' active';
		} else {
			targetAnswer.className = 'answerContainer';
		}
	},

	render() {
		var questionsAndAnswersData = JSON.parse(localStorage.getItem('questionsAndAnswersData'))[0];
		var activePage = JSON.parse(localStorage.getItem('activePage'));
		var content;
		var questionsAndAnswers = questionsAndAnswersData[activePage] || 0;
		var questionsAndAnswersLength = questionsAndAnswers.length;
		var questionsNode = '';
		var answerNode = '';
		var generalQuestionsIcon = '';
		var generalQuestionsToggle = '';

		switch(activePage) {
				case 'generalQuestions':
					generalQuestionsIcon = '<i class="material-icons badge">description</i>';
					break;
				case 'htmlQuestions':
					generalQuestionsIcon = '<i class="material-icons badge">dashboard</i>';
					break;
				case 'cssQuestions':
					generalQuestionsIcon = '<i class="material-icons badge">aspect_ratio</i>';
					break;
				case 'jsQuestions':
					generalQuestionsIcon = '<i class="material-icons badge">code</i>';
					break;
			}

		var i = 0;
		for (; i < questionsAndAnswersLength; i++) {
			var answerParagraphs = '';
			var answerParagraphsLength = questionsAndAnswers[i].answer.length;

			generalQuestionsToggle = '<i id="'+ questionsAndAnswers[i].id +
									'" class="material-icons toggle" onClick="questionsComponent._toggleAnswer(event)">keyboard_arrow_down</i>';

			var j = 0;
			for (; j < answerParagraphsLength; j++) {
				answerParagraphs += '<p class="answer-paragraph">'+ questionsAndAnswers[i].answer[j] +'</p>';
			};

			answerNode = '<div id="answer'+ questionsAndAnswers[i].id +'" class="answerContainer">'+
							answerParagraphs +
						'</div>';

			questionsNode += '<div class="questionContainer">'+						
								generalQuestionsIcon +
								'<div class="name" title="'+ questionsAndAnswers[i].question +'">'+ questionsAndAnswers[i].question +'</div>' +
								generalQuestionsToggle +
							'</div>'+
							answerNode;
		};

		content = '<div>'+ questionsNode +'</div>';


		return content;
	}
};