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