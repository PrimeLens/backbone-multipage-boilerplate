var htmlpartials = {};

htmlpartials["header"] = "<h2>Backbone Multipage Boilerplate</h2>";

htmlpartials["loader"] = "<div id=\"loader\">\n" +
   "    <div class=\"loadingmessage\">\n" +
   "        <img class=\"spinner\" src=\"randomDirectory/images/ui/spinner.gif\">\n" +
   "    </div>\n" +
   "</div>";

htmlpartials["nav"] = "\n" +
   "<!--\n" +
   "    make sure each nav item has an attribute navid where the value of navid matches the route for that page\n" +
   "    updateNavActive()  in navview.js   uses navid to identify the correct item to add a selected state to\n" +
   "-->\n" +
   "\n" +
   "<a class=\"navitem\" navid=\"home\" href=\"#\" track=\"home\">Home</a>\n" +
   "<a class=\"navitem\" navid=\"gameofthrones\" href=\"#/gameofthrones\">Game Of Thrones</a>\n" +
   "<a class=\"navitem\" navid=\"walkingdead\"  href=\"#/walkingdead\">Walking Dead</a>\n" +
   "<a class=\"navitem\" navid=\"dexter\"  href=\"#/dexter\">Dexter</a>\n" +
   "<a class=\"navitem\" navid=\"trueblood\"  href=\"#/trueblood\">True Blood</a>\n" +
   "<a class=\"navitem\" navid=\"hannibal\"  href=\"#/hannibal\">Hannibal</a>\n" +
   "<a class=\"navitem\" navid=\"breakingbad\"  href=\"#/breakingbad\">Breaking Bad</a>\n" +
   "<a class=\"navitem\" navid=\"firefly\"  href=\"#/firefly\">Firefly</a>\n" +
   "<a class=\"navitem\" navid=\"madmax\"  href=\"#/madmax\">Mad Max</a>\n" +
   "";

htmlpartials["parentsadvisory"] = "<div class=\"parentsadvisory\">\n" +
   "\n" +
   "    <strong>Don't</strong><br>let kids<br>watch this\n" +
   "\n" +
   "</div>";

htmlpartials["quizheader"] = "<div class=\"quizheader\">\n" +
   "    <span class=\"leftGraphic\"></span>\n" +
   "    <span class=\"quiztitle\"></span>\n" +
   "    <span class=\"rightGraphic\"></span>\n" +
   "</div>";

htmlpartials["quizitem"] = "<div class=\"quizitem\">\n" +
   "    <span></span>\n" +
   "</div>\n" +
   "";

htmlpartials["structure"] = "<div id=\"appContainer\">\n" +
   "    <div id=\"headercontainer\"></div>\n" +
   "    <div id=\"navcontainer\"></div>\n" +
   "    <div id=\"pagecontainer\"></div>\n" +
   "    <div id=\"footercontainer\"></div>\n" +
   "    <div id=\"modalcontainer\"></div>\n" +
   "    <div id=\"loadercontainer\"></div>\n" +
   "</div>";

htmlpartials["breakingbad"] = "<div id=\"breakingbadpage\">\n" +
   "\n" +
   "    <img src=\"randomDirectory/images/breakingbadpage/breakingbad.jpg\">\n" +
   "\n" +
   "    <p> Here we instanciate a view within a view. The QuizView javascript is instanciated on Hannibal and Breaking Bad.\n" +
   "        The instanciation happens when the app starts.</p>\n" +
   "\n" +
   "    <p>Just take note that we never pass in data at the time the page instanciates because state data is not present during\n" +
   "        the initialize phase.  Instead pass it in during render() or processRouteChange()</p>\n" +
   "\n" +
   "    <p>This nested QuizView is simple and does not save its state when changing away to another page. For that example see the\n" +
   "        nested views on Firelfy</p>\n" +
   "\n" +
   "    <div class=\"panel\"></div>\n" +
   "\n" +
   "\n" +
   "</div>";

htmlpartials["dexter"] = "<div id=\"dexterpage\">\n" +
   "\n" +
   "    <img src=\"randomDirectory/images/dexterpage/dexter.jpg\">\n" +
   "\n" +
   "    <p>The Dexter page (as well as the True Blood page) bring in a Parents Advisory view that gets recycled. You can see that the parentsadvisory view is html only</p>\n" +
   "\n" +
   "\n" +
   "</div>";

