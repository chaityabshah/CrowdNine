# CrowdNine
######[Submission for HackDuke2015](http://devpost.com/software/crowdnine)

##Inspiration
As our group brainstormed, we thought of all of the problems we could address, such as what we saw in our day to day lives. At some point or another, we began to discuss the homeless and the adversities they faced. While thinking about how we could tackle the issues of the homeless and low-income, we stumbled upon data showing the low access to food and groceries that many American families faced. For some, not having a car made it difficult for people to go grocery shopping and get food and necessities they might need - especially if they had to work many hours of the day. We decided that we could address this problem with a tool that we used when we needed things from places not immediately available to us on campus - Postmates. The intersection of the two resulted in CrowdNine.

##What it does
CrowdNine a web-based crowdsourcing platform, connecting people from low-income areas with people who want to help them out by funding them for individual baskets of groceries and food. Users sign in through Google and Facebook Authentication to maximize security. Donors perform transactions through the Stripe API, and recipients request and receive their baskets through Postmates and the Postmates API. We used Google Geocoder to give local results and options to donors and recipients.

##How we built it
We built the front end of Crowd Nine using Jade, an HTML template language, and used JavaScript to get data from the site to the Node.js server. The server communicates with MongoDB to store basket data, including all of the items in it, and the total price. When users find baskets to donate to, they simply pay with a credit card through the Stripe API.

##Challenges we ran into
We faced many challenges along the way in the creation of this project, as none of us had ever worked with Jade, MongoDB, and we had very little to no experience in JavaScript. Most of our problems occurred with learning these new technologies and making the API calls despite the adversity, however our most challenging problem was making the final connection between the variables stored locally client-side and the database.

##Accomplishments that we're proud of
Getting the stack to work in the first place was a huge achievement, considering we had never done it before. After getting something running, we started tackling the different API calls, and were able to successfully get data from all of the ones we tried. While it seems relatively simple, some members of our group have struggled to deal with this portion of the development cycle beforehand, making our success even more incredible.

##What we learned
Before this project, we really didn't have much experience working with Javascript or any of the related libraries or environments. So, building CrowdNine served as an incredible learning experience, as we figured out how to create a novel application in a short period of time while familiarizing ourselves with the technology. We also found ourselves greatly enjoying creating an application that can actually have a significant impact on the world. In the end, the most important thing that we learned was that, we can make a difference, and this motivated us more than ever before.

##What's next for CrowdNine
We hope to build the CrowdNine platform to be more robust and be able to handle a significant amount of users. Furthermore, we hope to increase the amount of products that we can offer low-income families beyond basic groceries and necessities.

##Built With
mean
jade
stripe
postmates
mongodb
node.js
google-web-authentication
facebook-login-api
express.js
