Codial - 
Code + Social = Codial

This is an ecommerce webapp which currently comprises basic functionality of sign in sign out. Also it has functionality of creating a post, deleting a post. And then it also has a functionality of adding comments to perticular post.

All the posts and their associated comments are publicly available. Also for those who are not logged in. The people those who are not logged in cannot post anything and also cannot comment on any posts.

For the people who are logged in have, they have the liberty to post and comment on any post. But again, the logged in person can only delete his/her comments and posts and not other's posts and comments.

Also, there is a functionality of flash messages that will be displayed everytime the user is logged in, or he/she adds new posts. This is achieved through connect-flash library.

Tech Stack used - 
Mongodb - database
Express - framework
Nodejs - for runtime environment

Libraries Used - 
Passport, passport-local - for authentiaction of the user
connect-flash = for flash messages
mongoose = for connection with database
ejs, express-ejs-layouts = for setting up the frontend
express-session = for the session
cookie-parser = for parsing the cookies attached to the request made by the client to the server


