/*
 * Data sets
************************************ */
var headerData = {
	title: 'Hello!',
	welcomeMessage: 'My name is Sinisa Mikulic, and I know answers to these questions!',
	resource: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions'

};
var questionsAndAnswersData = {
	activeSet: 'generalQuestions',
	questionSets: [
		{id: "generalQuestions", name: "General Questions"},
		{id: "htmlQuestions", name: "HTML Questions"},
		{id: "cssQuestions", name: "CSS Questions"},
		{id: "jsQuestions", name: "JS Questions"}
	],
	generalQuestions: [
		{
			id: 1,
			question: 'What did you learn yesterday/this week?',
			answer: [
				'ES6 classes. I’ve been learning about how having a single convenient declarative form makes class patterns easier to use. They also support constructors prototype-based inheritance, super calls, instance methods and static methods.'
			]
		},
		{
			id: 2,
			question: 'What excites or interests you about coding?',
			answer: [
				'I truly enjoy solving problems. More precisely, developing a smart solution for a problem that would otherwise take much longer to do manually. The solution could then be applied in the future to many similar problems.'
			]
		},
		{
			id: 3,
			question: 'What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?',
			answer: [
				'In all of my work, user/client experience is always the top priority.  However, it also depends on the project requirements.',
				'If the project were "fire and forget", then I would focus on the standards and longevity of that project.  If it were clear that there would be no maintenance on it, it would need to be future-proof (cross browser and device UI solutions).',
				'On the other hand, high-scale and agile projects would need much more effort into making the code modular, reusable, well documented, test covered and and in general more maintainable.'
			]
		},
		{
			id: 4,
			question: 'Talk about your preferred development environment.',
			answer: [
				'Gulp task runner won my heart with its convention over configuration. It goes hand in hand with npm packages and is super easy to setup. Terminal is a must, even in the case where there is a time-saving GUI solution, there are still so many problems that can be resolved just by using a command line.',
				'Editors can be as simple as Sublime Text or as powerful as IDEs like WebStorm, Jira or other project management tools which keep your day to day progress in order.'
			]
		},
		{
			id: 5,
			question: 'Which version control systems are you familiar with?',
			answer: [
				'Git, and SVN. I have worked with both but Git and its workflows (e.g. Gitflow) for agile development keep your mind off of versioning and let you focus on development.'
			]
		},
		{
			id: 6,
			question: 'Can you describe your workflow when you create a web page?',
			answer: [
				''
			]
		},
		{
			id: 7,
			question: 'If you have 5 different stylesheets, how would you best integrate them into the site?',
			answer: [
				'From a performance perspective, a monolithic stylesheet is best because the request number is a bigger performance concern than the size of one. Thus, I would concatenate them into one bigger stylesheet file and then minimize it by using build tools so I can keep my development files separate and happy in their structure.'
			]
		}
	],
	htmlQuestions: [
		{
			id: 17,
			question: 'set2?',
			answer: [
				'YES!'
			]
		}
	]
};