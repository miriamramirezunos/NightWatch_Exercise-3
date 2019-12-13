module.exports =  {  
    elements: {
      youtubeAppsButton: 'div[id="buttons"] ytd-topbar-menu-button-renderer:nth-child(2)',  
      menuElement1: ':nth-of-type(1)>div[id="items"]>ytd-compact-link-renderer>a>paper-item>[id="label"]',
      menuElement2: ':nth-of-type(2)>div[id="items"]>ytd-compact-link-renderer:nth-of-type(1)>a>paper-item>[id="label"]',
      menuElement3: ':nth-of-type(2)>div[id="items"]>ytd-compact-link-renderer:nth-of-type(2)>a>paper-item>[id="label"]', 
      menuElement4: ':nth-of-type(3)>div[id="items"]>ytd-compact-link-renderer:nth-of-type(1)>a>paper-item>[id="label"]',
      menuElement5: ':nth-of-type(3)>div[id="items"]>ytd-compact-link-renderer:nth-of-type(2)>a>paper-item>[id="label"]'
    },

    commands: [{
      sqareMenuActions(){
        return this
          .waitForElementVisible('@youtubeAppsButton')
          .click('@youtubeAppsButton')
      }, 
      printElements(){
          return this
          .waitForElementVisible('@menuElement1')
          .getText('@menuElement1', function(result){
              console.log(`Elements on Sqare Menu: ${result.value}`)
          })
          .getText('@menuElement2', function(result){
            console.log(`                        ${result.value}`)
          })
          .getText('@menuElement3', function(result){
            console.log(`                        ${result.value}`)
          })
          .getText('@menuElement4', function(result){
            console.log(`                        ${result.value}`)
          })
          .getText('@menuElement5', function(result){
            console.log(`                        ${result.value}`)
          })                 
      }, 
      pEs(){
          return this
          .elements('css selector', '@menuElements', function(result){
              console.log(result.value)
          })
      }
    }],    
  };