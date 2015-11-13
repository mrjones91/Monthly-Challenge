if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
    console.log('Hello World!');
    var image_url;
    Persons.remove({});
  console.log('removed all Persons');
  Persons.insert({
    username: 'test',
    profile_image_url: 'http://test.test'
  });

 
  });

      var Twitter = Meteor.npmRequire('twitter-node-client').Twitter;
      var config = {
          'consumerKey': 'v3pJuN3hEB69F99A1aZL5AIbW',
          'consumerSecret': 'WZV294rXidXvUciUyUu2blSXsv97BHiVvRkODd5qRKxwVXhkjl',
          'accessToken': '117222781-y3Msu2uxmwAd1856REc7XIcPgicLcdRVu4Y3Idxd',
          'accessTokenSecret': 'PhPUsJbaO7DB738tVte6ExVIGNKZy4iDjRpWKyNSl1ZYP',
          'callBackUrl': 'XXX'
      };
      var twitter = new Twitter(config);

      var boundError = Meteor.bindEnvironment(function(err){ 
              console.log(err);
              var errThing = {
                username: 'error',
                imageUrl: 'http://error.error'
              };
              console.log(errThing);

                console.log('bound');
                Persons.insert(errThing);
                var exists = Persons.find( {username: errThing.username });
              if (exists) {
                console.log('exists');
                Persons.update( {username: errThing.username}, {$set:{imageUrl: errThing.imageUrl}} );
                console.log('updated');
              }
              else {
                console.log('no exists');
                Persons.insert(errThing);
                console.log('else updated');
              }
              
              return errThing;
            });
      var boundSuccess = Meteor.bindEnvironment(function(suc) {
              //get result and log it
              console.log(suc);
              console.log('log yea');

              //set to object
              var thing = JSON.parse(suc);
              var thingTwit = {
                username: thing.screen_name,
                imageUrl: thing.profile_image_url
              }
              
              //make sure entry doesn't exist for same user
              //if exists - update. else - insert
              var exists = Persons.findOne( {username: thingTwit.username });
              if (exists) {
                console.log(exists.username + ' exists with ' + exists.imageUrl);
                Persons.update( {username: thingTwit.username},  { $set: { imageUrl: thingTwit.imageUrl}} );
                console.log(exists.username + ' updated');
              }
              else {
                console.log('no exists');
                Persons.insert({
                  username: thingTwit.screen_name,
                  imageUrl: thingieTwit.profile_image_url

                });
                console.log(thingTwit.username + ' inserted');
              }
              console.log('object based on data: ' + thingTwit.username + ' \n ' + thingTwit.imageUrl);
              return thingTwit;
      });
  
      Meteor.methods({
        test2: function(data) {

          var thingiething = twitter.getUser({screen_name: data.screen_name}, boundError, boundSuccess);
          

         
          return data.screen_name + ' inserted';
        }
    });

}//isServer
