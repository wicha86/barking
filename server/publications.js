Meteor.publish('spots', function(){
  return Spots.find();
});

Meteor.publish('buildings', function(){
  return Buildings.find();
});
