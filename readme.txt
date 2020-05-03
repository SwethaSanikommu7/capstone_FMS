spring boot application runs in -> http://localhost:8085
react application runs in -> http://localhost:3000 ->redirects to login page

login page is authenticated with JWT token
You need to provide credentials as
username, password -> (admin, admin), (pmo,pmo), (poc,poc)
and added roles for users to restrict perticular web pages

then page will redirects home pages
home page contains -> dashboard, events, reports and configuration

dashboard displayes the statistics of the events and if you click view details button, it will give you the statistics details. 

events displayes all the existing events, and you send a mail by clicking send mail..and you will be received an acknowledge that mail has been sent successfully. 

reports displays all the events and corresponding rating reports which we can export as an excel format.
cofiguration drop down ->
Feedback provides questions to the admin and he can also add new question and answer set
Event details you can find the multiple events by search of event id
user details shows you the all pmo and poc details 
search by entering event id and event id you can find from events list which we are displaying in events page

signOut page redirects to login page

Implemented webclient for all the services

implemented microservices
Feedback management microservice
Event management microservice
User managment microservice
webclient 
eureka naming server


