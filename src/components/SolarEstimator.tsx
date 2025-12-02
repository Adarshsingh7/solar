import React, { useState } from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
	Calculator,
	DollarSign,
	TreePine,
	Home,
	AlertTriangle,
	CheckCircle2,
	Clock,
} from 'lucide-react';

interface FormData {
	monthlyConsumption: string;
	monthlyBill: string;
	pinCode: string;
	roofSpace: string;
	propertyType: string;
	electricityRate: string;
}

interface Results {
	systemSize: number;
	totalCost: number;
	subsidy: number;
	effectiveCost: number;
	monthlyGeneration: number;
	monthlySavings: number;
	annualSavings: number;
	paybackPeriod: number;
	co2Reduction: number;
	requiredSpace: number;
	spaceAvailable: boolean;
}

const SolarEstimator = () => {
	const [formData, setFormData] = useState<FormData>({
		monthlyConsumption: '',
		monthlyBill: '',
		pinCode: '',
		roofSpace: '',
		propertyType: '',
		electricityRate: '8',
	});

	const [results, setResults] = useState<Results | null>(null);
	const [errors, setErrors] = useState<string[]>([]);
	const [isCalculating, setIsCalculating] = useState(false);

	const formatIndianCurrency = (amount: number): string => {
		return '₹' + amount.toLocaleString('en-IN', { maximumFractionDigits: 0 });
	};

	const validateForm = (): boolean => {
		const newErrors: string[] = [];

		if (
			!formData.monthlyConsumption ||
			parseFloat(formData.monthlyConsumption) <= 0
		) {
			newErrors.push('Monthly consumption must be a positive number');
		}
		if (!formData.monthlyBill || parseFloat(formData.monthlyBill) <= 0) {
			newErrors.push('Monthly bill must be a positive number');
		}
		if (!formData.pinCode || !/^\d{6}$/.test(formData.pinCode)) {
			newErrors.push('Pin code must be exactly 6 digits');
		}
		if (!formData.roofSpace || parseFloat(formData.roofSpace) <= 0) {
			newErrors.push('Roof space must be a positive number');
		}
		if (!formData.propertyType) {
			newErrors.push('Please select property type');
		}
		if (
			!formData.electricityRate ||
			parseFloat(formData.electricityRate) <= 0
		) {
			newErrors.push('Electricity rate must be a positive number');
		}

		setErrors(newErrors);
		return newErrors.length === 0;
	};

	const calculateEstimate = () => {
		if (!validateForm()) return;

		setIsCalculating(true);

		setTimeout(() => {
			const consumption = parseFloat(formData.monthlyConsumption);
			const roofSpace = parseFloat(formData.roofSpace);
			const rate = parseFloat(formData.electricityRate);
			const isResidential = formData.propertyType === 'residential';

			// System capacity calculation
			const systemSize = consumption / 120;

			// Cost per kW based on capacity
			let costPerKw: number;
			if (systemSize <= 5) {
				costPerKw = 60000;
			} else if (systemSize <= 10) {
				costPerKw = 55000;
			} else {
				costPerKw = 50000;
			}

			const totalCost = systemSize * costPerKw;

			// Subsidy calculation (residential only, up to 10kW)
			let subsidy = 0;
			if (isResidential) {
				const eligibleCapacity = Math.min(systemSize, 10);
				if (eligibleCapacity <= 3) {
					subsidy = eligibleCapacity * 18000;
				} else {
					subsidy = 3 * 18000 + (eligibleCapacity - 3) * 9000;
				}
				subsidy = Math.min(subsidy, 78000);
			}

			const effectiveCost = totalCost - subsidy;
			const monthlyGeneration = systemSize * 120;
			const monthlySavings = monthlyGeneration * rate;
			const annualSavings = monthlySavings * 12;
			const paybackPeriod = effectiveCost / monthlySavings / 12;
			const co2Reduction = systemSize * 1200;
			const requiredSpace = systemSize * 10;
			const spaceAvailable = roofSpace >= requiredSpace;

			setResults({
				systemSize,
				totalCost,
				subsidy,
				effectiveCost,
				monthlyGeneration,
				monthlySavings,
				annualSavings,
				paybackPeriod,
				co2Reduction,
				requiredSpace,
				spaceAvailable,
			});

			setIsCalculating(false);
		}, 800);
	};

	const handleInputChange = (field: keyof FormData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		setErrors([]);
	};

	return (
		<div className='min-h-screen bg-background p-4 md:p-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-center mb-8'>
					<h1 className='text-4xl font-bold text-foreground mb-2 flex items-center justify-center gap-2'>
						{/* <Zap
							className='text-primary'
							size={40}
						/> */}
						Solar Panel Price Estimator
					</h1>
					<p className='text-muted-foreground'>
						Calculate your solar installation cost and savings in India
					</p>
				</div>

				<div className='flex flex-col lg:flex-row gap-6'>
					{/* Input Form */}
					<Card className='shadow-lg flex-1'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<Calculator className='text-primary' />
								Enter Your Details
							</CardTitle>
							<CardDescription>
								Fill in your information to get an estimate
							</CardDescription>
						</CardHeader>
						<CardContent className='space-y-4'>
							<div>
								<label className='block text-sm font-medium mb-1'>
									Monthly Electricity Consumption (kWh)
								</label>
								<Input
									type='number'
									placeholder='e.g., 300'
									value={formData.monthlyConsumption}
									onChange={(e) =>
										handleInputChange('monthlyConsumption', e.target.value)
									}
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>
									Average Monthly Electricity Bill (₹)
								</label>
								<Input
									type='number'
									placeholder='e.g., 2400'
									value={formData.monthlyBill}
									onChange={(e) =>
										handleInputChange('monthlyBill', e.target.value)
									}
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>
									Pin Code / Location
								</label>
								<Input
									type='text'
									placeholder='e.g., 110001'
									maxLength={6}
									value={formData.pinCode}
									onChange={(e) =>
										handleInputChange(
											'pinCode',
											e.target.value.replace(/\D/g, '')
										)
									}
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>
									Available Roof Space (sq. meters)
								</label>
								<Input
									type='number'
									placeholder='e.g., 100'
									value={formData.roofSpace}
									onChange={(e) =>
										handleInputChange('roofSpace', e.target.value)
									}
								/>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>
									Property Type
								</label>
								<Select
									value={formData.propertyType}
									onValueChange={(value) =>
										handleInputChange('propertyType', value)
									}
								>
									<SelectTrigger>
										<SelectValue placeholder='Select property type' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='residential'>Residential</SelectItem>
										<SelectItem value='commercial'>Commercial</SelectItem>
										<SelectItem value='industrial'>Industrial</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div>
								<label className='block text-sm font-medium mb-1'>
									Electricity Rate per Unit (₹/kWh)
								</label>
								<Input
									type='number'
									placeholder='e.g., 8'
									value={formData.electricityRate}
									onChange={(e) =>
										handleInputChange('electricityRate', e.target.value)
									}
								/>
							</div>

							{errors.length > 0 && (
								<div className='bg-destructive/10 border border-destructive/20 rounded-md p-3'>
									{errors.map((error, idx) => (
										<p
											key={idx}
											className='text-sm text-destructive flex items-center gap-2'
										>
											<AlertTriangle size={16} />
											{error}
										</p>
									))}
								</div>
							)}

							<Button
								onClick={calculateEstimate}
								disabled={isCalculating}
								className='w-full'
							>
								{isCalculating ? 'Calculating...' : 'Calculate Estimate'}
							</Button>
						</CardContent>
					</Card>

					{/* Results */}
					{results && (
						<Card className='shadow-lg flex-1'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									{/* <Zap className='text-primary' /> */}
									Your Solar Estimate
								</CardTitle>
								<CardDescription>Based on your inputs</CardDescription>
							</CardHeader>
							<CardContent className='space-y-6'>
								{/* System Size */}
								<div className='bg-primary/10 rounded-lg p-4'>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium text-foreground'>
											Recommended System Size
										</span>
										<Badge className='bg-primary'>
											{results.systemSize.toFixed(2)} kW
										</Badge>
									</div>
								</div>

								{/* Cost Breakdown */}
								<div className='space-y-3'>
									<h3 className='font-semibold flex items-center gap-2 text-foreground'>
										<DollarSign
											className='text-primary'
											size={20}
										/>
										Cost Breakdown
									</h3>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>
												Total Installation Cost
											</span>
											<span className='font-semibold text-foreground'>
												{formatIndianCurrency(results.totalCost)}
											</span>
										</div>
										{results.subsidy > 0 && (
											<div className='flex justify-between text-primary'>
												<span>Government Subsidy</span>
												<span className='font-semibold'>
													- {formatIndianCurrency(results.subsidy)}
												</span>
											</div>
										)}
										<div className='flex justify-between border-t pt-2'>
											<span className='font-medium text-foreground'>
												Effective Cost
											</span>
											<span className='font-bold text-lg text-foreground'>
												{formatIndianCurrency(results.effectiveCost)}
											</span>
										</div>
									</div>
								</div>

								{/* Savings */}
								<div className='space-y-3'>
									<h3 className='font-semibold flex items-center gap-2 text-foreground'>
										<DollarSign
											className='text-primary'
											size={20}
										/>
										Savings
									</h3>
									<div className='space-y-2 text-sm'>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>
												Monthly Energy Generation
											</span>
											<span className='font-semibold text-foreground'>
												{results.monthlyGeneration.toFixed(0)} kWh
											</span>
										</div>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>
												Monthly Bill Savings
											</span>
											<span className='font-semibold text-primary'>
												{formatIndianCurrency(results.monthlySavings)}
											</span>
										</div>
										<div className='flex justify-between'>
											<span className='text-muted-foreground'>
												Annual Savings
											</span>
											<span className='font-semibold text-primary'>
												{formatIndianCurrency(results.annualSavings)}
											</span>
										</div>
									</div>
								</div>

								{/* Payback Period */}
								<div className='bg-secondary rounded-lg p-4'>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium text-foreground flex items-center gap-2'>
											<Clock size={16} />
											Payback Period
										</span>
										<Badge>{results.paybackPeriod.toFixed(1)} years</Badge>
									</div>
								</div>

								{/* Environmental Impact */}
								<div className='bg-primary/10 rounded-lg p-4'>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium text-foreground flex items-center gap-2'>
											<TreePine size={16} />
											CO₂ Reduction per Year
										</span>
										<Badge className='bg-primary'>
											{results.co2Reduction.toFixed(0)} kg
										</Badge>
									</div>
								</div>

								{/* Roof Space Check */}
								<div
									className={`rounded-lg p-4 ${
										results.spaceAvailable
											? 'bg-primary/10 border border-primary/20'
											: 'bg-destructive/10 border border-destructive/20'
									}`}
								>
									<div className='flex items-start gap-2'>
										{results.spaceAvailable ? (
											<CheckCircle2
												className='text-primary mt-0.5'
												size={20}
											/>
										) : (
											<AlertTriangle
												className='text-destructive mt-0.5'
												size={20}
											/>
										)}
										<div className='flex-1'>
											<p
												className={`text-sm font-medium ${
													results.spaceAvailable
														? 'text-foreground'
														: 'text-destructive'
												}`}
											>
												Roof Space Requirement
											</p>
											<p
												className={`text-sm ${
													results.spaceAvailable
														? 'text-muted-foreground'
														: 'text-destructive'
												}`}
											>
												Required: {results.requiredSpace.toFixed(1)} sq.m |
												Available: {formData.roofSpace} sq.m
											</p>
											{!results.spaceAvailable && (
												<p className='text-xs text-destructive mt-1'>
													Insufficient roof space. Consider a smaller system or
													clearing more area.
												</p>
											)}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					)}

					{!results && (
						<Card className='shadow-lg hidden lg:block flex-1'>
							<CardHeader>
								<CardTitle>Why Go Solar?</CardTitle>
							</CardHeader>
							<CardContent className='space-y-4'>
								<div className='flex items-start gap-3'>
									<DollarSign
										className='text-primary mt-1'
										size={24}
									/>
									<div>
										<h4 className='font-semibold mb-1'>Save Money</h4>
										<p className='text-sm text-muted-foreground'>
											Reduce your electricity bills by up to 90% and enjoy
											long-term savings.
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<TreePine
										className='text-primary mt-1'
										size={24}
									/>
									<div>
										<h4 className='font-semibold mb-1'>Eco-Friendly</h4>
										<p className='text-sm text-muted-foreground'>
											Reduce your carbon footprint and contribute to a cleaner
											environment.
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									<Home
										className='text-primary mt-1'
										size={24}
									/>
									<div>
										<h4 className='font-semibold mb-1'>
											Increase Property Value
										</h4>
										<p className='text-sm text-muted-foreground'>
											Solar installations can increase your property value by up
											to 4%.
										</p>
									</div>
								</div>
								<div className='flex items-start gap-3'>
									{/* <Zap
										className='text-primary mt-1'
										size={24}
									/> */}
									<div>
										<h4 className='font-semibold mb-1'>Government Subsidies</h4>
										<p className='text-sm text-muted-foreground'>
											Get up to ₹78,000 subsidy on residential installations
											under PM-KUSUM scheme.
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
};

export default SolarEstimator;
