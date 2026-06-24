'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Greetings = () => {
	return (
		<section className="relative overflow-hidden bg-[#fff8dc] px-4 py-16 sm:px-6 lg:px-8">
			{/* Soft background */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fde047_0%,transparent_34%),radial-gradient(circle_at_bottom_right,#f59e0b_0%,transparent_32%)] opacity-35" />
			<div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-300/25 blur-3xl" />

			{/* Decorative circles */}
			<motion.div
				animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
				transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute left-8 top-16 h-20 w-20 rounded-full border border-yellow-400/40 bg-white/30"
			/>

			<motion.div
				animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
				transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
				className="absolute bottom-20 right-10 h-28 w-28 rounded-full bg-amber-300/30 blur-sm"
			/>

			<div className="relative mx-auto max-w-7xl">
				<div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
					{/* Text side */}
					<motion.div
						initial={{ opacity: 0, x: -32 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.65 }}
						className="text-center lg:text-left"
					>
						<div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-white/60 px-4 py-2 text-sm font-bold text-yellow-800 shadow-sm backdrop-blur">
							<span className="h-2 w-2 rounded-full bg-yellow-500" />
							Шар багийн мэндчилгээ
						</div>

						<h2 className="mt-6 text-4xl font-black tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
							Шар багаас
							<span className="block bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
								мэндчилж байна
							</span>
						</h2>

						<p className="mx-auto mt-6 max-w-xl text-base leading-8 text-zinc-700 sm:text-lg lg:mx-0">
							Бидний 14 гишүүн хамт олондоо халуун дулаан мэндчилгээ
							дэвшүүлж, нэг багийн эрч хүч, эерэг уур амьсгалыг түгээж
							байна.
						</p>

						<div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
							<motion.div
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.98 }}
								className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-yellow-900/15"
							>
								Happy Bees · Нэг зорилго 
							</motion.div>

							<div className="rounded-full border border-yellow-400/40 bg-white/60 px-6 py-3 text-sm font-bold text-yellow-900 backdrop-blur">
								14 гишүүний хамтын мэндчилгээ
							</div>
						</div>
					</motion.div>
					{/* Image side */}
					<motion.div
						initial={{ opacity: 0, y: 34, scale: 0.96 }}
						whileInView={{ opacity: 1, y: 0, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.75, delay: 0.1 }}
						className="relative"
					>
						<div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-yellow-300/60 via-white/40 to-amber-400/60 blur-2xl" />

						<motion.div
							animate={{ y: [0, -8, 0] }}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
							className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 p-2 shadow-2xl shadow-yellow-900/20 backdrop-blur-xl"
						>
							<img
								src="/yellow-team.png"
								alt="Шар багаас мэндчилж байна"
								className="h-auto w-full rounded-[1.55rem] object-cover"
							/>
						</motion.div>

						{/* Floating badges */}
						<motion.div
							initial={{ opacity: 0, y: 14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.45 }}
							className="absolute -bottom-5 left-4 rounded-2xl border border-yellow-300 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:left-8"
						>
							<p className="text-xs font-semibold text-zinc-500">
								Team Greeting
							</p>
							<p className="text-sm font-black text-yellow-800">
								Эерэг хандлага түгээе
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: -14 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.55 }}
							className="absolute -right-2 top-6 hidden rounded-2xl border border-amber-300 bg-yellow-100/90 px-4 py-3 shadow-xl backdrop-blur sm:block"
						>
							<p className="text-sm font-black text-amber-900">
								☀ Шар баг
							</p>
						</motion.div>
					</motion.div>
				</div>

				{/* Bottom message */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-14 max-w-5xl rounded-[2rem] border border-yellow-300/60 bg-white/55 px-6 py-7 text-center shadow-xl shadow-yellow-900/10 backdrop-blur"
				>
					<p className="text-lg font-bold leading-8 text-zinc-900 sm:text-2xl">
						“2026 оны Язгуур удирдлагын явган аялалд явж байгаа таньд Шар багын зүгээс мэндчилж байна.”
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default Greetings;