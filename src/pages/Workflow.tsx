import ContactForm from '@/components/ContactForm';
import { Link } from 'react-router-dom';

const steps = [
	{
		number: 1,
		title: 'Consultation & Site Visit',
		description:
			'We start by understanding your energy needs. Our expert team visits your location to check:',
		details: [
			'Roof size & direction',
			'Electricity usage',
			'Feasibility & shading',
			'Budget and requirements',
		],
		highlight: 'This helps us design the perfect solar system for you.',
	},
	{
		number: 2,
		title: 'Customized Solar Plan',
		description:
			'Based on the site survey, we prepare a detailed proposal that includes:',
		details: [
			'Recommended system size',
			'Expected savings',
			'Installation plan',
			'Product details',
			'Pricing & warranty',
		],
		highlight: 'We make sure everything is clear and easy to understand.',
	},
	{
		number: 3,
		title: 'Quick & Professional Installation',
		description:
			'Once approved, our trained technicians install the solar system with complete safety and accuracy:',
		details: [
			'Mounting panel frames',
			'Fixing solar panels',
			'Wiring & inverter setup',
			'Testing the system',
		],
		highlight:
			'We handle the entire process smoothly and ensure a clean, professional finish.',
	},
	{
		number: 4,
		title: 'System Testing & Handover',
		description: 'After installation, we perform:',
		details: [
			'Power generation testing',
			'Safety checks',
			'Performance monitoring setup',
		],
		highlight:
			'We explain how to monitor your solar power generation through app or meter.',
	},
	{
		number: 5,
		title: 'After-Sales Support',
		description: "Our relationship doesn't end after installation. We provide:",
		details: [
			'Regular maintenance',
			'On-call technical support',
			'Warranty services',
			'Performance checkups',
		],
		highlight:
			'We make sure your solar system keeps working at its best for years.',
	},
	{
		number: 6,
		title: 'Save Money, Save Energy',
		description: 'Once everything is set, you start enjoying:',
		details: [
			'Lower electricity bills',
			'Clean and renewable power',
			'Long-term savings',
		],
		highlight: '',
	},
];

export default function HowWeWorkPage() {
	return (
		<main className='min-h-screen bg-background'>
			{/* <Header /> */}
			<section className='relative py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10'>
				<div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance'>
							How We Work
						</h1>
						<p className='text-lg text-muted-foreground mb-4 text-pretty'>
							Your journey to affordable, clean solar energy in 6 simple steps
						</p>
						<p className='text-base text-muted-foreground max-w-2xl mx-auto'>
							We handle everything from consultation to support, making solar
							installation seamless and hassle-free.
						</p>
					</div>
				</div>
			</section>
			<section className='py-16 md:py-24 bg-background'>
				<div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'>
					<div className='space-y-12'>
						{steps.map((step) => (
							<div
								key={step.number}
								className='relative'
							>
								{/* Step connector line - hidden on last step */}
								{step.number < steps.length && (
									<div className='absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-primary to-accent hidden md:block'></div>
								)}

								<div className='flex gap-6 md:gap-8'>
									{/* Step number circle */}
									<div className='flex-shrink-0'>
										<div className='flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl'>
											{step.number}
										</div>
									</div>

									{/* Step content */}
									<div className='flex-1 pt-2'>
										<h3 className='text-2xl font-bold text-foreground mb-3'>
											{step.title}
										</h3>
										<p className='text-muted-foreground mb-4'>
											{step.description}
										</p>

										{/* Details list */}
										{step.details.length > 0 && (
											<ul className='space-y-2 mb-4'>
												{step.details.map((detail, index) => (
													<li
														key={index}
														className='flex items-start gap-2 text-foreground'
													>
														<span className='text-primary font-bold mt-1'>
															•
														</span>
														<span>{detail}</span>
													</li>
												))}
											</ul>
										)}

										{/* Highlight */}
										{step.highlight && (
											<p className='text-primary font-medium italic'>
												"{step.highlight}"
											</p>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className='py-16 md:py-24 bg-gradient-to-br from-accent/5 to-primary/5'>
				<div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl font-bold text-foreground mb-4'>
							Why Our Process Works
						</h2>
						<p className='text-lg text-muted-foreground'>
							We combine expertise, quality, and customer care to deliver
							exceptional results
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-6'>
						<div className='rounded-lg border border-border bg-card p-6'>
							<div className='text-4xl mb-3'>✓</div>
							<h3 className='text-lg font-bold text-foreground mb-2'>
								Transparent Process
							</h3>
							<p className='text-muted-foreground'>
								We keep you informed every step of the way, ensuring you
								understand what's happening.
							</p>
						</div>

						<div className='rounded-lg border border-border bg-card p-6'>
							<div className='text-4xl mb-3'>⚡</div>
							<h3 className='text-lg font-bold text-foreground mb-2'>
								Professional Team
							</h3>
							<p className='text-muted-foreground'>
								Our certified technicians have years of experience in solar
								installation.
							</p>
						</div>

						<div className='rounded-lg border border-border bg-card p-6'>
							<div className='text-4xl mb-3'>🛡️</div>
							<h3 className='text-lg font-bold text-foreground mb-2'>
								Complete Support
							</h3>
							<p className='text-muted-foreground'>
								From installation to maintenance, we're here to support your
								solar journey.
							</p>
						</div>
					</div>

					<div className='mt-12 text-center'>
						<Link to='/contact'>
							<button className='px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors'>
								Get Your Free Consultation
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
										target='_blank'
										href='https://www.instagram.com/kapilsolarkanpur?igsh=aWZhZ3c0OXN4bDRj&utm_source=ig_contact_invite '
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
