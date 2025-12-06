/** @format */

import { Link } from 'react-router-dom';

export default function HeroSection() {
	return (
		<section className='relative h-screen w-full overflow-hidden'>
			{/* Video Background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				preload='auto'
				className='absolute inset-0 h-full w-full object-cover'
			>
				<source
					src='/video.mp4'
					type='video/mp4'
				/>
			</video>

			{/* Dark Overlay */}
			<div className='absolute inset-0 bg-black/60'></div>

			{/* Content */}
			<div className='relative z-10 flex flex-col items-center justify-center h-full px-4 text-center animate-fadeIn'>
				<h1 className='text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6'>
					Save Up to 70% on Bills
				</h1>

				<p className='text-lg md:text-xl text-gray-200 max-w-2xl mb-8'>
					Affordable, reliable solar solutions for homes and businesses in
					Kanpur. Central Government subsidy assistance available.
				</p>

				<div className='flex gap-4'>
					<Link to='/contact'>
						<button className='px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition'>
							Get Started
						</button>
					</Link>
					<Link to='/about'>
						<button className='px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition'>
							Learn More
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
