Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('spots'); }
});

Router.route('/', {name: 'spotsList'});

Router.route('/spots/:_id', {
  name: 'spotPage',
  data: function() { return Spots.findOne(this.params._id); }
});

Router.route('/submit', {
  name: 'spotSubmit',
  waitOn: function() { return Meteor.subscribe('buildings'); }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render ('accessDenied');
  }else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'spotPage'});
Router.onBeforeAction(requireLogin, {only: 'spotSubmit'});
