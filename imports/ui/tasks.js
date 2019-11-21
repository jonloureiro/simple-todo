import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './tasks.html';
const banca = new Mongo.Collection("Banca");

Template.tasks.events({
  'click .logout'(event, instance) {
    event.preventDefault();
    Meteor.logout()
  }
})

Template.tasks.helpers({
  meu_saldo() {
    return banca.findOne({id:1}).saldo;
  }
})
