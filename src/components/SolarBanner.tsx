import { MapPin, Clock, Phone } from 'lucide-react';

export default function SolarBanner() {
	return (
		<div className='w-full bg-white border-b border-gray-200'>
			<div className='max-w-7xl mx-auto px-4 py-3'>
				<div className='flex items-center justify-between gap-4'>
					{/* Logo - Compact */}
					<div className='flex items-center gap-2'>
						<div className='relative w-16 h-8'>
							<img
								src='brand.webp'
								alt='brand logo'
							/>
						</div>
						<h1 className='hidden md:block text-lg font-bold text-gray-700'>
							Kaplil Solar
						</h1>
					</div>

					{/* Contact Info - Compact */}
					<div className='flex items-center gap-6 text-xs'>
						<div className='hidden lg:flex items-center gap-1.5'>
							<MapPin className='w-4 h-4 text-yellow-400' />
							<span className='text-gray-700'>
								25/2 L-Sector, Awas Vikas, Keshavpuram Kanpur 17
							</span>
						</div>

						<div className='hidden md:flex items-center gap-1.5'>
							<Clock className='w-4 h-4 text-yellow-400' />
							<span className='text-gray-700'>Mon-Sat: 10am-6pm</span>
						</div>

						<div className='flex items-center gap-1.5'>
							<Phone className='w-4 h-4 text-yellow-400' />
							<div className='flex flex-col'>
								<span className='text-gray-800 font-semibold'>
									82-9908-7358
								</span>
								<a
									href='mailto:kapil9452@gmail.com'
									className='text-cyan-500 hover:text-cyan-600 hidden sm:block'
								>
									kapil9452@gmail.com
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
