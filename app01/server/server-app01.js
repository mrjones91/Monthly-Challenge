if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    
    console.log('Hello World!');
  });

  
  var personId = Persons.insert({
    name: 'Daniel Jones',
    alias: 'DJ',
    age: 24
  });

  Persons.insert({
    name: 'John',
    alias: 'John',
    age: 33
  });

  Persons.update( { name: 'Daniel Jones'}, {$inc: {age: 35}} );

  var processUrl = function(username){
      var Twitter = Meteor.npmRequire('twitter-node-client').Twitter;
      var config = {
          'consumerKey': 'v3pJuN3hEB69F99A1aZL5AIbW',
          'consumerSecret': 'WZV294rXidXvUciUyUu2blSXsv97BHiVvRkODd5qRKxwVXhkjl',
          'accessToken': '117222781-y3Msu2uxmwAd1856REc7XIcPgicLcdRVu4Y3Idxd',
          'accessTokenSecret': 'PhPUsJbaO7DB738tVte6ExVIGNKZy4iDjRpWKyNSl1ZYP',
          'callBackUrl': 'XXX'
      };
      var twitter = new Twitter(config);

      var image_url = 'no';

      var error = function (err, response, body) {
          console.log('ERROR [%s]', err);

          return err;
      };
      var success = function (data) {
          console.log('***************************************************');
          //console.log('Data [%s]', data);

          //console.log(data);
          me = JSON.parse(data);
          console.log('things' + me.profile_image_url);
          image_url = me.profile_image_url;
          //console.log('000\n' + image_url);
          return image_url;
      };
      twitter.getUser({ screen_name: username} , error, success);
  };

      var Twitter = Meteor.npmRequire('twitter-node-client').Twitter;
      var config = {
          'consumerKey': 'v3pJuN3hEB69F99A1aZL5AIbW',
          'consumerSecret': 'WZV294rXidXvUciUyUu2blSXsv97BHiVvRkODd5qRKxwVXhkjl',
          'accessToken': '117222781-y3Msu2uxmwAd1856REc7XIcPgicLcdRVu4Y3Idxd',
          'accessTokenSecret': 'PhPUsJbaO7DB738tVte6ExVIGNKZy4iDjRpWKyNSl1ZYP',
          'callBackUrl': 'XXX'
      };
      var twitter = new Twitter(config);
      var error = function (err, response, body) {
          console.log('ERROR [%s]', err);

          return err;
      };
      var success = function (data) {
          console.log('***************************************************');
          //console.log('Data [%s]', data);

          //console.log(data);
          me = JSON.parse(data);
          console.log('things' + me.profile_image_url);
          image_url = me.profile_image_url;
          //console.log('000\n' + image_url);
          return image_url;
      };

      Meteor.methods({
        getURL3: Meteor.wrapAsync(twitter.getUser, twitter),
        'getURL2': function(username) {
          //return processUrl(username);
          var imageUrlSync = Meteor.wrapAsync(twitter.getUser, twitter);
          imageUrlSync({
            screen_name: username 
          }, function (error, something) {
            console.log('err ' + error);
            console.log('some ' + something);
          });
      },
      getURL4: function(username) {
        var getU1 = twitter.getUser({ screen_name: username} , error, success);
        return getU1();
        // var getU = Meteor.wrapAsync(twitter.getUser, twitter);
        // getU({ screen_name: username}, function(err, result) {
        //   if (err){
        //     console.log('no works? ' +err);
        //     return err;
        //   }
        //   else{
        //     console.log(' works? ' + result);
        //     return result;
        //   }
        // });
      }
    });

}//isServer
