# Picafarm

<!-- 
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows. 

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->
  
## PicAFarm ##

## Summary ##
  > PicAFarm allows local home growers to send people a box of organic vegetables and fruits every month

## Target Audience ##
  > Grower: Anybody who is willing to share his farm produce

  > User: Anybody who is willing to purchase home grown organic food.

## Problem ##
  > Grower: Your garden grows lots of vegetables, but you're not able to consume them all! How do you put them to good use without them rotting? You can sell them to others on our platform!

  > User: You don't like the quality of vegetables at the grocery store, or you want to support local farmers at a good price? You can buy fresh, organic produce from your local friends on our platform!

## Solution ##
  > Grower: Sell your extra veggies!

  > User: Fresh produce to you! 

## Quote from You ##
  > Easy way for home growers to make some extra money by selling the extra veggies they get after harvest

## How to Get Started ##
# Picafarm
Join an online community of backyard gardens. Be a consumer or be a farmer.


# Team
- **Scrum Master:** Lisa Gee
- **Product Owner:** Kevin Su
- **Development Team Members:** Kevin Kim, Anjali Sharma


# Technology Used
- Server Side
  - Node JS - javascript runtime
  - Express - the server framework
- Middleware
  - Gulp
  - Passport
  - BCrypt
  - bodyparser
  - path
- Client Side
  - Angular JS - front end framework
  - Bootstrap - HTML, CSS, and JS Framework
- Database
  - PostgreSQL - relational database
- Deployment
  - Heroku - PaaS for deployment
  - Heroku Postgres (Hobby Dev Tier: Free)
# Requirements
- **Angular** 1.6.5
- **Express** 4.15.4
- **Node** 8.x
- **PostgreSQL** 9.6.x
# Installation 
To Install the Dependencies, do this from inside the downloaded directory

```javascript
npm install
```
To run the program locally 

```javascript
npm start
```
Testing the application locally you would want to install [Postgres](http://postgresapp.com/) from their website.  If you are deploying to Heroku, you can use Heroku Postgres and deploy heroku each time you test the application. For Mac users, one tool to view your tables and collections is **Postico**. For PC users, you can use **PGAdmin 3** and utilize the **pSQL console**. 


Here is a link for more information: [heroku postgres setup](http://agileforce.co.uk/heroku-workshop/heroku-postgres/pgadmin.html)

```javascript
//show tables
\dt
//show data in table
SELECT * FROM [tablename];
```
In our config file, we have our session password and the connection string is replaced by the environment variable from Heroku Postgres. The config file would look like something below:

```javascript
module.exports = {
    connectionString: 'postgres://URLHere',
    password: 'SECRETHERE'
};
```


To push to heroku, you want to add the remote key

```javascript
git remote -v
git add remote upstream "git url" 
```
 after each change you want to do the following

```javascript
git add .
git commit -m "adding new things"
git push heroku master
```
# Api Endpoints
**/ **- brings up farmer search component
**/login -**  this is the login component page
**/user/login/good **- this is for when login goes through, the component doesn't change
**/logout** -* *was not completed. *
**/search -** for searching the list of farms, our main view component that shows up when the website loads
**/user/signup -** for when users sign up
**/user/sessionCheck **- **this is for passport and bcrypt, not fully ultilized. *


## Customer Quote ##
  > User: I love getting veggies from local growers and supporting my neighbors! 
  
  > Grower: This platform helps me sell my extra harvest, so that it doesn't sit in the corner and rot. Yay.

## Closing and Call to Action ##
  > USE OUR PLATFORM NOW!
  > GET YO VEGGIES ON


