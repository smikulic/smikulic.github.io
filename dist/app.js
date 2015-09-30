'use strict';

/*
 * Data sets
************************************ */

localStorage.setItem('headerData', JSON.stringify([{
	resource: 'https://github.com/h5bp/Front-end-Developer-Interview-Questions',
	resourceName: 'Front-end Developer Interview Questions'
}]));

localStorage.setItem('activePage', JSON.stringify('generalQuestions'));

localStorage.setItem('questionsAndAnswersData', JSON.stringify([{
	questionSets: [{ id: "generalQuestions", name: "General Questions" }, { id: "htmlQuestions", name: "HTML Questions" }, { id: "cssQuestions", name: "CSS Questions" }, { id: "jsQuestions", name: "JS Questions" }],
	generalQuestions: [{
		id: 1,
		question: 'What did you learn yesterday/this week?',
		answer: ['ES6 classes. I’ve been learning about how having a single convenient declarative form makes class patterns easier to use. They also support constructors prototype-based inheritance, super calls, instance methods and static methods.']
	}, {
		id: 2,
		question: 'What excites or interests you about coding?',
		answer: ['I truly enjoy solving problems. More precisely, developing a smart solution for a problem that would otherwise take much longer to do manually. The solution could then be applied in the future to many similar problems.']
	}, {
		id: 3,
		question: 'What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?',
		answer: ['In all of my work, user/client experience is always the top priority.  However, it also depends on the project requirements.', 'If the project were "fire and forget", then I would focus on the standards and longevity of that project.  If it were clear that there would be no maintenance on it, it would need to be future-proof (cross browser and device UI solutions).', 'On the other hand, high-scale and agile projects would need much more effort into making the code modular, reusable, well documented, test covered and and in general more maintainable.']
	}, {
		id: 4,
		question: 'Talk about your preferred development environment.',
		answer: ['Gulp task runner won my heart with its convention over configuration. It goes hand in hand with npm packages and is super easy to setup. Terminal is a must, even in the case where there is a time-saving GUI solution, there are still so many problems that can be resolved just by using a command line.', 'Editors can be as simple as Sublime Text or as powerful as IDEs like WebStorm, Jira or other project management tools which keep your day to day progress in order.']
	}, {
		id: 5,
		question: 'Which version control systems are you familiar with?',
		answer: ['Git, and SVN. I have worked with both but Git and its workflows (e.g. Gitflow) for agile development keep your mind off of versioning and let you focus on development.']
	}, {
		id: 6,
		question: 'Can you describe your workflow when you create a web page?',
		answer: ['']
	}, {
		id: 7,
		question: 'If you have 5 different stylesheets, how would you best integrate them into the site?',
		answer: ['From a performance perspective, a monolithic stylesheet is best because the request number is a bigger performance concern than the size of one. Thus, I would concatenate them into one bigger stylesheet file and then minimize it by using build tools so I can keep my development files separate and happy in their structure.']
	}, {
		id: 8,
		question: 'Can you describe the difference between progressive enhancement and graceful degradation?',
		answer: ['Sure! Progressive enhancement is mostly encouraged by a mobile first approach for developing responsive websites.  It would like you to display all of the important informational sections on the smallest desired screen and then proportionally scale it up so it fits bigger screens by changing its shape to fit them.', 'Graceful degradation keeps your focus on desktop screens and encourages you to remove information/features which wouldn\'t make sense to keep on smaller screens.']
	}, {
		id: 9,
		question: 'How would you optimize a website\'s assets/resources?',
		answer: ['']
	}, {
		id: 10,
		question: 'How many resources will a browser download from a given domain at a time? What are the exceptions?',
		answer: ['']
	}, {
		id: 11,
		question: 'Name 3 ways to decrease page load (perceived or actual load time).',
		answer: ['']
	}, {
		id: 12,
		question: 'If you jumped on a project and they used tabs and you used spaces, what would you do?',
		answer: ['']
	}, {
		id: 13,
		question: 'Describe how you would create a simple slideshow page.',
		answer: ['']
	}, {
		id: 14,
		question: 'If you could master one technology this year, what would it be?',
		answer: ['Node.js']
	}, {
		id: 15,
		question: 'Explain the importance of standards and standards bodies.',
		answer: ['']
	}, {
		id: 16,
		question: 'What is Flash of Unstyled Content? How do you avoid FOUC?',
		answer: ['When browsers encounter a stylesheet loading directive, they can either stall parsing and wait for the stylesheet to load, keep going, or stall on demand. Safari currently uses the ‘keep going’ approach. This triggers an FOUC when a script tries to access a property that the browser doesn\'t know the value of because the CSS hasn\'t loaded yet. The effect is having a website look like it\'s unstyled for a few seconds.', 'A simple method for minimizing FOUC is by hiding all or part of the web page until all styles and JavaScript are finished by applying a class name "js" as the selector that hides all content within a container that has an id="fouc".']
	}, {
		id: 17,
		question: 'Explain what ARIA and screenreaders are, and how to make a website accessible.',
		answer: ['']
	}, {
		id: 18,
		question: 'Explain some of the pros and cons for CSS animations versus JavaScript animations.',
		answer: ['']
	}, {
		id: 19,
		question: 'What does CORS stand for and what issue does it address?',
		answer: ['']
	}],
	htmlQuestions: [{
		id: 20,
		question: 'What does a doctype do?',
		answer: ['Doctype describes the HTML that will be used in our page and it’s placed at the top of the HTML markup. Browsers also use the doctype to determine how to render a page and whether to use quirks mode or not.']
	}, {
		id: 21,
		question: 'What\'s the difference between standards mode and quirks mode?',
		answer: ['Standards mode support website behaviors described by HTML and CSS specification while quirks mode layout emulates non-standard behavior in older browsers.']
	}, {
		id: 22,
		question: 'What\'s the difference between HTML and XHTML?',
		answer: ['XHTML is HTML that follows the XML rules along with HTML tags.']
	}, {
		id: 23,
		question: 'Are there any problems with serving pages as application/xhtml+xml?',
		answer: ['Only if preferred User agent content serving policy is different it is considered safer to serve preferred content as well. Issues might occur while using older Internet Explorer since anything sent as application/xhtml+xml is considered as downloadable content.']
	}, {
		id: 24,
		question: 'How do you serve a page with content in multiple languages?',
		answer: ['']
	}, {
		id: 25,
		question: 'What are data- attributes good for?',
		answer: ['']
	}, {
		id: 26,
		question: 'Consider HTML5 as an open web platform. What are the building blocks of HTML5?',
		answer: ['']
	}, {
		id: 27,
		question: 'Describe the difference between a cookie, sessionStorage and localStorage.',
		answer: ['']
	}, {
		id: 28,
		question: 'Describe the difference between &lt;script&#62;, &lt;script async&#62; and &lt;script defer&#62;.',
		answer: ['']
	}, {
		id: 29,
		question: 'Why is it generally a good idea to position CSS &lt;link&#62;s between &lt;head&#62;&lt;/head&#62; and JS &lt;script&#62;s just before &lt;/body&#62;? Do you know any exceptions?',
		answer: ['']
	}, {
		id: 30,
		question: 'What is progressive rendering?',
		answer: ['']
	}, {
		id: 31,
		question: 'Have you used different HTML templating languages before?',
		answer: ['']
	}],
	cssQuestions: [{
		id: 32,
		question: 'What is the difference between classes and ID&#39s in CSS?',
		answer: ['']
	}, {
		id: 33,
		question: 'What&#39s the difference between &quotresetting&quot "res" and &quotnormalizing&quot CSS? Which would you choose, and why?',
		answer: ['']
	}, {
		id: 34,
		question: 'Describe Floats and how they work.',
		answer: ['']
	}, {
		id: 35,
		question: 'Describe z-index and how stacking context is formed.',
		answer: ['']
	}, {
		id: 36,
		question: 'Describe BFC(Block Formatting Context) and how it works.',
		answer: ['']
	}, {
		id: 37,
		question: 'What are the various clearing techniques and which is appropriate for what context?',
		answer: ['']
	}, {
		id: 38,
		question: 'Explain CSS sprites, and how you would implement them on a page or site.',
		answer: ['']
	}, {
		id: 39,
		question: 'What are your favourite image replacement techniques and which do you use when?',
		answer: ['']
	}, {
		id: 40,
		question: 'How would you approach fixing browser-specific styling issues?',
		answer: ['']
	}, {
		id: 41,
		question: 'How do you serve your pages for feature-constrained browsers?',
		answer: ['']
	}, {
		id: 42,
		question: 'What techniques/processes do you use?',
		answer: ['']
	}, {
		id: 43,
		question: 'What are the different ways to visually hide content (and make it available only for screen readers)?',
		answer: ['']
	}, {
		id: 44,
		question: 'Have you ever used a grid system, and if so, what do you prefer?',
		answer: ['Yes, I have used it usually plucked out from frameworks like Bootstrap or Griddle. Sometimes, I\'ve used a grid system like Flexbox and even custom grids.', 'I prefer Bootstrap grid because it supports a variety of browsers and devices due to its responsiveness and it is easily overridden with custom code if needed. In a relatively simple project, I would use custom grids since it would provide less code and more custom solution to suit its purposes.']
	}, {
		id: 45,
		question: 'Have you used or implemented media queries or mobile specific layouts/CSS?',
		answer: ['Yes, I have used it many times while building responsive layouts and using various techniques.']
	}, {
		id: 46,
		question: 'Are you familiar with styling SVG?',
		answer: ['']
	}, {
		id: 47,
		question: 'How do you optimize your webpages for print?',
		answer: ['']
	}, {
		id: 48,
		question: 'What are some of the "gotchas" for writing efficient CSS?',
		answer: ['']
	}, {
		id: 49,
		question: 'What are the advantages/disadvantages of using CSS preprocessors?',
		answer: ['The advantages are clearly code maintainability and code reduction because ofthe ability to write variables and mixins.  Furthermore, it provides easier CSS file structure and within the CSS selectors it provides clear encapsulation with its nesting capabilities.', 'As a downside, this could also lead to huge CSS files being generated. Which will happen if developers are not paying enough attention to how they utilize preprocessor language, such as nesting the selector too deep. It also adds complexity to the project because of the package that will handle preprocessing.']
	}, {
		id: 50,
		question: 'Describe what you like and dislike about the CSS preprocessors you have used.',
		answer: ['']
	}, {
		id: 51,
		question: 'How would you implement a web design comp that uses non-standard fonts?',
		answer: ['']
	}, {
		id: 52,
		question: 'Explain how a browser determines what elements match a CSS selector.',
		answer: ['']
	}, {
		id: 53,
		question: 'Describe pseudo-elements and discuss what they are used for.',
		answer: ['']
	}, {
		id: 54,
		question: 'Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.',
		answer: ['']
	}, {
		id: 55,
		question: 'What does * { box-sizing: border-box; } do? What are its advantages?',
		answer: ['']
	}, {
		id: 56,
		question: 'List as many values for the display property that you can remember.',
		answer: ['']
	}, {
		id: 57,
		question: 'What\'s the difference between inline and inline-block?',
		answer: ['']
	}, {
		id: 58,
		question: 'What\'s the difference between a relative, fixed, absolute and statically positioned element?',
		answer: ['']
	}, {
		id: 59,
		question: 'The \'C\' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?',
		answer: ['']
	}, {
		id: 60,
		question: 'What existing CSS frameworks have you used locally, or in production? How would you change/improve them?',
		answer: ['I have used Bootstrap, Foundation and Griddle, both locally and in production.', 'Bootstrap is always up to date with standards but this is why it can get overbloated, especially JavaScript features. But it has the option to choose only specific parts of it so I wouldn\'t change that. On the other hand, its classes are not so easily overridden so I would just add less encapsulation and more utility classes.', 'Griddle and Foundation are already simple, easily modified and offer more control, but are also not as widely supported by other package managers (e.g. no React.js support for components). I would not change them but just make them more available and supportive of other frameworks.']
	}, {
		id: 61,
		question: 'Have you played around with the new CSS Flexbox or Grid specs?',
		answer: ['']
	}, {
		id: 62,
		question: 'How is responsive design different from adaptive design?',
		answer: ['Responsive design is relying on flexible and fluid grids while adaptive design relies on predefined screen size.', 'Basically both design approaches are gonna be viewable in mobile devices but RWD focuses more on having one consistent layout and stylesheet by using relative values (percentages, ems etc.) and AWD uses more media queries to target specific devices and changes values to be adapted to it.']
	}, {
		id: 63,
		question: 'Have you ever worked with retina graphics? If so, when and what techniques did you use?',
		answer: ['']
	}, {
		id: 64,
		question: 'Is there any reason you\'d want to use translate() instead of absolute positioning, or vice-versa? And why?',
		answer: ['']
	}],
	jsQuestions: [{
		id: 65,
		question: 'Explain event delegation.',
		answer: ['Event delegation allows you to avoid adding event listeners to specific nodes. Instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements.', 'Simple example would be when event object bubbles up to a parent DIV which contains child elements that were clicked. This object would contain target reference to a clicked child node which is how we would identify which node was clicked.']
	}, {
		id: 66,
		question: 'Explain how this works in JavaScript.',
		answer: ['this is as a keyword that evaluates to the value of the ThisBinding of the current execution context, which means it is contained in Javascript interpreter while the code is being executed. It could be executed in global context, inside object method, context-less functions, constructors, functions defined on prototype chain, call, apply, bind functions and inside event handlers.']
	}, {
		id: 67,
		question: 'Explain how prototypal inheritance works.',
		answer: ['']
	}, {
		id: 68,
		question: 'What do you think of AMD vs CommonJS?',
		answer: ['CommonJS approach is a bit simpler with loading files from the local disk and non-intrusive syntax, while AMD is more flexible but also needs to download files through the network, regardless of asynchronous approch and adds mental overhead with more boilerplate code. And even AMD can already be applied on browser environment CommonJS is preferred specification already used by Node.js and other frameworks.', 'That being said I would prefer CommonJS since it provides a clean way to import dependencies in JavaScript.']
	}, {
		id: 69,
		question: 'Explain why the following doesn\'t work as an IIFE: function foo(){ }();.',
		answer: ['']
	}, {
		id: 70,
		question: 'What needs to be changed to properly make it an IIFE?',
		answer: ['']
	}, {
		id: 71,
		question: 'What\'s the difference between a variable that is: null, undefined or undeclared?',
		answer: ['']
	}, {
		id: 72,
		question: 'How would you go about checking for any of these states?',
		answer: ['']
	}, {
		id: 73,
		question: 'What is a closure, and how/why would you use one?',
		answer: ['Closures are functions that allow it\'s containing function to access data that is outside of its local scope.', 'The way it works is that when closure function is executed an activation object is created. That object contains local variable which becomes the first object in the execution context\'s scope chain, and global object coming second.', 'The downside of using it is more memory usage due to non standard function behaviour where as soon as the execution context is destroyed the activation object isn\'t because the reference still exists in the closure\'s property. Another issue would also be speed concerns due to constant access to out-of-scope identifiers.', 'Best way to use it is with caution, especially in large web applications.']
	}, {
		id: 74,
		question: 'What\'s a typical use case for anonymous functions?',
		answer: ['']
	}, {
		id: 75,
		question: 'How do you organize your code? (module pattern, classical inheritance?)',
		answer: ['']
	}, {
		id: 76,
		question: 'What\'s the difference between host objects and native objects?',
		answer: ['']
	}, {
		id: 77,
		question: 'Difference between: function Person(){}, var person = Person(), and var person = new Person()?',
		answer: ['']
	}, {
		id: 78,
		question: 'What\'s the difference between .call and .apply?',
		answer: ['In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an array that it unpacks as arguments for the called function.']
	}, {
		id: 79,
		question: 'Explain Function.prototype.bind.',
		answer: ['Bind allows you to set which object is treated as this within the function call.']
	}, {
		id: 80,
		question: 'When would you use document.write()?',
		answer: ['Definitely not after the document has been loaded since it would overwrite the page content.', 'It would be best to use document.write() when third party code should be included, and only on HTML pages (since it is not supported in XHTML).']
	}, {
		id: 81,
		question: 'What\'s the difference between feature detection, feature inference, and using the UA string?',
		answer: ['']
	}, {
		id: 82,
		question: 'Explain AJAX in as much detail as possible.',
		answer: ['']
	}, {
		id: 83,
		question: 'Explain how JSONP works (and how it\'s not really AJAX).',
		answer: ['']
	}, {
		id: 84,
		question: 'Have you ever used JavaScript templating?',
		answer: ['']
	}, {
		id: 85,
		question: 'If so, what libraries have you used?',
		answer: ['']
	}, {
		id: 86,
		question: 'Explain "hoisting".',
		answer: ['']
	}, {
		id: 87,
		question: 'Describe event bubbling.',
		answer: ['Event bubbling occurs when a user interacts with a nested element and the event propagates up through all of the ancestor elements.', 'End result will trigger an action on ancestor element as well as the nested one, but this can be prevent by using event.stopPropagation()']
	}, {
		id: 88,
		question: 'What\'s the difference between an "attribute" and a "property"?',
		answer: ['']
	}, {
		id: 89,
		question: 'Why is extending built-in JavaScript objects not a good idea?',
		answer: ['']
	}, {
		id: 90,
		question: 'Difference between document load event and document ready event?',
		answer: ['The onload event occurs after HTML document and all of it\'s content had been loaded (images, scripts, etc.) and the ready event is triggered after only HTML has been loaded, thus making it faster to execute.', 'The onload is a standard DOM event, while the ready event is specific to jQuery']
	}, {
		id: 91,
		question: 'What is the difference between == and ===?',
		answer: ['JavaScript has both strict and type-converting equality comaprison.', '"==" is a type-converting comparison which can say two values are equal even though their types are not the same, and "===" is a strict comparison and will say two values are equal if both their types and value is the same.', 'e.g. Two objects are strictly equal if they refer to the same Object, or two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.']
	}, {
		id: 92,
		question: 'Explain the same-origin policy with regards to JavaScript.',
		answer: ['']
	}, {
		id: 93,
		question: 'Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]',
		answer: ['']
	}, {
		id: 94,
		question: 'Why is it called a Ternary expression, what does the word "Ternary" indicate?',
		answer: ['']
	}, {
		id: 95,
		question: 'What is "use strict";? what are the advantages and disadvantages to using it?',
		answer: ['']
	}, {
		id: 96,
		question: 'Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5',
		answer: ['']
	}, {
		id: 97,
		question: 'Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?',
		answer: ['Because the identifier resolution performance will be affected. Since the deeper into the scope chain an identifier exists the slower it will be read from or written to. And in general there is a performance penalty for accessing out-of-scope identifiers.', 'The search for a variable must go all the way through the scope chain before finally being resolved in the global variable object.']
	}, {
		id: 98,
		question: 'Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?',
		answer: ['']
	}, {
		id: 99,
		question: 'Explain what a single page app is and how to make one SEO-friendly.',
		answer: ['']
	}, {
		id: 100,
		question: 'What is the extent of your experience with Promises and/or their polyfills?',
		answer: ['']
	}, {
		id: 101,
		question: 'What are the pros and cons of using Promises instead of callbacks?',
		answer: ['']
	}, {
		id: 102,
		question: 'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?',
		answer: ['']
	}, {
		id: 103,
		question: 'What tools and techniques do you use debugging JavaScript code?',
		answer: ['']
	}, {
		id: 104,
		question: 'What language constructions do you use for iterating over object properties and array items?',
		answer: ['']
	}, {
		id: 105,
		question: 'Explain the difference between mutable and immutable objects.',
		answer: ['']
	}, {
		id: 106,
		question: 'What is an example of an immutable object in JavaScript?',
		answer: ['']
	}, {
		id: 107,
		question: 'What are the pros and cons of immutability?',
		answer: ['On the pros side, immutability provides safer data manipulation. Cons would be performance issues due to deep comparison of objects.']
	}, {
		id: 108,
		question: 'How can you achieve immutability in your own code?',
		answer: ['By cloning objects before making changes or updates within them.']
	}, {
		id: 109,
		question: 'Explain the difference between synchronous and asynchronous functions.',
		answer: ['']
	}, {
		id: 110,
		question: 'What is event loop?',
		answer: ['']
	}, {
		id: 111,
		question: 'What is the difference between call stack and task queue?',
		answer: ['']
	}]
}]));
'use strict';

