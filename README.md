# e-Hunter
This app lets you search for emails associated with a domain and send email.

# Things you can do with e-Hunter

* Search emails associated by a domain e.g meteor.complete
* I also added here a simple send email featur.

# Getting Started

 1. Clone the repo.
 2. MeteorJs [check here](https://www.meteor.com/install)
 3. This app uses emailhunter, set your emailhunter api key([get here](https://emailhunter.co/))
 4. cd to the project.
 5. Set Meteor settings. On the root dir of app, create json file(This will be read by Meteor).
    ```
    {
        "MAIL_URL": {
            "username": "username",
            "password": "password",
            "server": "smtpserver",
            "port": 'yourserverport'
        },

        "private": {
            "emailhunter": {
                "api_key": "3c358c0e5ecc671988e00274a793176f48b617cc"
            }
        }

    }
    ```
6. Now run your app
    ```
    Meteor run settings /yoursettingsfile/
    ```

# Notes:


# Todo
1. Inhance front-end
2. Testing
