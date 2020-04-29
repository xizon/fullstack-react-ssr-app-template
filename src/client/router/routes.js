import App from '../components/_main';
import Home from '../components/pages/Home';
import Posts from '../components/pages/Posts';
import PostDetail from '../components/pages/Posts/PostDetail';
import Todos from '../components/pages/Todos';

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