import React from "react"
import { motion } from "framer-motion"

const LocationSection = () => {
	return (
		<section
			className="relative bg-gray-900 py-24 px-6 sm:px-8 overflow-hidden"
			id="location"
		>
			{/* Background shapes for dynamic effect */}
			<div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-3xl animate-float1"></div>
				<div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl animate-float2"></div>
			</div>

			<div className="relative max-w-6xl mx-auto text-center">
				<motion.h2
					className="text-base font-semibold text-blue-400 tracking-wider mb-2"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					VISIT US
				</motion.h2>
				<motion.h1
					className="text-4xl sm:text-5xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
					viewport={{ once: true }}
				>
					Our Location
				</motion.h1>
				<motion.p
					className="mx-auto mt-4 max-w-xl text-lg text-gray-300"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					viewport={{ once: true }}
				>
					Drop by and let us craft your perfect look. We’re in the heart of the
					city, ready to welcome you!
				</motion.p>

				{/* Address + Map container with animations */}
				<div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
					{/* Address Box */}
					<motion.div
						className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-xl p-8 shadow-2xl flex flex-col justify-center items-center text-gray-300 transition-transform duration-500 hover:scale-105 overflow-hidden"
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						viewport={{ once: true }}
					>
						{/* Animated glow behind the box */}
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl blur-xl opacity-40 animate-pulse"></div>

						<div className="relative z-10 flex flex-col items-center text-center">
							<h3 className="text-white font-bold text-2xl mb-2">
								Barbershop HQ
							</h3>
							<p>500 N Bell Ave #109</p>
							<p>Denton, TX 76209</p>
							<p>Unites States</p>
							<p className="mt-2">Phone: +1 940-612-9127</p>
						</div>
					</motion.div>

					{/* Map Embed */}
					<motion.div
						className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-blue-500 hover:shadow-blue-500/50 transition-shadow duration-500"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8, duration: 0.8 }}
						viewport={{ once: true }}
					>
						{/* Animated glow border effect */}
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-500 rounded-xl blur-xl opacity-30"></div>
						<iframe
							title="Google Map Location"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1891912969316!2d-122.41941538468282!3d37.77492927975919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8c77b1b5%3A0x2a09754ac4f0f59c!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sus!4v1616954628174!5m2!1sen!2sus"
							className="relative w-full h-96 rounded-xl"
							allowFullScreen=""
							loading="lazy"
						></iframe>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default LocationSection
