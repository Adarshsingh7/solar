/** @format */

import { Layout } from '@/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const routes = [
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'about',
				element: <div>about page</div>,
			},
			{
				path: 'dashboard',
				element: <div>dashboard page</div>,
			},
		],
	},
];

const router = createBrowserRouter(routes);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
