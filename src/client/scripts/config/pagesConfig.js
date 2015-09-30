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