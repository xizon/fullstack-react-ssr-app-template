import App from '../components/App';
import Home from '../components/App/Home';
import Posts from '../components/App/Posts';
import Todos from '../components/App/Todos';


const Routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/index',
    exact: true,
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