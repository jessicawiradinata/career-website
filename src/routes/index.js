import React from 'react'
import LoginContainer from '../containers/login/Container'
import HomeContainer from '../containers/home/Container'
import SignupContainer from '../containers/signup/Container'
import CreatePostContainer from '../containers/createPost/Container'
import MyPostsContainer from '../containers/myPosts/Container'
import EditPostContainer from '../containers/editPost/Container'
import PostsContainer from '../containers/posts/Container'
import { Route, Switch } from 'react-router-dom'

export default () => (
  <Switch>
    <Route exact path="/" component={HomeContainer} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/createpost" component={CreatePostContainer} />
    <Route path="/myposts" component={MyPostsContainer} />
    <Route path="/editpost/:postId" component={EditPostContainer} />
    <Route path="/internships" component={PostsContainer} />
  </Switch>
)