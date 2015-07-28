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

  Persons.update( personId, {$set: {age: 35}} );
}
