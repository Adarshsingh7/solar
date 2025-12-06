import { Award, Users, Lightbulb, Target } from 'lucide-react';

function Founder() {
	return (
		<div className='py-16 px-4'>
			<div className='max-w-6xl mx-auto'>
				{/* Header Section */}
				<div className='text-center mb-12'>
					<h2 className='text-4xl font-bold text-slate-900 mb-3'>
						Meet Our Founder
					</h2>
					<div className='w-20 h-1 bg-yellow-500 mx-auto mb-4'></div>
					<p className='text-lg text-slate-600 max-w-2xl mx-auto'>
						Leading the renewable energy revolution with vision and dedication
					</p>
				</div>

				{/* Main Content */}
				<div className='grid md:grid-cols-2 gap-10 items-center mb-12'>
					{/* Image Section */}
					<div className='flex justify-center'>
						<div className='relative'>
							<div className='absolute inset-0 bg-yellow-400 rounded-full blur-2xl opacity-20 transform scale-110'></div>
							<img
								src='/founder.jpg'
								alt='Founder of Kapil Solar'
								className='relative w-72 h-72 rounded-full object-cover shadow-2xl border-8 border-white'
							/>
							<div className='absolute -bottom-4 -right-4 bg-yellow-500 text-white px-5 py-2 rounded-full shadow-lg font-semibold text-sm'>
								10+ Years Experience
							</div>
						</div>
					</div>

					{/* Bio Section */}
					<div className='space-y-5'>
						<div>
							<h3 className='text-3xl font-bold text-slate-900 mb-1'>
								Kapil Kumar Pal
							</h3>
							<p className='text-lg text-yellow-600 font-semibold mb-3'>
								Founder & CEO
							</p>
						</div>

						<p className='text-slate-700 leading-relaxed'>
							With over 10 years of experience in the renewable energy sector,
							Kapil Kumar founded Kapil Solar with a vision to make clean,
							sustainable energy accessible to every home and business in India.
						</p>

						{/* <p className='text-slate-700 leading-relaxed'>
							His journey began as a solar technician, and through relentless
							dedication and innovation, he has built a company that has
							installed over 10,000 solar systems, helping thousands of families
							reduce their carbon footprint while saving on energy costs.
						</p> */}

						<div className='bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded'>
							<p className='text-slate-700 italic'>
								"Our mission is not just to install solar panels, but to empower
								communities with sustainable energy solutions that create a
								better tomorrow."
							</p>
						</div>
					</div>
				</div>

				{/* Vision & Values */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
					<div className='bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-xl shadow-md'>
						<div className='w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-3'>
							<Lightbulb className='w-6 h-6 text-white' />
						</div>
						<h4 className='text-lg font-bold text-slate-900 mb-2'>
							Innovation
						</h4>
						<p className='text-slate-700 text-sm'>
							Constantly evolving with the latest solar technology
						</p>
					</div>

					<div className='bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl shadow-md'>
						<div className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-3'>
							<Users className='w-6 h-6 text-white' />
						</div>
						<h4 className='text-lg font-bold text-slate-900 mb-2'>
							Customer First
						</h4>
						<p className='text-slate-700 text-sm'>
							Building lasting relationships through exceptional service
						</p>
					</div>

					<div className='bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl shadow-md'>
						<div className='w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-3'>
							<Target className='w-6 h-6 text-white' />
						</div>
						<h4 className='text-lg font-bold text-slate-900 mb-2'>
							Sustainability
						</h4>
						<p className='text-slate-700 text-sm'>
							Committed to creating a greener planet for future generations
						</p>
					</div>

					<div className='bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl shadow-md'>
						<div className='w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-3'>
							<Award className='w-6 h-6 text-white' />
						</div>
						<h4 className='text-lg font-bold text-slate-900 mb-2'>
							Excellence
						</h4>
						<p className='text-slate-700 text-sm'>
							Maintaining the highest standards in every installation
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Founder;
