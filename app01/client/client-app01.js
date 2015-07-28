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
      var dummydata = '';
      Meteor.call('getURL', dummydata, function(error, result){
        alert(result);
        console.log(result);
        Session.set('url', result);
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
