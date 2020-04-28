import App from '../components/_main';
import Home from '../components/pages/Home';
import Posts from '../components/pages/Posts';
import Todos from '../components/pages/Todos';



const Routes = [
  {
    path: '/',
    component: App
    
  },
  {
    path: '/index',
    component: Home,
    exact: true
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/todos',
    component: Todos
  }
];

export default Routes;