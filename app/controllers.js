function RedditController($scope) {
  // Get the array of posts:
  $scope.posts = posts;

  // Don't show the newPostForm initially:
  $scope.showNewPostForm = false;

  // Toggle form as needed:
  $scope.toggleNewPostForm = function toggleNewPostForm() {
    if ($scope.showNewPostForm) {
      $scope.showNewPostForm = false;
    } else {
      $scope.showNewPostForm = true;
    }
  };

  $scope.createNewPost = function createNewPost() {
    // Create the new post:
    const newPost = {};
    newPost.title = $scope.newPostForm.title;
    newPost.author = $scope.newPostForm.author;
    newPost.imageURL = $scope.newPostForm.imageURL;
    newPost.postBody = $scope.newPostForm.postBody;
    newPost.timestamp = new Date();
    newPost.points = 0;
    newPost.addPoints = function addPoints() {
      this.points += 1;
    };
    newPost.subtractPoints = function subtractPoints() {
      this.points -= 1;
    };
    newPost.commentCount = 0;
    newPost.comments = [];
    newPost.showComments = false;
    newPost.toggleComments = function toggleComments() {
      if (this.showComments) {
        this.showComments = false;
      } else {
        this.showComments = true;
      }
    };
    newPost.showNewCommentForm = false;
    newPost.toggleNewCommentsForm = function toggleNewCommentsForm() {
      if (this.showNewCommentForm) {
        this.showNewCommentForm = false;
      } else {
        this.showNewCommentForm = true;
      }
    };

    // Push it to the array of posts:
    posts.push(newPost);

    // Reset the form:
    $scope.newPostForm.title = '';
    $scope.newPostForm.author = '';
    $scope.newPostForm.imageURL = '';
    $scope.newPostForm.postBody = '';
    $scope.showNewPostForm = false;
  };

  // Create new comment:
  $scope.createNewComment = function createNewComment() {
    // Create the new post:
    const newComment = {};
    newComment.commenter = this.newCommentForm.commenter;
    newComment.commentBody = this.newCommentForm.commentBody;

    // Push it to the array of posts:
    this.post.comments.push(newComment);

    // Reset the new comment form:
    this.newCommentForm = {};
    this.post.showNewCommentForm = false;
  };

  $scope.sortBy = '-points';
}
