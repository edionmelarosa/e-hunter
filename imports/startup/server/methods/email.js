import {
    check
} from 'meteor/check';
import {
    HTTP
} from 'meteor/http';


let MAIL_URL = Meteor.settings.MAIL_URL;

if (!MAIL_URL) {

    console.log('Configure your SMTP info.');
}else{
    console.log('Configured SMTP info.');
}

Meteor.methods({

    'sendEmail': function(data) {

        check(data, {
            subject: String,
            to: String,
            from: String,
            body: String
        });


        if (!MAIL_URL) {

            return {
                success: false,
                reason: 'Config your SMTP details.'
            };
        }

        let to = data.to,
            from = data.from,
            subject = data.subject,
            html = data.body;


        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();


        Email.send({
            to: to,
            from: from,
            subject: subject,
            html: html
        });
    }
});
