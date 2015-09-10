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
		},
		{
			id: 8,
			question: 'Can you describe the difference between progressive enhancement and graceful degradation?',
			answer: [
				'Sure! Progressive enhancement is mostly encouraged by a mobile first approach for developing responsive websites.  It would like you to display all of the important informational sections on the smallest desired screen and then proportionally scale it up so it fits bigger screens by changing its shape to fit them.',
				'Graceful degradation keeps your focus on desktop screens and encourages you to remove information/features which wouldn\'t make sense to keep on smaller screens.',
				'',
			]
		},
		{
			id: 9,
			question: 'How would you optimize a website\'s assets/resources?',
			answer: [
				''
			]
		},
		{
			id: 10,
			question: 'How many resources will a browser download from a given domain at a time? What are the exceptions?',
			answer: [
				''
			]
		},
		{
			id: 11,
			question: 'Name 3 ways to decrease page load (perceived or actual load time).',
			answer: [
				''
			]
		},
		{
			id: 12,
			question: 'If you jumped on a project and they used tabs and you used spaces, what would you do?',
			answer: [
				''
			]
		},
		{
			id: 13,
			question: 'Describe how you would create a simple slideshow page.',
			answer: [
				''
			]
		},
		{
			id: 14,
			question: 'If you could master one technology this year, what would it be?',
			answer: [
				'Node.js'
			]
		},
		{
			id: 15,
			question: 'Explain the importance of standards and standards bodies.',
			answer: [
				''
			]
		},
		{
			id: 16,
			question: 'What is Flash of Unstyled Content? How do you avoid FOUC?',
			answer: [
				'When browsers encounter a stylesheet loading directive, they can either stall parsing and wait for the stylesheet to load, keep going, or stall on demand. Safari currently uses the ‘keep going’ approach. This triggers an FOUC when a script tries to access a property that the browser doesn\'t know the value of because the CSS hasn\'t loaded yet. The effect is having a website look like it\'s unstyled for a few seconds.',
				'A simple method for minimizing FOUC is by hiding all or part of the web page until all styles and JavaScript are finished by applying a class name "js" as the selector that hides all content within a container that has an id="fouc".'
			]
		},
		{
			id: 17,
			question: 'Explain what ARIA and screenreaders are, and how to make a website accessible.',
			answer: [
				''
			]
		},
		{
			id: 18,
			question: 'Explain some of the pros and cons for CSS animations versus JavaScript animations.',
			answer: [
				''
			]
		},
		{
			id: 19,
			question: 'What does CORS stand for and what issue does it address?',
			answer: [
				''
			]
		}
	],
	htmlQuestions: [
		{
			id: 20,
			question: 'What does a doctype do?',
			answer: [
				'Doctype describes the HTML that will be used in our page and it’s placed at the top of the HTML markup. Browsers also use the doctype to determine how to render a page and whether to use quirks mode or not.'
			]
		},
		{
			id: 21,
			question: 'What\'s the difference between standards mode and quirks mode?',
			answer: [
				'Standards mode support website behaviors described by HTML and CSS specification while quirks mode layout emulates non-standard behavior in older browsers.'
			]
		},
		{
			id: 22,
			question: 'What\'s the difference between HTML and XHTML?',
			answer: [
				'XHTML is HTML that follows the XML rules along with HTML tags.'
			]
		},
		{
			id: 23,
			question: 'Are there any problems with serving pages as application/xhtml+xml?',
			answer: [
				'Only if preferred User agent content serving policy is different it is considered safer to serve preferred content as well. Issues might occur while using older Internet Explorer since anything sent as application/xhtml+xml is considered as downloadable content.'
			]
		}
	]
};