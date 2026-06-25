'use client';

import React from 'react';
import { motion } from 'framer-motion';

const members = Array.from({ length: 14 }, (_, index) => ({
	id: index + 1,
	image: `/stickers/${index + 1}.png`,
	name: `Гишүүн ${index + 1}`,
}));

const memberLayout = [
	{ x: 50, y: 10, size: 16, rotate: -2 },
	{ x: 31, y: 15, size: 15, rotate: -9 },
	{ x: 69, y: 15, size: 15, rotate: 9 },

	{ x: 17, y: 30, size: 16, rotate: -12 },
	{ x: 83, y: 30, size: 16, rotate: 12 },

	{ x: 12, y: 49, size: 17, rotate: -10 },
	{ x: 88, y: 49, size: 17, rotate: 10 },

	{ x: 18, y: 68, size: 16, rotate: -8 },
	{ x: 82, y: 68, size: 16, rotate: 8 },

	{ x: 32, y: 82, size: 16, rotate: -6 },
	{ x: 68, y: 82, size: 16, rotate: 6 },

	{ x: 50, y: 89, size: 17, rotate: 0 },

	{ x: 25, y: 49, size: 14, rotate: 7 },
	{ x: 75, y: 49, size: 14, rotate: -7 },
];

const Greetings = () => {
	return (
		<section className="relative min-h-screen overflow-hidden bg-[#fff8dc] px-4 py-16 sm:px-6 lg:px-8">
			{/* Main background */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fde047_0%,transparent_34%),radial-gradient(circle_at_bottom_right,#f59e0b_0%,transparent_34%),linear-gradient(135deg,#fff8dc_0%,#fff7ad_45%,#fed766_100%)]" />
			<div className="absolute left-1/2 top-10 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-yellow-300/25 blur-3xl" />
			<div className="absolute -bottom-32 left-1/2 h-72 w-[120%] -translate-x-1/2 rounded-[100%] bg-gradient-to-t from-yellow-400/45 to-transparent" />

			{/* Decorative circles */}
			<motion.div
				animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
				transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute left-8 top-16 h-20 w-20 rounded-full border border-yellow-400/40 bg-white/25"
			/>

			<motion.div
				animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
				transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute bottom-20 right-10 h-28 w-28 rounded-full bg-amber-300/30 blur-sm"
			/>

			<motion.div
				animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.8, 0.45] }}
				transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute right-[12%] top-[18%] h-16 w-16 rounded-full border border-white/70 bg-white/20"
			/>

			<div className="relative mx-auto max-w-7xl">
				{/* Top badge */}


				{/* Main area - no card */}
				<div className="relative mx-auto h-[700px] sm:h-[780px] lg:h-[860px]">
					{/* Center background circles */}
					<div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-300/45 sm:h-[650px] sm:w-[650px]" />
					<div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/45 sm:h-[520px] sm:w-[520px]" />
					<div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80 bg-white/45 shadow-xl shadow-yellow-900/10 backdrop-blur-md sm:h-[380px] sm:w-[380px]" />

					{/* Center text */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.65, delay: 0.25 }}
						className="absolute left-1/2 top-1/2 z-30 w-[260px] -translate-x-1/2 -translate-y-1/2 text-center sm:w-[380px]"
					>
						<h2 className="mt-? text-4xl font-black leading-[1.05] tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl">
							Цэнгэлийн
							<span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
								манлайд хүрэх
							</span>
						</h2>

						<motion.div
  initial={{ opacity: 0, y: 12, scale: 0.92 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.35 }}
  whileHover={{ scale: 1.05, y: -2 }}
  className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-yellow-300/70 bg-gradient-to-r from-zinc-950 via-zinc-900 to-yellow-950 px-3 py-2 pr-6 text-xs font-black text-white shadow-2xl shadow-yellow-900/25 sm:text-sm"
>
  {/* Bee icon */}
  <motion.div
    animate={{ y: [0, -4, 0], rotate: [0, -6, 6, 0] }}
    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    className="relative flex h-10 w-10 items-center justify-center rounded-full bg-yellow-300 shadow-lg shadow-yellow-500/30"
  >
    {/* wings */}
    <span className="absolute -left-1 top-2 h-4 w-4 rounded-full bg-white/75 blur-[0.2px]" />
    <span className="absolute -right-1 top-2 h-4 w-4 rounded-full bg-white/75 blur-[0.2px]" />

    {/* bee body */}
    <span className="relative z-10 flex h-6 w-7 items-center justify-center overflow-hidden rounded-full bg-yellow-400">
      <span className="absolute left-2 h-full w-1 bg-zinc-900/80" />
      <span className="absolute right-2 h-full w-1 bg-zinc-900/80" />
      <span className="absolute -right-1 h-2 w-2 rotate-45 bg-zinc-900" />
    </span>
  </motion.div>

  <span className="tracking-wide">Шар баг</span>

  <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_14px_rgba(250,204,21,0.9)]" />
</motion.div>
					</motion.div>

					{/* Members around center */}
					{members.map((member, index) => {
						const layout = memberLayout[index];

						return (
							<div
								key={member.id}
								className="absolute z-20"
								style={{
									left: `${layout.x}%`,
									top: `${layout.y}%`,
									width: `clamp(82px, ${layout.size}%, 160px)`,
									transform: `translate(-50%, -50%) rotate(${layout.rotate}deg)`,
								}}
							>
								<motion.div
									initial={{ opacity: 0, scale: 0.65, y: 30 }}
									whileInView={{ opacity: 1, scale: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{
										duration: 0.55,
										delay: index * 0.045,
										ease: 'easeOut',
									}}
									animate={{
										y: [0, index % 2 === 0 ? -8 : 8, 0],
									}}
									whileHover={{ scale: 1.13 }}
									className="relative"
								>
									<div className="absolute inset-x-3 bottom-1 h-8 rounded-full bg-yellow-900/20 blur-xl" />

									<img
										src={member.image}
										alt={`Шар багийн ${member.name}`}
										className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
									/>
								</motion.div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Greetings;