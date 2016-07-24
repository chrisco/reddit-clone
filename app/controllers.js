function RedditController($scope) {
	// Get the array of posts:
	$scope.posts = posts;

	// Don't show the newPostForm initially:
	$scope.showNewPostForm = false;

	// Toggle form as needed:
	$scope.toggleNewPostForm = function() {
		if ($scope.showNewPostForm === true) {
			$scope.showNewPostForm = false;
		} else {
			$scope.showNewPostForm = true;
		}
	};

	// SHOW/HIDE COMMENTS FEATURE:
	// TODO: Put this on posts object???

	// Don't show comments initially:
	$scope.showComments = false;

	// Toggle comments display as needed:
	$.toggleComments = function() {
		if ($scope.showComments === true) {
			$scope.showComments = false;
		} else {
			$scope.showComments = true;
		}
	};

	$scope.createNewPost = function() {
		// Create the new post:
		var newPost = {};
		newPost.title = $scope.newPostForm.title;
		newPost.author = $scope.newPostForm.author;
		newPost.imageURL = $scope.newPostForm.imageURL;
		newPost.postBody = $scope.newPostForm.postBody;
		newPost.timestamp = new Date();
		newPost.points = 0;
		newPost.addPoints = function() {
			this.points += 1;
		};
		newPost.subtractPoints = function() {
			this.points -= 1;
		};
		newPost.commentCount = 0;
		newPost.comments = [];

		// Push it to the array of posts:
		posts.push(newPost);

		// Reset the form:
		$scope.newPostForm.title = "";
		$scope.newPostForm.author = "";
		$scope.newPostForm.imageURL = "";
		$scope.newPostForm.postBody = "";
		$scope.showNewPostForm = false;
	};
}
