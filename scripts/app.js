/*
 * Build app
************************************ */

var headerSection;
var tabsSection;
var questionsAndAnswersSection;

function reload() {
	headerSection = headerComponent();
	tabsSection = tabsComponent();
	questionsAndAnswersSection = questionsAndAnswersComponent();

	app.innerHTML = '';
	app.innerHTML += headerSection;
	app.innerHTML += tabsSection;
	app.innerHTML += questionsAndAnswersSection;
}


// App initialization
var app = document.getElementById('app');
reload();