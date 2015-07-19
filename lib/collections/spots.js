Spots = new Mongo.Collection('spots');

Meteor.methods({
  spotInsert: function(spotAttributes) {
    check(Meteor.userId(), String);
    check(spotAttributes, {
      pnumber: String,
      status: String,
      bname: String,
    });

    var spotWithSameName = Spots.findOne({pnumber: spotAttributes.pnumber});
    if (spotWithSameName) {
      return {
        spotExists: true,
        _id: spotWithSameName._id
      }
    }

    var user = Meteor.user();
    var spot = _.extend(spotAttributes, {
      userId: user._id,
      ownerusername: user.username,
      submitted: new Date()
    });

    var spotId = Spots.insert(spot);

    return {
      _id: spotId
    };
  }
});
