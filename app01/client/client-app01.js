if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  Session.setDefault('doubleNumber', 0);

  Add = function() {
    Session.set('counter', Session.get('counter') + 1);
      Session.set('doubleNumber', Session.get('counter') * 2);
  };

  Minus = function() {
    Session.set('counter', Session.get('counter') - 1);
      Session.set('doubleNumber', Session.get('counter') * 2);
  };

  Template.hello.helpers({
    //variables - Properties - Objects returned or set in server
    counter: function () {
      return Session.get('counter');
    },
    doubleNumber: function() {
      return Session.get('doubleNumber') * 2;
    },
    doubleNum: function(num) {
      return num * 2;
    },

    tN: function(num) {
      return num * 5;
    },

    dN: function(num, n2) {
      return num * 2 + n2;
    },

    twitterUrl: function() {
      return Session.get('url');
    },

    testerUrl: function() {
      return Session.get('url2');
    }
  });


  Template.hello.events({
    //functions
    //'event typeSelector'
    'click input': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
      Session.set('doubleNumber', Session.get('counter') * 2);
    },

    'click #minus': function() {
      Minus()
    },

    'click .add': function() {
      Add();
    },

    'click #twitter': function() {
      var username = 'dij_plz';
      callStub();

      // Meteor.call('getURL', username, function(error, result){
      //   alert('aysnc? ' + result);
      //   console.log(result + ' jill');
      //   Session.set('url', result);
      //   alert(result);
      // });

      // var testUrl = Meteor.call('getURL', username);
      // Session.set('url2', testUrl)
      // alert('booty ' + testUrl);
    }
    
  });

  function callStub(){
    var username = 'dij_plz';
    Meteor.call('getURL4', username, function(error, result){
        alert('woo');
        alert(result);
        console.log(result + 'jill');
        Session.set('url', result);
        //alert(result);
      });
  }
}