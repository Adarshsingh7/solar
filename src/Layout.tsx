/** @format */

import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './wrappers/ScrollToTop';
import Header from './components/Header';

export const Layout: React.FC = () => {
	return (
		<ScrollToTop>
			<Header />
			<Outlet />
			{/* <video src='/video.mp4'></video> */}
		</ScrollToTop>
	);
};
