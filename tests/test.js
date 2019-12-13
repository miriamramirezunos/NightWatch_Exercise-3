module.exports = {
  before: function(browser) {
    console.log('Starting Exercise 3 Nightwatch!!!')
  },
  after: function(browser) {
    console.log('Finishing Exercise 3 Nightwatch!!!')
  },
    'Go to Youtube Home and click on left menu'(youtube) {
        const home = youtube.page.youtubeHomePage();                   
        home
          .navigate()
          .validateHomeElements();
    },
    'Validate 3 elements are displayed and enabled on left menu' (youtube) {
      const leftMenu = youtube.page.youtubeLeftMenuPage();
        leftMenu
          .confirmSubHome(); 
        leftMenu  
          .confirmSubTrending();
        leftMenu
          .confirmSubscriptions(); 
    },
    'Assert Acceder ("SIGN IN") button ' (youtube){
        const acceder = youtube.page.youtubeHomePage();
        acceder
          .validateAcceder();
    },
    'Click on square Menu and print text of all elements' (youtube){
        const home = youtube.page.youtubeHomePage();  
        const sqareMenu = youtube.page.youtubeDotSqareMenu();
        home
          .navigate();
        sqareMenu
          .sqareMenuActions() 
          .printElements();                
    },
    'Search "Automating with Node.js - 001"' (youtube){
      const home = youtube.page.youtubeHomePage();
      home
        .searchText('Automating with Node.js - 001');
    }, 
    'Verify title of the first result' (youtube){
      const pageResults = youtube.page.youtubeResultsPage();
      pageResults
        .validateFirstResult('Automating with Node.js - 001'); 
    },
    'Print views' (youtube){
      const pageResults = youtube.page.youtubeResultsPage();
      pageResults
        .printViews(); 
    },
    'Validate title "Automation with Selenium" - Assert should fail and continue with next test' (youtube){
      const pageResults = youtube.page.youtubeResultsPage();
      pageResults
        .validateTitleSelenium('Automation with Selenium')
        .validateTitleNodeJs('Automating with Node.js - 001'); 
    },
    'Validate the correct title "Automating with Node.js - 001"' (youtube){
      const pageResults = youtube.page.youtubeResultsPage();
      pageResults
        .validateTitleNodeJs('Automating with Node.js - 001'); 
    },
    
    'Take a Screenshot' (youtube){
      const home = youtube.page.youtubeHomePage();                   
        home
          .screenshot();
    }, 
    'End the test' (youtube){
      youtube
        .pause(2000)
        .end();
    }
    
    };