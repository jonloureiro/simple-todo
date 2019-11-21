import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './tasks.html';

Template.tasks.events({
  'click .logout'(event, instance) {
    event.preventDefault();
    Meteor.logout()
  }
})
