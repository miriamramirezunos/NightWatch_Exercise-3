module.exports =  {  
    url: 'https://www.youtube.com/',

    elements: {
      leftMenu: '[id="guide-button"]:nth-child(3)', 
      accederButton: '[id="buttons"] [aria-label="Sign in"] yt-formatted-string',
      searchBar: 'input[id="search"]',
      searchButton: 'button[id="search-icon-legacy"]'
    },

    commands: [{
      validateHomeElements(){
        return this
          .waitForElementVisible('@leftMenu')
          .click('@leftMenu')
      },
      validateAcceder(){
        return this
          .waitForElementVisible('@accederButton')          
          //.assert.containsText('@accederButton', 'SIGN IN')
          .expect.element('@accederButton').text.to.contain('SIGN IN')
      }, 
      searchText(text){
        return this
          .setValue('@searchBar', text)     
          .click('@searchButton')   
      },
      screenshot(){
        return this
          .saveScreenshot("./reports/screenshot.png") 
      }
    }],    
  };