htmlpartials["firefly"] = "<div id=\"fireflypage\">\n" +
   "\n" +
   "    <img class=\"mainpic\" src=\"randomDirectory/images/fireflypage/firefly-cast.jpg\">\n" +
   "\n" +
   "    <p>This page is an example of event driven architecture.</p>\n" +
   "\n" +
   "    <p>Click on an item below and it will move to the other container. An item will either take on text form or\n" +
   "    image form depending upon which container it is in. Each container is controlled by a separate and different nested view.\n" +
   "    Each of the views remembers its state in case you navigate away to another page.</p>\n" +
   "\n" +
   "    <p> When an item is clicked the view takes care of itself, removing the item from its model,\n" +
   "     sending the event to Grand Central and finally rerendering according to the models new content.</p>\n" +
   "\n" +
   "    <p>You'll notice that in the code definition this.render() does not exist, also $el does not exist until\n" +
   "        its assigned during runtime. This is to show you that during instanciation,\n" +
   "        <span class=\"codestyle\">initialize()</span> is the only method required by the Backbone framework.\n" +
   "    </p>\n" +
   "\n" +
   "    <p>The last thing to note is that the code for these views is not stored in <span class=\"codestyle\">/views-special</span>\n" +
   "    I chose to do this because its not instanciated on different pages.  Instead each view is instanciated once and is specific\n" +
   "    to the FireFly page experience.  Therefore it makes sense to store the javascript in <span class=\"codestyle\">/firefly</span>\n" +
   "    along with the main file. Also JS filenames don't make a difference and are ignored at compile time, I could have put all three views\n" +
   "        in the one JS file and it would be the same.</p>\n" +
   "\n" +
   "    <div class=\"container one\"></div>\n" +
   "    <div class=\"container two\"></div>\n" +
   "\n" +
   "</div>";

htmlpartials["hannibal"] = "<div id=\"hannibalpage\">\n" +
   "\n" +
   "    <img src=\"randomDirectory/images/hannibalpage/hannibal.jpg\">\n" +
   "\n" +
   "    <p> Here we instanciate a view within a view. The QuizView javascript is instanciated on Hannibal and Breaking Bad.\n" +
   "        The instanciation happens when the app starts.</p>\n" +
   "\n" +
   "    <p>Just take note that we never pass in data at the time the page instanciates because state data is not present during\n" +
   "        the initialize phase.  Instead pass it in during render() or processRouteChange()</p>\n" +
   "\n" +
   "    <p>This nested QuizView is simple and does not save its state when changing away to another page. For that example see the\n" +
   "        nested views on Firelfy</p>\n" +
   "\n" +
   "    <div class=\"quizcontainer\"></div>\n" +
   "\n" +
   "</div>";

htmlpartials["home"] = "<div id=\"homepage\">\n" +
   "\n" +
   "    <img src=\"randomDirectory/images/homepage/matrix.jpg\">\n" +
   "    <!-- this is a comment -->\n" +
   "    <p>This is a basic page. All html, css and javascript for this page is stored in the home view folder in <span class=\"codestyle\">/public/views-pages</span></p>\n" +
   "\n" +
   "    <p>Below are links and summaries of the other pages in the boilerplate.</p>\n" +
   "\n" +
   "    <p>\n" +
   "        <a class=\"pagetitle\" href=\"#/gameofthrones\">The Game of Thrones Page</a>\n" +
   "        - here is an example showing how css can completely break away from the\n" +
   "        css pattern discussed on the home page. It also shows an extra render panel.\n" +
   "    </p>\n" +
   "\n" +
   "    <p>\n" +
   "        <a class=\"pagetitle\" href=\"#/walkingdead\">Walking Dead Page</a>\n" +
   "        - an example showing how to combine deeplinks with\n" +
   "        pulling data from the config. The browsers back button works with the deeplinks.\n" +
   "    </p>\n" +
   "\n" +
   "    <p>\n" +
   "        <a class=\"pagetitle\" href=\"#/dexter\">Dexter and True Blood</a>\n" +
   "        - here you can see how a sub-view that is html only\n" +
   "        can be recylced and used across multiple pages.\n" +
   "    </p>\n" +
   "\n" +
   "    <p>\n" +
   "        <a class=\"pagetitle\" href=\"#/hannibal\">Hannibal and Breaking Bad</a>\n" +
   "        - here is an example showing how we can nest\n" +
   "    javascript views. The same view with javascript instanciates on each page.\n" +
   "    </p>\n" +
   "\n" +
   "    <p>\n" +
   "        <a class=\"pagetitle\" href=\"#/firefly\">Firefly</a>\n" +
   "        - this page has two nested views that communicate to each other\n" +
   "        using event architecture. I've named the event dispatcher grandCentral.\n" +
   "    </p>\n" +
   "\n" +
   "    <p>\n" +
   "        <a class=\"pagetitle\" href=\"#/madmax\">Mad Max</a>\n" +
   "        - this page gives an example of how the loaderView works in conjunction with the BBPreload library.\n" +
   "    </p>\n" +
   "\n" +
   "\n" +
   "</div>";

