import App from '../components/_main/index.js';
import Home from '../components/pages/Home/index.js';
import Posts from '../components/pages/Posts/index.js';
import PostDetail from '../components/pages/Posts/PostDetail.js';
import Todos from '../components/pages/Todos/index.js';


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