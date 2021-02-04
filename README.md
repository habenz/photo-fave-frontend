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


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).