htmlpartials["madmax"] = "<div id=\"madmaxpage\">   \n" +
   "    <p>The Mad Max page gives an example of how the loaderView works in conjunction with the BBPreload library. Throttle the network load time in your browser to see it in action. This is the order of what is happening</p>\n" +
   "    <ol>\n" +
   "    	<li>It shows the loaderview which contains a spinning gif</li>\n" +
   "		<li>Preloads the pages' images with BBPreload</li>\n" +
   "		<li>The callback fires for BBPreload</li>\n" +
   "		<li>It hides the loaderview</li>\n" +
   "		<li>Then renders the page</li>\n" +
   "    </ol>\n" +
   "	<img src=\"randomDirectory/images/madmaxpage/furiosa.jpg\">\n" +
   "	<img src=\"randomDirectory/images/madmaxpage/guitarmadmax.jpg\">\n" +
   "	<img src=\"randomDirectory/images/madmaxpage/immortanjoe.jpg\">\n" +
   "	<img src=\"randomDirectory/images/madmaxpage/nuxvehicle.jpg\">\n" +
   "	<img src=\"randomDirectory/images/madmaxpage/openingscene.jpg\">\n" +
   "	<img src=\"randomDirectory/images/madmaxpage/prisoner.jpg\">\n" +
   "	<img src=\"randomDirectory/images/madmaxpage/witnessme.jpg\">\n" +
   "\n" +
   "</div>";

htmlpartials["thrones"] = "<div class=\"whatevercssclass\">\n" +
   "\n" +
   "    <img src=\"randomDirectory/images/thronespage/gamethrones.jpg\">\n" +
   "\n" +
   "    <p>All the other pages follow specific css pattern. The purpose of this page is\n" +
   "        to demonstrate that this has nothing to do with how javascript\n" +
   "        identifies the html to inject.</p>\n" +
   "\n" +
   "    <p>In this framework the page's html is identified by the filename and accessed though the\n" +
   "        htmlpartials object. If you inspect element or look at the html code you will see this is the case.</p>\n" +
   "\n" +
   "</div>";

htmlpartials["thronespanel"] = "<p>\n" +
   "    <span>This is a new html partial, it is also accessed through the htmlpartials object.</span>\n" +
   "</p>";

htmlpartials["trueblood"] = "<div id=\"truebloodpage\">\n" +
   "\n" +
   "    <img src=\"randomDirectory/images/truebloodpage/trueblood.jpg\">\n" +
   "\n" +
   "    <p>The True Blood page (as well as the Dexter page) bring in a Parents Advisory view that gets recycled. You can see that the parentsadvisory view is html only</p>\n" +
   "\n" +
   "\n" +
   "</div>";

htmlpartials["walking"] = "<div id=\"walkingpage\">\n" +
   "\n" +
   "    <img src=\"randomDirectory/images/walkingpage/walkingdead.jpg\">\n" +
   "\n" +
   "    <p>Here we have an example of deeplinks. The page is created from JSON held in a site config\n" +
   "        file <span class=\"codestyle\">/js/config</span>. The javascript that reads the config and\n" +
   "        controls the dom can be found in  <span class=\"codestyle\">walkingview.js</span>\n" +
   "    </p>\n" +
   "\n" +
   "    <div>\n" +
   "        <a class=\"linkitem\" href=\"#/walkingdead/rick\">Rick Grimes</a>\n" +
   "        <a class=\"linkitem\" href=\"#/walkingdead/daryl\">Daryl Dixon</a>\n" +
   "        <a class=\"linkitem\" href=\"#/walkingdead/michonne\">Michonne</a>\n" +
   "        <a class=\"linkitem\" href=\"#/walkingdead/carol\">Carol Peletier</a>\n" +
   "    </div>\n" +
   "    <div class=\"panel\"></div>\n" +
   "</div>";
