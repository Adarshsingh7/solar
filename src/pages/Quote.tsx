import ContactForm from '@/components/ContactForm';
import SolarEstimator from '@/components/SolarEstimator';

function Quote() {
	return (
		<div>
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
										href='#'
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
		</div>
	);
}

export default Quote;