'use strct';

/*
 * Available Pages
************************************ */

var pages = ['homePage', 'testPage'];

/*
 * Pages config / components used
************************************ */

// Current page is empty at initialization, after other page loads it can compare which components are already active
var currentPage = {
	components: []
};

var homePage = {
	components: ['sideNavigationComponent', 'contentComponent']
};

var testPage = {
	components: ['headerComponent']
};
"use strict";

var performance = {
	startTiming: 0,
	stopTiming: 0,
	start: function start(msg) {
		this.startTiming = +new Date();
	},
	stop: function stop(msg) {
		this.stopTiming = +new Date();
		var diff = this.stopTiming - this.startTiming;
		if (diff < 50) {
			console.warn("Just about right.", diff, "ms ", msg);
		} else {
			console.warn("Taking too long.", diff, "ms ", msg);
		}
	}
};
'use strict';

/*
 * Header Component
************************************ */

var headerComponent = {

	_expandAll: function _expandAll() {
		var answers = document.getElementsByClassName('answerContainer');

		var i = 0;
		for (; i < answers.length; i++) {
			answers[i].className = 'answerContainer active';
		}
	},

	_searchAll: function _searchAll(event) {
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

	render: function render() {
		var headerData = JSON.parse(localStorage.getItem('headerData'))[0];
		var content;

		content = '<input id="search" type="text" onKeyUp="headerComponent._searchAll(event)" placeholder="Search for questions..." /> \
					<i class="material-icons search-icon">search</i> \
					<div class="expand-all" onClick="headerComponent._expandAll()">Expand all</div> \
					<div class="resource">Resource: \
						<br /> \
			  			<a href="' + headerData.resource + '">' + headerData.resourceName + '</a> \
			  		</div>';

		return content;
	}
};
'use strict';

/*
 * questions Component
************************************ */

var questionsComponent = {

	_toggleAnswer: function _toggleAnswer(event) {
		var targetAnswer = document.getElementById('answer' + event.target.id);

		if (targetAnswer.className !== 'answerContainer active') {
			targetAnswer.className += ' active';
		} else {
			targetAnswer.className = 'answerContainer';
		}
	},

	render: function render() {
		var questionsAndAnswersData = JSON.parse(localStorage.getItem('questionsAndAnswersData'))[0];
		var activePage = JSON.parse(localStorage.getItem('activePage'));
		var content;
		var questionsAndAnswers = questionsAndAnswersData[activePage] || 0;
		var questionsAndAnswersLength = questionsAndAnswers.length;
		var questionsNode = '';
		var answerNode = '';
		var generalQuestionsIcon = '';
		var generalQuestionsToggle = '';

		switch (activePage) {
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

			generalQuestionsToggle = '<i id="' + questionsAndAnswers[i].id + '" class="material-icons toggle" onClick="questionsComponent._toggleAnswer(event)">keyboard_arrow_down</i>';

			var j = 0;
			for (; j < answerParagraphsLength; j++) {
				answerParagraphs += '<p class="answer-paragraph">' + questionsAndAnswers[i].answer[j] + '</p>';
			};

			answerNode = '<div id="answer' + questionsAndAnswers[i].id + '" class="answerContainer">' + answerParagraphs + '</div>';

			questionsNode += '<div class="questionContainer">' + generalQuestionsIcon + '<div class="name" title="' + questionsAndAnswers[i].question + '">' + questionsAndAnswers[i].question + '</div>' + generalQuestionsToggle + '</div>' + answerNode;
		};

		content = '<div>' + questionsNode + '</div>';

		return content;
	}
};
'use strict';

/*
 * Content Component
************************************ */

var contentComponent = {
	render: function render() {
		var pageContent = JSON.parse(localStorage.getItem('questionsAndAnswersData'))[0];
		var activePage = JSON.parse(localStorage.getItem('activePage'));
		var content;
		var header = '';
		var main = '';
		var footer = '<div class="footer"></div>';

		header = headerComponent.render();
		main = questionsComponent.render();

		content = '<div class="content">' + '<div class="header">' + header + '</div>' + '<div class="main">' + main + '</div>' + footer + '</div>';

		return content;
	}
};
'use strict';

/*
 * SideNavigation Component
************************************ */

var sideNavigationComponent = {
	_handleClick: function _handleClick(event) {
		localStorage.setItem('activePage', JSON.stringify(event.target.id));
		pageLoad(homePage, true);
	},

	render: function render() {
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

			switch (questionSet) {
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

			list += '<div id="' + questionSets[i].id + '" class="' + cx + '" onClick="sideNavigationComponent._handleClick(event)">' + sideNavigationListIcon + questionSets[i].name + '<span class="count">' + currentQuestionSetCount + ' (' + totalQuestionSetPercentage + '%)' + '</span>' + '</div>';
		};

		sideNavigationHeader = '<div class="sideNavigation-header">Siniša Mikulić</div>';

		content = '<div class="sideNavigation">' + sideNavigationHeader + list + '</div>';

		return content;
	}
};
'use strict';

performance.start();

/*
 * Build app
************************************ */
function pageLoad(pageConfig, reload) {
	performance.start();

	var i = 0;
	var currentPageConfigComponents = currentPage.components;
	var pageConfigComponents = pageConfig.components;
	var pageConfigLength = pageConfigComponents.length;

	if (reload) {
		currentPageConfigComponents = [];
		app.innerHTML = '';
	}

	// Loop through pages to check if it already exists on page or if it needs component reload
	for (; i < pageConfigLength; i++) {
		var component = pageConfigComponents[i];

		if (currentPageConfigComponents[component]) {
			//console.log('exists!')
		} else {
				app.innerHTML += window[component].render();
				currentPageConfigComponents.push(component);
			}
	}

	performance.stop('pageLoad function');
}

// App initialization
var app = document.getElementById('app');
pageLoad(homePage, false);
//reload();
performance.stop('App init');
//# sourceMappingURL=app.js.map