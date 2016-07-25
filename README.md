# Simple Reddit Clone With Bootstrap and AngularJS

![Screenshot](reddit-clone.gif)

A small project to practice AngularJS.

## Built With

* [AngularJS](https://angularjs.org/)
* [Bootstrap](https://getbootstrap.com/)

## Run It Locally

Run the app on your machine like so:

1. Open your Terminal app:
2. Run the following commands:

````
$ git clone git@github.com:chrisco/reddit-clone.git
$ cd reddit-clone
$ open index.html
````

## Specs

* DONE: All post data should only be stored in a controller or service.
* DONE: A page refresh will clear all added posts.
* DONE: You do not have to make any ajax requests or actually contact the reddit API.
* DONE: Each post has a title, author, image, and description.
* TODO: Each post's date/time is displayed nicely: "Yesterday at 3:09pm", "Last Thursday at 4:42am", etc. You will need an external library. Watch the video for more details.
* DONE: A user can upvote / downvote posts.
* TODO: Posts dynamically reorder according to number of votes.
* DONE: A user can create new posts.
* V1 DONE: A user cannot create a new post if any of the 4 inputs are blank. Research angular validations. See the video for an example implementation.
* DONE: A user can click to view existing comments on a specific post.
* DONE: The number of comments is correctly pluralized.
* DONE: A user can add a new comment to a specific post.
* TODO: The new post form and comment forms can be toggled on and off.
* TODO: A user can search through posts.
* DONE: A user can sort posts by votes, date, and title.
* TODO: Animate posts as they are added and removed from the search results. Research Angular animations. See the video for an example implementation and links below for hints.
* V1 DONE: Style the app. It should look better than my implementation.

__Bonus Features__

* TODO: A user can choose to sort ascending or descending.
* TODO: A user can favorite posts and view all favorites in a separate tab.
* TODO: A user can upload an image (no backend involved).

__Animation-related Links__

* http://plnkr.co/edit/qrQwv1?p=preview
* https://divshot.com/blog/tips-and-tricks/angular-1-2-and-animate-css/
* http://odetocode.com/blogs/scott/archive/2014/02/25/easy-animations-for-angularjs-with-animate-css.aspx

__Other Links__

* [Galvanize Article](https://learn.galvanize.com/cohorts/66/articles/2972)
* [Galvanize Video]( https://github.com/gSchool/angular-curriculum/blob/master/Unit-1/11-reddit-clone.md)
* [John Papa's Angular Style Guide](https://github.com/johnpapa/angular-styleguide)
