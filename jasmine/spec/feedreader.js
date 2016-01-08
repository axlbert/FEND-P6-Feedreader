/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         ####Result: Expected 0 not to be 0###########
         */

        //* Purpose: checks availability and content (y/n) of feeds */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        //* Purpose: checks availability and content (y/n) of urls */
        it('have a Url', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                //* inspecting for length now and "0" instead of "null" */
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        //* Purpose: checks availability and content (y/n) of the feeds names */ 
        it('have a name', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                //* inspecting for length now and "0" instead of "null" */
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('should be hidden', function() {
            //expect($('body')).toBeDefined();
            //* if it equals, css property menu-hidden is active */
            //expect(menuCheck).toEqual("menu-hidden");
            //* if other classes were used for body, previously designed test above would fail */
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('should display when clicked and hide when clicked again', function() {
            //* observing whether the hamburger menu gets clicked */
            $('.menu-icon-link').trigger('click');
            //* applying the typecasting concept, also good for integers that act like strings */
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {


        //* Async-ness: when first feed is loaded, done is passed on */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        //checking if feeds are returned is only done when "done" is passed on
        //** asynchronous feature removed */
        it('returns at least one post', function() {
            expect($('.entry').length).toBeGreaterThan(0);
            //* without done() here, test will fail */
            //*according to reviewer redundant, but test fails without it */
            // done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        var oldFeed;
        var newFeed;

        //Async-ness: when first feed is loaded, done is passed on
        //** https://jasmine.github.io/2.3/introduction.html#section-Asynchronous_Support */
        beforeEach(function(done) {
            loadFeed(0, function() {
                //** fetch the feed html tag from the body only when asny call was able to finish */
                oldFeed = $('.feed').html();
                //** load new feed and signal async-readiness */
                loadFeed(1, function(){
                    newFeed = $('.feed').html();
                    done(); 
                });
                //** content gets returned */
                // console.log(oldFeed);
            });
        });
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        //** only launch when async call was able to finish */
        //** done removed from function entirely */
        it('replaces old feed content', function() {
            //** newFeed not empty either*/
            //console.log(newFeed);
            //** these dont add much value anymore */
            // expect(oldFeed).toBeDefined();
            // expect(newFeed).toBeDefined();
            //** if content of new feed and old feed differ, a new feed must have been loaded, test fails without "not"  */
            expect(oldFeed).not.toEqual(newFeed);
            //expect('.feed-list').toBeDefined();
            //$('.feed-list').trigger('click');
            //* without done() here, test will fail */
            //done();
        });
    });

    
    //** Future feature to add more feeds to the app */
    //** NOT IMPLEMENTED, TESTS WILL FAIL */
    describe('Add more feeds', function(){
        var lengthBefore = allFeeds.length;    

        //** clicking on the adminmode button will display some input fields */
        //** xit symbolizes pending specs that run but don't spit errors*/
        xit('provides an "add" button on the menu', function(){
            expect($('body').hasClass('admin-mode')).toBeTruthy();
            $('.admin-mode').trigger('click');
            expect($('body').hasClass('admin-fields')).toBeTruthy();
        });

        //** pushing only non-empty input fields onto the model  */
        xit('sends a warning if a required field was empty', function(){
            spyOn(window, 'alert');
            //** if the inputfield was send off empty, the alert should be called */
            expect($('.inputfield').length).not.toBeGreaterThan(0);
            expect(window.alert).toHaveBeenCalled();            
        });

        //** input to these fields will push a new item to the model */
        xit('pushes new feeds to the model', function(){
            expect(allFeeds.length).not.toEqual(lengthBefore);
        });
    });

}());