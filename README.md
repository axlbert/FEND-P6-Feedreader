### Feed Reader Testing ###
-Jasmine Version 2.1.2
-Feed Reeder Application
-Test file to be bound in jasmine/spec/feedreader.js

Installation:
-download folder and unzip
-click on index.html

-Documentation on Jasmine
http://jasmine.github.io/2.1/introduction.html

Available Tests:												Purpose of Test:

RSS Feeds
	are defined													#Testing access to Model#
	have a Url													#Testing data integrity of Model#
	have a name 												#Testing data integrity of Model#

The menu
	should be hidden 											#testing css features#
	should display when clicked and hide when clicked again 	#testing functionality of event listener and css#

Initial Entries
	returns at least one post									#validates feed has content#

New Feed Selection
	replaces old feed content									#validates new feeds can be loaded#

Add more feeds
	provides an "add" button on the menu						#makes sure an add button is displayed*
	sends a warning if a required field was empty				#prevents empty input fields being pushed onto the model#
	pushes new feeds to the model 								#makes sure the new feeds get pushed#
