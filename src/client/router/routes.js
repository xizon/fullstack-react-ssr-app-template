import App from '../views/_navigation/index.js';
import Home from '../views/_pages/Home/index.js';
import Posts from '../views/_pages/Posts/index.js';
import PostDetail from '../views/_pages/Posts/PostDetail.js';
import Todos from '../views/_pages/Todos/index.js';


export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/posts",
        component: Posts
      },
      {
        path: '/todos',
        component: Todos
      },
      {
        path: '/post-detail/:post_id',
        component: PostDetail
      }     
    ]
  }
];