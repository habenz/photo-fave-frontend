# Welcome to Photo Fave!
This project was initially conceptualized as a tool to allow creative professionals to create collections of images from anywhere on the Internet for inspiration. Even though this is a very Pintrest-like concept, I have taken a lot of UI cues from Instagram. I hope you enjoy!

Problem: As a creative professional it can often be helpful to draw images from the internet as inspiration, but tedious to download and manage their storage on your local machine. With Photo Fave, you can store just the image url, and build a visual collection of images to inspire you!

Check out my Trello board to see some progress: [trello](https://trello.com/b/NIe6eTfM/photo-app-mod-2-final-project)
### Frontend:

Used Redux to store current user login and current pictures:

###### User
	{
		isLoggedIn: <boolean>,
		userName: <String from backend>,
		user: <entire user document>
	}

###### Pictures
A sorted array of Photo documents from the backend

### Backend: 
I used two collections, stored in MongoDB Atlas, and accessed through Mongoose

| User Model              | Photo Model  |
|-------------------------|--------------|
| username: unique String | owner_uid    |
| password                | name         |
| liked_photos: []        | url          |
| commented_photos: []    | likes: []    |
| timestamps              | like_count   |
|                         | comments: [] |
|                         | timestamps   |

I followed the following tutorials to set up my backend:
* [full stack app](https://www.youtube.com/watch?v=7CqJlxBYj-M)
* [JS Mastery](https://www.youtube.com/watch?v=aibtHnbeuio)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).