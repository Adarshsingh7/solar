/** @format */

import ContactForm from '@/components/ContactForm';
import Founder from '@/components/Founder';
import HeroSection from '@/components/Hero';
import SolarEstimator from '@/components/SolarEstimator';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<>
			<HeroSection />

			<Founder />

			<main className='flex-1'>
				<section className='relative bg-linear-to-br from-primary via-primary/90 to-accent text-primary-foreground py-20 md:py-32 overflow-hidden'>
					<div className='absolute inset-0 opacity-10'>
						<div className='absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl bg-accent'></div>
						<div className='absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-primary/50'></div>
					</div>
					<div className='max-w-6xl mx-auto px-4 text-center relative z-10'>
						<h1 className='text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight'>
							Clean Solar Energy for Your Home & Business
						</h1>
						<p className='text-lg md:text-xl mb-8 opacity-95 text-balance max-w-3xl mx-auto'>
							Affordable, reliable, and professional solar solutions tailored to
							your needs. Reduce your electricity bills and switch to
							sustainable energy today.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link to='/quote'>
								<Button className='bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold'>
									Get Free Quote
								</Button>
							</Link>
							<Link to='/how-we-work'>
								<Button
									variant='outline'
									className='px-8 py-6 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent'
								>
									See Our Process
								</Button>
							</Link>
						</div>
					</div>
				</section>

				<section className='py-16 md:py-24 bg-background'>
					<div className='max-w-6xl mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
								Our Services
							</h2>
							<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
								Complete solar solutions for residential and commercial
								properties
							</p>
						</div>
						<div className='grid md:grid-cols-3 gap-6'>
							{[
								{
									title: 'High-Efficiency Solar Panels',
									description:
										'Top-quality solar panels with industry-leading efficiency rates for maximum energy output',
									icon: '⚡',
								},
								{
									title: 'Professional Installation',
									description:
										'Expert installation team with years of experience ensuring safe and reliable setup',
									icon: '🔧',
								},
								{
									title: 'Solar Inverters',
									description:
										'Advanced inverter technology for optimal power conversion and system performance',
									icon: '⚙️',
								},
								{
									title: 'Battery & Backup Systems',
									description:
										'Energy storage solutions for 24/7 power availability even during grid outages',
									icon: '🔋',
								},
								{
									title: 'Maintenance & Support',
									description:
										'Ongoing maintenance and 24/7 customer support for worry-free operations',
									icon: '🛠️',
								},
								{
									title: 'Solar Panel Washing',
									description:
										'Just ₹99 per panel for cleaning twice a month to maintain peak efficiency.',
									icon: '💧',
								},
								// {
								// 	title: 'Accessories',
								// 	description:
								// 		'Get replacement or panel accessories support for the products sold',
								// 	icon: '🧰',
								// },
							].map((service, i) => (
								<div
									key={i}
									className='p-6 border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all group'
								>
									<div className='text-4xl mb-3 group-hover:scale-110 transition-transform'>
										{service.icon}
									</div>
									<h3 className='text-xl font-bold mb-2 text-foreground'>
										{service.title}
									</h3>
									<p className='text-muted-foreground text-sm'>
										{service.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='py-16 md:py-24 bg-primary/5'>
					<div className='max-w-6xl mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
								Why Choose Us?
							</h2>
							<p className='text-lg text-muted-foreground'>
								We're committed to delivering excellence in every aspect of our
								service
							</p>
						</div>
						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									title: 'Trusted & Certified',
									description:
										'All our products are certified and tested for quality and safety',
								},
								{
									title: 'Professional Team',
									description:
										'Experienced installers with proven track record of successful projects',
								},
								{
									title: 'Affordable Pricing',
									description:
										'Competitive prices without compromising on quality and service',
								},
								{
									title: 'Long-Term Warranty',
									description:
										'Comprehensive warranty coverage for complete peace of mind',
								},
								{
									title: 'Fast Support',
									description:
										'Dedicated support team ready to help you anytime',
								},
								{
									title: 'Custom Solutions',
									description:
										'Tailored solar solutions designed for your specific needs',
								},
							].map((item, i) => (
								<div
									key={i}
									className='flex gap-4'
								>
									<div className='flex-shrink-0'>
										<div className='flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground font-bold'>
											✓
										</div>
									</div>
									<div>
										<h3 className='text-lg font-semibold text-foreground mb-1'>
											{item.title}
										</h3>
										<p className='text-muted-foreground'>{item.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground'>
					<div className='max-w-4xl mx-auto px-4 text-center'>
						<h2 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
							Ready to Switch to Solar?
						</h2>
						<p className='text-lg opacity-95 mb-8 text-balance'>
							Get a free consultation and custom quote for your property today
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link to='/contact'>
								<Button className='bg-background text-primary hover:bg-background/90 px-8 py-6 text-lg font-semibold'>
									Contact Us Today
								</Button>
							</Link>
							<Link to='/about'>
								<Button
									variant='outline'
									className='px-8 py-6 text-lg font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent'
								>
									Learn More
								</Button>
							</Link>
						</div>
					</div>
				</section>
			</main>
			<SolarEstimator />

			<footer className='w-full bg-foreground text-card py-12 md:py-16'>
				<div className='mx-auto max-w-6xl flex flex-col gap-5'>
					<div className='mb-10'>
						<ContactForm />
					</div>
					<div className='grid md:grid-cols-4 gap-8 mb-10'>
						<div>
							<div className='flex items-center gap-2 mb-4'>
								<div className='flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground font-bold'>
									☀️
								</div>
								<span className='text-xl font-bold text-card'>Kapil Solar</span>
							</div>
							<p className='text-card/70'>
								Clean energy solutions for a sustainable future.
							</p>
						</div>
						<div>
							<h4 className='font-bold text-card mb-4'>Company</h4>
							<ul className='space-y-2 text-card/70'>
								<li>
									<a
										href='/'
										className='hover:text-card transition-colors'
									>
										Home
									</a>
								</li>
								<li>
									<a
										href='/about'
										className='hover:text-card transition-colors'
									>
										About
									</a>
								</li>
								<li>
									<a
										href='/contact'
										className='hover:text-card transition-colors'
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-bold text-card mb-4'>Support</h4>
							<ul className='space-y-2 text-card/70'>
								<li>
									<a
										href='#'
										className='hover:text-card transition-colors'
									>
										FAQ
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-card transition-colors'
									>
										Help
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-card transition-colors'
									>
										Warranty
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className='font-bold text-card mb-4'>Connect</h4>
							<ul className='space-y-2 text-card/70'>
								<li>
									<a
										href='#'
										className='hover:text-card transition-colors'
									>
										Instagram
									</a>
								</li>
								<li>
									<a
										target='_blank'
										href='https://facebook.com/share/1BoC2zxMYJ'
										className='hover:text-card transition-colors'
									>
										Facebook
									</a>
								</li>
								<li>
									<a
										href='#'
										className='hover:text-card transition-colors'
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className='pt-4 text-center'>
						<p className='text-xs text-muted-foreground'>
							By submitting this form, you agree to our{' '}
							<a
								href='/privacy'
								className='text-accent hover:underline'
							>
								Privacy Policy
							</a>{' '}
							and{' '}
							<a
								href='/terms'
								className='text-accent hover:underline'
							>
								Terms of Service
							</a>
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Home;
