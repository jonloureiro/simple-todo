import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base'
import { ReactiveVar } from 'meteor/reactive-var';

import './login.html';

Template.login.onCreated(function loginOnCreated() {
  this.isRegister = new ReactiveVar(false);
})

Template.login.helpers({
  isRegister() {
    const instance = Template.instance();
    return instance.isRegister.get();
  }
})

Template.login.events({
  'click .alternar-login-registro'(event, instance) {
    event.preventDefault();
    const isRegister = instance.isRegister.get();
    instance.isRegister.set(!isRegister);
  },
  'submit .form-entrar'(event, instance) {
    event.preventDefault();
    const isRegister = instance.isRegister.get();
    const { email, password, password2 } = event.target;

    if (isRegister) {
      if (password.value == password2.value) {
        console.log(password.value);

        Accounts.createUser({
          email: email.value,
          password: password.value,
        });
      } else {
        console.log('As senhas precisam ser iguais');
        password.value = '';
        password2.value = '';
      }
    } else {
      Meteor.loginWithPassword(email.value, password.value);
    }
  }
})
