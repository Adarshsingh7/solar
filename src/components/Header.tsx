/** @format */

import SolarBanner from './SolarBanner';
import { Navbar } from './Navbar';

function Header() {
	return (
		<div className='sticky top-0 z-50 w-full border-b bg-background backdrop-blur px-4 md:px-6 [&_*]:no-underline'>
			<SolarBanner />
			<Navbar />
		</div>
	);
}

export default Header;
