import {
    Template
} from 'meteor/templating';
import {
    ReactiveVar
} from 'meteor/reactive-var';

import './domain-search.html';



Template.DomainSearch.onCreated(function() {

    this.error = new ReactiveVar('');
    this.loading = new ReactiveVar('');
    this.emails = new ReactiveVar([]);

});

Template.DomainSearch.events({
    "submit": function(e, t) {

        e.preventDefault();

        // Reset data
        t.error.set('');
        t.loading.set(true);
        t.emails.set([]);

        let domain = $(e.currentTarget).find('#domain').val().trim();

        Meteor.call("domainSearch", domain, function(error, result) {

            if (error) {
                t.error.set("Error processing your request, please try again. If problem persist, contact administrator.");

                console.log("error", error);
            }
            if (result && result.success) {

                t.emails.set(result.data.emails);


            } else {

                t.error.set("Error processing your request, please try again. If problem persist, contact administrator.");
            }

            t.loading.set(false);
        });
    }
});

Template.DomainSearch.helpers({
    emails() {
        return Template.instance().emails.get();
    }

});

Template.AvailableEmails.helpers({
    name(email){
        return email.split('@', 1);
    }
});
