import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import emailjs from "@emailjs/browser";

// Since we don't know the exact export structure of Layout.tsx, we'll use a more generic import approach
// that will work regardless of whether Layout is a default or named export
import Layout from "../components/Layout";

// Accessing environment variables
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const formSchema = z.object({
	name: z.string().min(2, { message: "Name must be at least 2 characters." }),
	email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),
	message: z.string().min(10, { message: "Message must be at least 10 characters." })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			message: ""
		}
	});

	const onSubmit = async (data: FormValues) => {
		setIsSubmitting(true);
		// Send email using EmailJS
		try {
			await emailjs.send(
				serviceId,
				templateId,
				{
					to_name: "Aorus Solutions",
					name: data.name,
					from_email: "urke.mafia@gmail.com", // Use the user's email
					message: data.message,
					email: data.email // Your receiving email
				},
				publicKey
			);
		} catch (error) {
			console.error("Failed to send email:", error);
			throw error; // Re-throw to be caught by the outer try-catch
		}

		// Simulate form submission
		try {
			// In a real application, you would send this data to your backend
			// which would then send an email to urke.mafia@gmail.com
			console.log("Form submitted:", data);

			// Simulate API delay
			// await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log("evo me");

			setIsSubmitted(true);
			// form.reset();
		} catch (error) {
			console.error("Error submitting form:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12'
				>
					<h1 className='text-4xl font-bold text-foreground mb-4'>Contact Us</h1>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						Have a question or want to work with us? Send us a message and we'll get back to you as soon as
						possible.
					</p>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className='bg-card rounded-xl p-6 shadow-lg'
					>
						<h2 className='text-2xl font-semibold mb-6'>Get in Touch</h2>

						<div className='space-y-6'>
							<div className='flex items-start space-x-4'>
								<div className='bg-primary/10 p-3 rounded-full'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='text-lg font-medium'>Email</h3>
									<p className='text-muted-foreground'>urke.mafia@gmail.com</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='bg-primary/10 p-3 rounded-full'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='text-lg font-medium'>Location</h3>
									<p className='text-muted-foreground'>Tech Hub, Innovation Street, Digital City</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='bg-primary/10 p-3 rounded-full'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='text-lg font-medium'>Business Hours</h3>
									<p className='text-muted-foreground'>Monday - Friday: 9AM - 5PM</p>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<Card>
							<CardHeader>
								<CardTitle>Send us a message</CardTitle>
								<CardDescription>
									Fill out the form below and we'll get back to you as soon as possible.
								</CardDescription>
							</CardHeader>
							<CardContent>
								{isSubmitted ? (
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										className='flex flex-col items-center justify-center py-8 text-center'
									>
										<CheckCircle className='h-16 w-16 text-green-500 mb-4' />
										<h3 className='text-2xl font-semibold mb-2'>Message Sent!</h3>
										<p className='text-muted-foreground mb-4'>
											Thank you for reaching out. We'll be in touch soon.
										</p>
										<Button onClick={() => setIsSubmitted(false)} variant='outline'>
											Send another message
										</Button>
									</motion.div>
								) : (
									<Form {...form}>
										<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
											<FormField
												control={form.control}
												name='name'
												render={({ field }) => (
													<FormItem>
														<FormLabel>Name</FormLabel>
														<FormControl>
															<Input placeholder='Your name' {...field} />
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name='email'
												render={({ field }) => (
													<FormItem>
														<FormLabel>Email</FormLabel>
														<FormControl>
															<Input
																placeholder='your.email@example.com'
																type='email'
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<FormField
												control={form.control}
												name='message'
												render={({ field }) => (
													<FormItem>
														<FormLabel>Message</FormLabel>
														<FormControl>
															<Textarea
																placeholder='How can we help you?'
																className='min-h-[120px]'
																{...field}
															/>
														</FormControl>
														<FormMessage />
													</FormItem>
												)}
											/>
											<CardFooter className='px-0 pt-4'>
												<Button type='submit' className='w-full' disabled={isSubmitting}>
													{isSubmitting ? (
														<>
															<svg
																className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
																xmlns='http://www.w3.org/2000/svg'
																fill='none'
																viewBox='0 0 24 24'
															>
																<circle
																	className='opacity-25'
																	cx='12'
																	cy='12'
																	r='10'
																	stroke='currentColor'
																	strokeWidth='4'
																></circle>
																<path
																	className='opacity-75'
																	fill='currentColor'
																	d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
																></path>
															</svg>
															Sending...
														</>
													) : (
														<>
															<Send className='mr-2 h-4 w-4' />
															Send Message
														</>
													)}
												</Button>
											</CardFooter>
										</form>
									</Form>
								)}
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
