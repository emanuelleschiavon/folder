import Home from './components/Home'
import Details from './components/Details'

export const routes = [
	{path: '', component: Home},
	{name:'document', path:'/document/:id', component: Details}
];