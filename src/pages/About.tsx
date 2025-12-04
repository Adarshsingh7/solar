import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';
const services = [
	{
		icon: '⚡',
		title: 'High-efficiency solar panels',
		description:
			'Premium-grade solar panels engineered to maximize energy generation.',
	},
	{
		icon: '🔄',
		title: 'Solar inverters',
		description:
			'Cutting-edge inverter technology ensuring smooth and reliable power conversion.',
	},
	{
		icon: '🔋',
		title: 'Solar batteries & backup systems',
		description:
			'Store surplus energy and stay fully powered during outages or low-sunlight hours.',
	},
	{
		icon: '🏗️',
		title: 'Rooftop solar installation',
		description:
			'Expert rooftop installation carried out by certified and experienced technicians.',
	},
	{
		icon: '🛠️',
		title: 'Solar maintenance & support',
		description:
			'Comprehensive maintenance services with dedicated 24/7 customer support.',
	},

	// New service added
	{
		icon: '📡',
		title: 'Solar system monitoring & analytics',
		description:
			'Real-time performance tracking and detailed analytics to optimize your solar output.',
	},
];

const reasons = [
	'Trusted and certified products',
	'Professional installation team',
	'Affordable pricing',
	'Long-term warranty',
	'Fast support and service',
];

export default function AboutPage() {
	return (
		<main className='min-h-screen bg-background'>
			<section className='relative w-full py-20 md:py-32 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10' />
				<div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div>
							<h1 className='text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight'>
								Welcome to <span className='text-primary'>Kapil Solar</span>
							</h1>
							<p className='text-xl text-muted-foreground mb-8 leading-relaxed'>
								A trusted name in clean and affordable solar energy solutions.
								We started with one simple goal: to make solar power easy,
								reliable, and accessible for everyone.
							</p>
							<p className='text-lg text-muted-foreground leading-relaxed'>
								With rising electricity costs and increasing environmental
								challenges, we believe that solar energy is the smartest way
								forward. Our team works every day to bring high-quality solar
								products and professional installation services to homes, shops,
								and businesses.
							</p>
						</div>
						<div className='relative h-96 rounded-xl overflow-hidden shadow-2xl'>
							<img
								src='/panel-1.jpg'
								alt='Solar panel installation'
								className='w-full h-full object-cover'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent' />
						</div>
					</div>
				</div>
			</section>
			<section className='w-full py-20 md:py-32 bg-secondary/20'>
				<div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>
							What We Do
						</h2>
						<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
							We provide complete solar solutions tailored to your needs.
							Whether you want to reduce your electricity bill or shift to clean
							energy, we have the perfect solution for you.
						</p>
					</div>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{services.map((service, index) => (
							<div
								key={index}
								className='bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border hover:border-primary/50'
							>
								<div className='text-5xl mb-4'>{service.icon}</div>
								<h3 className='text-xl font-bold text-foreground mb-3'>
									{service.title}
								</h3>
								<p className='text-muted-foreground leading-relaxed'>
									{service.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='w-full py-20 md:py-32'>
				<div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div className='relative h-96 rounded-xl overflow-hidden shadow-2xl'>
							<img
								src='/panel-2.jpg'
								alt='Professional installation team'
								className='w-full h-full object-cover'
							/>
							<div className='absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent' />
						</div>
						<div>
							<h2 className='text-4xl md:text-5xl font-bold text-foreground mb-8'>
								Why Choose Us?
							</h2>
							<ul className='space-y-4'>
								{reasons.map((reason, index) => (
									<li
										key={index}
										className='flex items-start gap-4'
									>
										<div className='flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold'>
											✓
										</div>
										<span className='text-lg text-foreground font-medium'>
											{reason}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className='w-full py-20 md:py-32 bg-gradient-to-r from-primary via-primary/90 to-accent'>
				<div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h2 className='text-4xl md:text-5xl font-bold text-primary-foreground mb-6'>
							Our Mission
						</h2>
						<p className='text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium'>
							To help every household and business transition to clean,
							sustainable, and cost-effective solar energy.
						</p>
						<Link to='/contact'>
							<button className='mt-10 px-8 py-4 bg-primary-foreground text-primary rounded-lg font-bold text-lg hover:bg-primary-foreground/90 transition-colors'>
								Start Your Solar Journey
							</button>
						</Link>
					</div>
				</div>
			</section>
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
		</main>
	);
}
