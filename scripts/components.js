/*
 * Components
************************************ */

// Header Component
var headerComponent = function() {
	var content;
	var resource = headerData.resource;

	content = '<h3>'+ headerData.title +'</h3> \
					<p>'+ headerData.welcomeMessage +'</p> \
			  		<p>Resource: \
			  			<a href="'+ resource +'" class="resource-link">'+ resource +'</a> \
			  		</p>';


	return content;
};

// Tabs Component
var tabsComponent = function() {
	var content;
	var questionSets = questionsAndAnswersData.questionSets;
	var questionSetsLength = questionSets.length;
	var tabs = '';

	_handleClick = function(event) {
		questionsAndAnswersData.activeSet = event.target.id;
		reload();
	}

	var i = 0;
	for (; i < questionSetsLength; i++) {
		var cx = 'tab';

		if (questionSets[i].id === questionsAndAnswersData.activeSet) {
			cx += ' active';
		}

		tabs += '<div id="'+ questionSets[i].id +'" class="'+ cx +'" onClick="_handleClick(event)">'+ questionSets[i].name +'</div>';
	};

	content = '<div class="tabs">'+ tabs +'</div>';


	return content;
};

// QuestionsAndAnswers Component
var questionsAndAnswersComponent = function() {
	var content;
	var questionsAndAnswers = questionsAndAnswersData[questionsAndAnswersData.activeSet] || 0;
	var questionsAndAnswersLength = questionsAndAnswers.length;
	var row = '';

	var i = 0;
	for (; i < questionsAndAnswersLength; i++) {
		var answerParagraphs = '';
		var answerParagraphsLength = questionsAndAnswers[i].answer.length;

		var j = 0;
		for (; j < answerParagraphsLength; j++) {
			answerParagraphs += '<p>'+ questionsAndAnswers[i].answer[j] +'</p>';
		};

		row += '<tr> \
					<td><p>'+ questionsAndAnswers[i].question +'</p></td> \
  					<td>'+ answerParagraphs +'</td> \
				</tr>';
	};

	content = '<table>'+ row +'</table>';


	return content;
};
