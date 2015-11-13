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
      var twitUrl = Persons.findOne({username: $('#usn').val()})
      return twitUrl.imageUrl;
    },

    testerUrl: function() {
      return imageUrl;
    }
  });


  Template.hello.events({
    //functions
    //'event typeSelector'
    'click button': function () {
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
      var usn = $('#usn').val();
      Persons.insert({
        username: usn,
        imageUrl: 'unset'
      });
      //callStub(usn);
      console.log('Async Test');
      var username = { screen_name: usn};
      Meteor.call('test2', username, function(e, d){
        console.log('client result');
        console.log('E: ' + e);
        console.log('D: ' + d);
        
      });
      
    }
    
  });
}