module.exports =  {  
    elements: {
      subHome: 'a[title="Home"]',
      subTrending: 'a[title="Trending"]',
      subASubscriptions: 'a[title="Subscriptions"]',
      },
    commands: [{
        confirmSubHome(){
            return this
                .assert.visible('@subHome')
                .expect.element('@subHome').to.be.enabled
        },
        confirmSubTrending(){
            return this
                .assert.visible('@subTrending')
                .expect.element('@subTrending').to.be.enabled
        },
        confirmSubscriptions(){
            return this
                .assert.visible('@subASubscriptions')
                .expect.element('@subASubscriptions').to.be.enabled
        }
    }],  
  };