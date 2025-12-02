/** @format */

import { Layout } from '@/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HowWeWorkPage from './pages/Workflow';
import Quote from './pages/Quote';

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
				element: <AboutPage />,
			},
			{
				path: 'contact',
				element: <ContactPage />,
			},
			{
				path: 'workflow',
				element: <HowWeWorkPage />,
			},
			{
				path: 'dashboard',
				element: <div>dashboard page</div>,
			},
			{
				path: 'quotation',
				element: <Quote />,
			},
		],
	},
];

const router = createBrowserRouter(routes);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
