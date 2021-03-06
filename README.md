# Nomadic Numbers - A Data Dashboard

This website is a dashboard depicting data relating to the number of times I have moved house.
The information will be presented in a series of charts and a map:
* "Country" pie chart in the navigation panel
* "Regional" pie charts
* "Lifestyle" bar charts
* "Journey Map" showing all stopping points up to May 2018

## Features

* When viewed on a desktop as intended, the navigation is a sidebar in order to be visible at all times, without impacting the presentation of the data when jumping to anchor points down the page.
* Navigation does move to a top horizontal bar on a tablet screen in order to be as responsive as possible without compromising the size of the charts.
* Pie chart in the navigation panel shows the split between my years in South Africa and my years in the UK, and this is the first place a user can click to see the interactivity of the charts. 
* The charts are all interactive through the use of the d3.js, dc.js, and crossfilter.js libraries.
* Intro.js is used to give a walk-through of the different charts and how they interact.This is accessed using a button that the user can click, if they feel they need more information.

## Deployment

This website was initially created in Sublime Text, and then migrated to Cloud 9 for ease of testing my changes.  The website is deployed via Github Pages using the default instructions.  No changes to the code or directory structure were required for successful deployment.

## Testing

* W3C validators for my HTML and CSS.
* Family & fellow students for general opinions on readability.  Also for input on questions that could be answered by the data, such as:
  * How many provinces, towns, or suburbs has the author lived in? This visual representation makes it easier to relate to high number of moves over the lifespan of the author.
  * What kind of living arrangements has the author experienced?
  * What industries has the author worked in, and how did these differ across each country?
  * Can we see the author's journey on a map?
* Due to the nature of the charts, there was no automated testing other than what comes built into the Chrome browser developer tools.  I found this sufficiently helpful in correcting any errors in my javascript syntax during development.

### Devices:

* Dashboards require large screens for viewing, as breaking the data down onto smaller screens would prevent enough information being visible at any one time, or require the charts to be so small as to be illegible.  However, the pie charts and map are viewable on a 9.7" iPad Pro.
* When viewed on a device smaller than a large tablet, there is an explanation given as to why the website is not viewable on that device.

### Desktop Browsers:
* Chrome
* Safari
* Microsoft Edge
* Firefox
* Opera

### Bugs Found:
* After a break in development of around 4 months, I experienced the error:
`d3.min.js:1 Failed to load file:///Users/dawn/Creative%20Cloud%20Files/moves-dashboard/moves2.csv: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.`
Web searches and discussions with fellow students were unhelpful, so I turned to my mentor.  The explanation given made me realise that the gap in working on this project had caused me to forget that these charts need to be launched with an http server.  This was when I moved development from Sublime Text to Cloud 9.
* The break in development also helped me realise that the difficulty I initially experienced with my charts was due to the structure of the data itself, rather than my code.  This was a valuable learning experience, as I would not assume that data provided in future job roles would automatically be in a usable format.

## Built With

* [HTML5](https://getbootstrap.com/docs/3.3/)
* [CSS3](https://www.w3schools.com/css/)
* [Bootstrap 4.0.0](https://getbootstrap.com/docs/4.0/getting-started/introduction/) within the free  [Bootswatch Sketchy Theme](https://bootswatch.com/sketchy/)
* [Sublime Text](https://www.sublimetext.com) - text editor
* [Cloud 9]() - Online IDE
* [d3.js](https://d3js.org) - Data-Driven Documents
* [dc.js](https://dc-js.github.io/dc.js/) - Dimensional Charting Javascript Library
* [crossfilter.js](http://animateddata.co.uk/articles/crossfilter/) - Multidimensional Filtering Library
* [queue.js](https://bl.ocks.org/mbostock/1696080) - A library for running asynchronous tasks
* [intro.js](https://introjs.com/) - A library for step-by-step guides and feature introduction, used to provide information about the dashboard without cluttering the charts
* [Google Maps API](https://cloud.google.com/maps-platform/) - Google product for creating customised maps
* [favic-o-matic](http://www.favicomatic.com) - automated favicon generation
* [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html?sdid=V6NZKW2K&mv=search&s_kwcid=AL!3085!3!247459081366!b!!g!!%2Billustrator%20%2Badobe&ef_id=WpAeRQAAAIfFvxhn:20180223135933:s) - creating the colour spectrum used on the map lines

## Contributing

No contributors are permitted as the purpose of the site is to showcase my personal coding proficiency.

## Version Control

I use [GitHub](https://github.com) for versioning. For the versions available, see my [moves-dashboard repo](https://github.com/DawnM/moves-dashboard). 

## Authors

* **DawnM Calder-Murphy**

## Acknowledgments

* Yoni Lavi, my Code Institute mentor.
* Fellow students at Code Institute for their general feedback on the presentation of the website.
* Coralize, for her proof reading skills and all-round support.