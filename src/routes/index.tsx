import React from 'react'
import LoginContainer from '../containers/login/Container'
import HomeContainer from '../containers/home/Container'
import SignupContainer from '../containers/signup/Container'
import CreatePostContainer from '../containers/createPost/Container'
import MyPostsContainer from '../containers/myPosts/Container'
import MyAccountContainer from '../containers/myAccount/Container'
import EditPostContainer from '../containers/editPost/Container'
import PostsContainer from '../containers/posts/Container'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import { Route, Switch } from 'react-router-dom'

export default () => (
  <Switch>
    <Route exact path='/' component={HomeContainer} />
    <Route path='/login' component={LoginContainer} />
    <Route path='/signup' component={SignupContainer} />
    <Route path='/createpost' component={CreatePostContainer} />
    <Route path='/myposts' component={MyPostsContainer} />
    <Route path='/myAccount' component={MyAccountContainer} />
    <Route path='/editpost/:postId' component={EditPostContainer} />
    <Route path='/internships' component={PostsContainer} />
    <Route component={PageNotFound} />
  </Switch>
)