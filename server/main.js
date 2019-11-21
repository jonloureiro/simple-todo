import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const banca = new Mongo.Collection("Banca");

Meteor.startup(() => {
  // code to run on server at startup
});
