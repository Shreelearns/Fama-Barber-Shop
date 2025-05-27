import React, { useState } from "react"
import { motion } from "framer-motion"

const GallerySection = () => {
	const images = [
		{
			id: 1,
			src: "https://www.josephguinbarber.com/uploads/1/2/4/4/124499791/josephguinhome_orig.jpg",
			alt: "Haircut Stylish",
		},
		{
			id: 2,
			src: "https://img.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_1303-20953.jpg?semt=ais_hybrid&w=740",
			alt: "Beard trimming service",
		},
		{
			id: 3,
			src: "https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?cs=srgb&dl=pexels-thgusstavo-2040189.jpg&fm=jpg",
			alt: "Classic shaving ritual",
		},
		{
			id: 4,
			src: "https://plus.unsplash.com/premium_photo-1677444491957-ab1e8b9a80fd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmFyYmVyc2hvcHxlbnwwfHwwfHx8MA%3D%3D",
			alt: "Fresh haircut vibes",
		},
		{
			id: 5,
			src: "https://i.pinimg.com/736x/08/37/74/083774ca7397fe190e76407fe78f00a6.jpg",
			alt: "Barbershop atmosphere",
		},
		{
			id: 6,
			src: "https://cdn.shopify.com/s/files/1/0001/9211/8835/files/Happy_Barber_and_Customer_Men_s_Hairstyle_480x480.png?v=1621594670",
			alt: "Modern fade haircut",
		},
	]

	const [currentIndex, setCurrentIndex] = useState(0)

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 3 >= images.length ? 0 : prevIndex + 3
		)
	}

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 3 < 0 ? images.length - 3 : prevIndex - 3
		)
	}

	const visibleImages = images.slice(currentIndex, currentIndex + 3)

	return (
		<div className="bg-gray-900 py-16 px-6 text-center text-white relative overflow-hidden" id="gallery">
            <motion.p>Our Work & Shop</motion.p>
			<motion.h2
				className="text-4xl font-bold mb-10 text-blue-400"
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				Our Barbership Gallery
			</motion.h2>

			<div className="flex justify-center gap-6 flex-wrap">
				{visibleImages.map((image, index) => (
					<motion.div
						key={image.id}
						className="relative w-[400px] rounded-xl overflow-hidden shadow-lg bg-gray-800 cursor-pointer group"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						whileHover={{ scale: 1.05 }}
					>
						<img
							src={image.src}
							alt={image.alt}
							className="w-[400px] h-[500px] object-cover transform transition-transform duration-300 group-hover:scale-110"
						/>

						{/* Overlay on hover */}
						<motion.div className="absolute inset-0 bg-black/50 flex flex-col p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<motion.h3
								className="text-lg font-bold text-white mb-1"
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.1 }}
							>
								{image.alt}
							</motion.h3>
							<motion.p
								className="text-sm text-blue-300"
								initial={{ y: 10, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.2 }}
							>
								Explore details
							</motion.p>
						</motion.div>
					</motion.div>
				))}
			</div>

			<div className="flex justify-center mt-8 gap-4">
				<button
					onClick={prevSlide}
					className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition"
				>
					Previous
				</button>
				<button
					onClick={nextSlide}
					className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 transition"
				>
					Next
				</button>
			</div>
		</div>
	)
}

export default GallerySection
