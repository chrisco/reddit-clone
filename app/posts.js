var posts = [{
	title: "Longs Peak",
	author: "Alice",
	imageURL: "http://imagesofrmnp.com/images/large/Longs-Peak-Autumn.jpg",
	postBody: "Longs Peak is a high and prominent mountain summit in the northern Front Range of the Rocky Mountains of North America. The 14,259-foot (4346 m) fourteener is located in the Rocky Mountain National Park Wilderness, 9.6 miles (15.5 km) southwest by south (bearing 209°) of the Town of Estes Park, Colorado.",
	timestamp: "Wed, Jul 20, 2016 12:07 PM",
	points: 0,
	addPoints: function() {
		this.points += 1;
	},
	subtractPoints: function() {
		this.points -= 1;
	},
	comments: [{
		commenter: "Bob",
		commentBody: "Interesting!"
	}, {
		commenter: "Jane",
		commentBody: "Wow!"
	}],
	showComments: false,
	toggleComments: function() {
		if (this.showComments === true) {
			this.showComments = false;
		} else {
			this.showComments = true;
		}
	},
	showNewCommentForm: false,
	toggleNewCommentsForm: function() {
		if (this.showNewCommentForm === true) {
			this.showNewCommentForm = false;
		} else {
			this.showNewCommentForm = true;
		}
	}
}, {
	title: "Pikes Peak",
	author: "Bob",
	imageURL: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pikes_Peak_from_Garden_of_the_Gods.JPG",
	postBody: "Pikes Peak is the highest summit of the southern Front Range of the Rocky Mountains of North America. The ultra-prominent 14,115-foot (4,302.31 m) fourteener is located in Pike National Forest, 12.0 miles (19.3 km) west by south (bearing 263°) of downtown Colorado Springs in El Paso County, Colorado.",
	timestamp: "Thr, Jul 21, 2016 12:07 PM",
	points: 1,
	addPoints: function() {
		this.points += 1;
	},
	subtractPoints: function() {
		this.points -= 1;
	},
	comments: [{
		commenter: "Alice",
		commentBody: "Spiffy!"
	}],
	showComments: false,
	toggleComments: function() {
		if (this.showComments === true) {
			this.showComments = false;
		} else {
			this.showComments = true;
		}
	},
	showNewCommentForm: false,
	toggleNewCommentsForm: function() {
		if (this.showNewCommentForm === true) {
			this.showNewCommentForm = false;
		} else {
			this.showNewCommentForm = true;
		}
	}
}];
