Template.spotSubmit.events({
  'submit form': function(e){
    e.preventDefault();

    var spot = {
      pnumber:$(e.target).find('[name=pnumber]').val(),
      url:$(e.target).find('[name=url]').val(),
      status:$(e.target).find('[name=status]').val(),
      bname:$(e.target).find('[name=bname]').val(),
      ownername:$(e.target).find('[name=ownername]').val(),
      ownerusername:$(e.target).find('[name=ownerusername]').val()
    };

    Meteor.call('spotInsert', spot, function(error, result){
      if (error)
        return alert(error.reason);

      if (result.spotExists)
        alert('This Parking Spot already exists!');

      Router.go('spotPage', {_id: result._id});
      // spot._id = spot.insert(spot);
    });
  }
});


Template.spotSubmit.helpers({
  buildings: function(){
    return Buildings.find();
  }

});
