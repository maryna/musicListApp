'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

    browser.get('index.html');

    it('should automatically redirect to /view when user loads the page', function() {
        expect(browser.getLocationAbsUrl()).toMatch("/view");
    });


    describe('view', function() {

        beforeEach(function() {
            browser.get('index.html#/view');
        });


        it('should render view when user navigates to /view', function() {
            expect(element.all(by.css('[ng-view] h1')).getText()).
                toMatch(/Recent Songs/);
        });

    });

});
