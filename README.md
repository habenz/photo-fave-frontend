# Welcome to Photo Fave!
This project was initially conceptualized as a tool to allow creative professionals to create collections of images from anywhere on the Internet for inspiration. Even though this is a very Pintrest-like concept, I have taken a lot of UI cues from Instagram. I hope you enjoy!

## Steps I Followed:
	- made trello board to document requirements and possible object models [trello](https://trello.com/b/NIe6eTfM/photo-app-mod-2-final-project)
	- Set Up Mongodb on Atlas and created models, and basic routes

	- Front end:
		- begin with a front page with login
			- set up redux folder
			- set up login reducer and master reducer
			- set ups store, and then conditionally render home page or login based on state
			- fetch call to add user on reg page 
				- ??? headers: {'Content-Type': 'application/json'}
				- https://stackoverflow.com/questions/39842013/fetch-post-with-body-data-not-working-params-empty
			- added actions to register and login users. used thunks to make the api calls in the action
				- added api endpoint to get user by username
		- added list of photos to redux state 
			- (kind of a silly? design choice since list of photos can't change without leaving the page)
		- added nav bar to app.js and made dummy pages
		- wrote actions to get photos and added photo grid
		- added CSS to login page to improve developer QoL
		- add like functionality https://trello.com/c/08AQ5gtZ/40-add-like-functionality
		- add unlike functionality https://trello.com/c/biLodIfL/46-add-unlike-functionality


##### Handy discoveries
- very handy to get list of docs by id https://stackoverflow.com/a/8304213
	- although 
			mongoose.Types.ObjectId(idString) seems unnecessary 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).