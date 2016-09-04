import { Meteor } from 'meteor/meteor';

import '/imports/startup/server/methods/email';

Meteor.startup(() => {

    if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
  		for(var variableName in Meteor.settings.env) {
  			process.env[variableName] = Meteor.settings.env[variableName];
  		}
  	}

    // apply email settings
  var smtp = Meteor.settings.MAIL_URL;
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' +
    encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' +
    smtp.port;

});
