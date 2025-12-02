import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Send, Loader2 } from 'lucide-react';

function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	const [isLoading, setIsLoading] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		const message = `Hello! I'm interested in solar solutions.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

		const whatsappNumber = '918299087358'; // Kapil Solar WhatsApp number
		const encodedMessage = encodeURIComponent(message);
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

		window.open(whatsappUrl, '_blank');

		// Reset form
		setFormData({
			name: '',
			email: '',
			phone: '',
			subject: '',
			message: '',
		});

		setIsLoading(false);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='space-y-6'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				<div className='space-y-2'>
					<Label
						htmlFor='name'
						className='text-white font-medium'
					>
						Name <span className='text-destructive'>*</span>
					</Label>
					<Input
						id='name'
						type='text'
						name='name'
						placeholder='Enter your name'
						value={formData.name}
						onChange={handleChange}
						required
						className='h-11'
					/>
				</div>

				<div className='space-y-2'>
					<Label
						htmlFor='email'
						className='text-white font-medium'
					>
						Email <span className='text-destructive'>*</span>
					</Label>
					<Input
						id='email'
						type='email'
						name='email'
						placeholder='your.email@example.com'
						value={formData.email}
						onChange={handleChange}
						required
						className='h-11'
					/>
				</div>
			</div>

			<div className='space-y-2'>
				<Label
					htmlFor='phone'
					className='text-white font-medium'
				>
					Phone Number
				</Label>
				<Input
					id='phone'
					type='tel'
					name='phone'
					placeholder='+91 XXXXX XXXXX'
					value={formData.phone}
					onChange={handleChange}
					className='h-11'
				/>
			</div>

			<div className='space-y-2'>
				<Label
					htmlFor='subject'
					className='text-white font-medium'
				>
					Subject <span className='text-destructive'>*</span>
				</Label>
				<Input
					id='subject'
					type='text'
					name='subject'
					placeholder='What can we help you with?'
					value={formData.subject}
					onChange={handleChange}
					required
					className='h-11'
				/>
			</div>

			<div className='space-y-2'>
				<Label
					htmlFor='message'
					className='text-white font-medium'
				>
					Message <span className='text-destructive'>*</span>
				</Label>
				<Textarea
					id='message'
					name='message'
					placeholder='Tell us more about your solar energy needs...'
					value={formData.message}
					onChange={handleChange}
					required
					rows={5}
					className='resize-none'
				/>
			</div>

			<Button
				type='submit'
				disabled={isLoading}
				className='w-full h-12 text-base font-semibold'
				size='lg'
			>
				{isLoading ? (
					<>
						<Loader2 className='mr-2 h-5 w-5 animate-spin' />
						Sending...
					</>
				) : (
					<>
						<Send className='mr-2 h-5 w-5' />
						Send Message
					</>
				)}
			</Button>
		</form>
	);
}

export default ContactForm;
