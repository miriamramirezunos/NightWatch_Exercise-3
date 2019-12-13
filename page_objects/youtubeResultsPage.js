module.exports =  {  
    elements: {
        firstResult: 'div[id="contents"]>ytd-video-renderer:first-of-type>div>div>div>div>h3>a',
        views: 'yt-view-count-renderer>span:first-of-type',
        videoTitle: 'h1 yt-formatted-string'
    },

    commands: [{        
      validateFirstResult(text){
        return this
            .assert.containsText('@firstResult', text) 
            .click('@firstResult')         
      },
      printViews(){
        return this
          .getText('@views', function(result){
            console.log(`Views: ${result.value}`)
      }) 
      },
      validateTitleSelenium(text){
        return this
          .assert.containsText('@videoTitle', text)

      }, 
      validateTitleNodeJs(text){
        return this
          .assert.containsText('@videoTitle', text)
      }


    }],    
  };