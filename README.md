# Backbone Multipage Boilerplate

The compiled output script depends only on jQuery, underscore and backbone. There is no sass, no less, no require.js, no marionette, nor is it dependent on backbone models or collections. 

It provides a router, a set of containers, and a group of functions, hooks and status report objects and others. Scroll down to Features for more info on what is it can do.

### To see everything working without node
1. Download the repo
2. Drag `index.html` onto a browser. This file is located in `/public` 

`index.html` uses `/public/prod/start.js` and `/public/prod/start.css` and along with a handful of images you can see it all working to show you examples on each page.

### To see everything working using a node server
From the command line type `npm install` followed by `node server` and then go to `http://localhost:3000` in the browser. This also gives you access to compile.

### Brief explanation of compile

Projects are better managed when all code layed out in folders. e.g. `nav.js`, `nav.html` and `nav.css` all live in `public/views-special/nav`. Therefore we need something to gather and stitch them together to form the output which is `/public/prod/start.js` and `/public/prod/start.css`. 

This boilerplate uses Node and Grunt to compile. If you wanted to, you could use PHP and Lamp/Mamp but you would need to add your own code to accomplish this task. For the order of compiling scroll down to Order of Compiling and Grunt Commands in this readme.

## Objective of this Boilerplate

* Minimal dependancies but extra technology can be added later (e.g. Sass, React).
* To easily bring pieces from project to project (e.g. pages or nav).
* To separate display layer code (dom manipulation) from business logic or data.massaging. I cover this more in Best Practices.
* A management system for a team of devs. This means a clear distinction between project files for the devs and files for the boilerplate which the the VP of Engineering or team lead can administer.

## Battletesting

* Used by my team for 1 year before upload to Github. This was used in enterprise environment.


##Features
* multi page
* link to page
* deep linking to url fragments within the page (eg #/home/tab2/accordionpanel6)
* changing a deeplink within the page does not reload the page
* browser back button works across pages and deeplinks
* current page, last page, url querystrings all stored in app.status 
* pre page hook
* post page hook
* app start up hook
* event driven architecture (so views can communicate to eachother, examples given)
* default nav, loader, header, footer, modal and pages that can be removed or altered
* all code files are well commented

## Management
There is a clear line between project files and boilerplate files. When working on a project devs should stick to the 

    /public/views-pages
    /public/views-special
    /public/views-not compiled

They can also add libs, components and config files under `/public/js` however inside `/public/js/router` the only file the devs should touch is `router_developer.js`.

`router_developer.js` is where the dev can handle url routing, page level instanciation and access certain hooks.

## Developers FAQ
* **The Public Folder**<br>Outside the public folder is all the server relevant stuff such as node and grunt files. Inside the public folder is all the site stuff devs would be working on.

* **HTML**<br>Each piece of html can be accessed easily by  javascript. HTML is stored by its filename in a global object called htmlpartials. E.g. `footer.html` will be at `htmlpartials.footer`. The HTML is stored as an escaped string.

* **Delete a page**<br>For example lets delete the demo `dexter` page
  1. delete folder `/dexter` or move it to `/views-notcompiled`
  2. open `public/js/router/router_developer.js`
  3. Delete the instanciation  `this.dexterView = new DexterView();`
  4. Delete the url route <br>`'dexter(/*path)': function(f, q){ this.routeTunnel('dexter', this.dexterView, f, q) },`
  5. Edit `nav.html` to remove the page

* **Create a page**<br>For example lets create an About page
 1. Edit `nav.html` to add the new page
 2. Open `public/js/router/router_developer.js` and create an instanciation <br>`this.aboutView = new AboutView();`
 3. Open `public/js/router/router_developer.js` and create a route <br>`about(/*path)': function(f, q){ this.routeTunnel('about', this.aboutView, f, q) },`
 4. Create the folder `/public/views-pages/about` and create `about html` and `about.css` inside it
 5. Create `aboutview.js` in that folder using the following pattern

*code note: the word 'about' appears twice in code and in three console logs*

     var AboutView = Backbone.View.extend({
         el : '#pagecontainer',
         initialize: function() {
             console.log('aboutView initialize()');
         },
         render: function() {
             console.log('aboutView render()');
             this.$el.html(htmlpartials.about);
         },
         processRouteChange : function() {
             console.log('aboutView processRouteChange()');
         }
     });

* **Create a view that is not a page**<br>
This is the same as creating a page except
  * There is no need for processRouteChange() in the view definition
  * Make sure you set el to a destination container, possibly this would be in structure.html or in another page

* **Best Practices**<br>
  * Developers should avoid instanciating any view during the render of another view. A rule of thumb is to do all instanciation of new views while inside the `initialize()` function of another view, this way every view you will ever need for the lifetime of the app occurs instantaneously during app startup.
  * Try to separate the display logic to any business logic or data massaging or api calls. In otherwords jQuerying the dom should live in a backbone view, all other code try to move to a javascript library (see `BBPreload.js` as an example).


## Summary of Node and Grunt commands

`grunt clean` to wipe out compiled files

`grunt build` to do a clean and a fresh recompile

`grunt buildwatch` to clean then compile and place a watcher on the folder that will trigger a recompile in the event of a code change.

`node server` starts a server at http://localhost:3000 to change the port number edit `server.js` you will need different port numbers if you want more than one project open


## Order of compiling (for your reference)

Step 1 - Grunt compiles all html without order from

    public/views-special/**/*.html
    public/views-pages/**/*.html

into a javascript file here

    public/htmlcompiled/partials.js


Step 2 - Grunt compiles all javascript in order from

    public/js/router/prefix*.js  
    public/js/lib/jquery*.js
    public/js/lib/underscore-min.js
    public/js/lib/backbone-min.js
    public/js/lib/**/*.js
    public/js/config/config.js
    public/js/config/*.js
    public/js/lib_developer/**/*.js
    public/js/components/**/*.js
    public/htmlcompiled/*.js
    public/views-special/**/*.js
    public/views-pages/**/*.js
    public/js/router/grandcentral.js
    public/js/router/router_base*.js
    public/js/router/router_developer.js
    public/js/router/appstarter*.js

to

    public/prod/start.js

Step 3 - Grunt compiles all css in order from

    public/views-special/**/structure.css
    public/views-special/**/*.css
    public/views-pages/**/*.css

to this css file here

    public/prod/start.css


