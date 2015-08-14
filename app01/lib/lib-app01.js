// Meteor.methods({
//     'getURL': function(usename) {
//       return processUrl(username);
//       var imageUrlSync = Meteor.wrapAsync(processUrl());
//       imageUrl
//       }
//     });

//  var stripe = StripeAPI("key");    
// Meteor.methods({

//     yourMethod: function(callArg) {

//         var charge = Meteor.wrapAsync(stripe.charges.create, stripe.charges);
//         charge({
//             amount: amount,
//             currency: "usd",
//             //I passed the stripe token in callArg
//             card: callArg.stripeToken,
//             }, 
//             function(err, charge) {
//               if (err && err.type === 'StripeCardError') {
//                 // The card has been declined
//                 throw new Meteor.Error("stripe-charge-error", err.message);
//               }

//             //Insert your 'on success' code here

//         });
//     }
// });

var imageUrl = 'default test';