Spots = new Mongo.Collection('spots');

Meteor.methods({
  spotInsert: function(spotAttributes) {
    check(Meteor.userId(), String);
    check(spotAttributes, {
      pnumber: String,
      url: String,
      status: String,
      bname: String,
      ownername: String,
      ownerusername: String
    });

    var spotWithSameName = Spots.findOne({pnumber: postAttributes.pnumber});
    if (spotWithSameName) {
      return {
        spotExists: true,
        _id: spotWithSameName._id
      }
    }

    var user = Meteor.user();
    var spot = _.extend(spotAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    var spotId = Spot.insert(spot);

    return {
      _id: spotId
    };
  }
});
