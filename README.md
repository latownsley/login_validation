# login_validation
This is a microservice that validates logins passed to it. 

## Communication Contract

How to Request Data: 
You'll need to send a data request via a POST method to /check-login. The request needs to be in format of {username: name_to_test, password: password_to_test}. 


How to Receive Data: 
You'll receive the data through a promise that was created when the data was requested. The response will be {username: name_to_test, password: password_to_test} pair or an empty [] if the username and password are not valid. 

UML Diagram:
REQUEST MADE     |    /check-login        |   Microservice    
     Send login details                 Compare login details to the database
     ----------------->                 ------------------------------------>
                                send validation results
                                <--------------------------------------------


