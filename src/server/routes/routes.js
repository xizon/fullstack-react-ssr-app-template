import App from '../../client/components/App';
import Home from '../../client/components/App/Home';
import Posts from '../../client/components/App/Posts';
import Todos from '../../client/components/App/Todos';


const Routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/index',
    component: Home
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