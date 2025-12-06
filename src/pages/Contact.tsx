import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Warehouse, Phone } from 'lucide-react';

export const metadata = {
	title: 'Contact Us - Solar Energy Solutions',
	description:
		'Get in touch with us for solar energy solutions and consultation',
};

const contactDetails = [
	{
		icon: MapPin,
		title: 'Find us',
		details: ['L Sector Awas Vikas', 'Kesavpuram, Kanpur 208019'],
		color: 'text-primary',
	},
	{
		icon: Warehouse,
		title: 'Warehouse',
		details: ['25/2, L-Sector', 'Awas Vikas, Kanpur'],
		color: 'text-primary',
	},
	{
		icon: Phone,
		title: 'Call Now',
		details: ['8299087358', '9580167154'],
		color: 'text-primary',
	},
];

export default function ContactPage() {
	return (
		<>
			<section className='relative bg-primary text-primary-foreground py-16 md:py-20 overflow-hidden'>
				<div className='absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90 opacity-90'></div>
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
				<div className='relative max-w-7xl mx-auto px-4 text-center'>
					<Badge className='mb-3 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30'>
						Get In Touch
					</Badge>
					<h1 className='text-3xl md:text-5xl font-bold mb-4 text-balance'>
						Contact Us
					</h1>
					<p className='text-base md:text-lg opacity-90 text-balance max-w-2xl mx-auto'>
						Get in touch for a free solar consultation and discover how we can
						help power your future
					</p>
				</div>
			</section>

			<main className='flex-1 bg-background'>
				<div className='max-w-7xl mx-auto px-4 py-12 md:py-16'>
					<div className='grid lg:grid-cols-2 gap-8 lg:gap-12'>
						{/* Contact Form Section */}
						<div className='order-2 lg:order-1'>
							<div className='mb-6'>
								<Badge className='mb-2 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20'>
									Send Message
								</Badge>
								<h2 className='text-2xl md:text-3xl font-bold text-foreground mb-2'>
									Contact <span className='text-accent'>us</span>
								</h2>
								<p className='text-muted-foreground text-sm'>
									Fill out the form below and we'll get back to you as soon as
									possible
								</p>
							</div>

							<Card className='shadow-lg border-border/50'>
								<CardContent className='p-5 md:p-6'>
									<ContactForm />
								</CardContent>
							</Card>
						</div>

						{/* Contact Details Section */}
						<div className='order-1 lg:order-2'>
							<div className='mb-6'>
								<Badge className='mb-2 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20'>
									Contact Information
								</Badge>
								<h2 className='text-2xl md:text-3xl font-bold text-foreground mb-2'>
									Get in touch <span className='text-accent'>with us</span>
								</h2>
								<p className='text-muted-foreground text-sm'>
									We're here to help and answer any questions you might have
								</p>
							</div>

							<div className='space-y-3'>
								{contactDetails.map((item, index) => {
									const Icon = item.icon;
									return (
										<Card
											key={index}
											className='group hover:shadow-md transition-all duration-300 border-border/50 hover:border-accent/50'
										>
											<CardContent className='p-4'>
												<div className='flex gap-3'>
													<div className='flex-shrink-0 w-11 h-11 bg-accent/10 group-hover:bg-accent/20 rounded-lg flex items-center justify-center transition-colors duration-300'>
														<Icon className={`${item.color} w-5 h-5`} />
													</div>
													<div className='flex-1'>
														<h3 className='font-semibold text-base text-foreground mb-1 group-hover:text-accent transition-colors'>
															{item.title}
														</h3>
														<div className='space-y-0.5'>
															{item.details.map((detail, idx) => (
																<p
																	key={idx}
																	className='text-muted-foreground text-xs leading-relaxed'
																>
																	{detail}
																</p>
															))}
														</div>
													</div>
												</div>
											</CardContent>
										</Card>
									);
								})}
							</div>

							{/* Optional CTA Card */}
							<Card className='mt-4 bg-accent/5 border-accent/20 shadow-sm'>
								<CardContent className='p-4'>
									<div className='flex items-start gap-3'>
										<div className='flex-shrink-0 w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center'>
											<span className='text-lg'>⚡</span>
										</div>
										<div>
											<h4 className='font-semibold text-sm text-foreground mb-0.5'>
												Quick Response Time
											</h4>
											<p className='text-xs text-muted-foreground'>
												We typically respond within 24 hours during business
												days
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
				<footer className='w-full bg-foreground text-card py-12 md:py-16'>
					<div className='mx-auto max-w-6xl flex flex-col gap-5'>
						<div className='grid md:grid-cols-4 gap-8 mb-10'>
							<div>
								<div className='flex items-center gap-2 mb-4'>
									<div className='flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground font-bold'>
										☀️
									</div>
									<span className='text-xl font-bold text-card'>
										Kapil Solar
									</span>
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
		</>
	);
}
