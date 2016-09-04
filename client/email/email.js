import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';

import './email.html';

Template.Email.onCreated(function() {

    this.error = new ReactiveVar('');
    this.success = new ReactiveVar(false);
    this.loading = new ReactiveVar(false);

});

Template.Email.events({
    "submit": function(e, t) {

        e.preventDefault();

        let ele = $(e.currentTarget);

        let data = {

            subject :   ele.find('#subject').val().trim(),
            to      :   ele.find('#to').val().trim(),
            from    :   ele.find('#from').val().trim(),
            body    :   ele.find('#body').val().trim()

        }

        // Reset data
        t.error.set('');
        t.success.set(false);
        t.loading.set(true);

        Meteor.call("sendEmail", data, function(error, result) {

            if (error) {
                t.error.set("Error processing your request, please try again. If problem persist, contact administrator.");

                console.log("error", error);
            }

            t.success.set(true);
            t.loading.set(false);
        });
    }
});

Template.Email.helpers({
    success(){
        return Template.instance().success.get();
    },
    loading(){
        return Template.instance().loading.get();
    }
});
