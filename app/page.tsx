"use client"

import { Parallax } from "react-scroll-parallax";
import ArrowDown from "./arrowDown";
import ArrowAcross from "./arrowAcross";
import { animated, useScroll } from "react-spring";

export default function Page() {
	const { scrollYProgress } = useScroll();
	return (
		<main className="min-h-screen bg-black relative">
			<div className="h-screen border-2 border-blue">
				<div className="w-40 h-[calc(100vh-25rem)] bg-white relative left-12 mt-24" />
				<div className="w-40 h-40 bg-white relative left-12 rounded-full -mt-20" />
				<div className="w-[calc(100vw-25rem)] h-40 bg-white relative left-32 -mt-40" />
				<div className="w-40 h-40 bg-white relative left-[calc(100vw-22rem)] rounded-full -mt-40" />
				<ArrowDown />
				<ArrowAcross />
			</div>
			<div className="min-h-screen relative">
				{/* <animated.div
					className="relative w-60 h-60 bg-white rounded-full top-[35vh] left-[calc(100vw-24.5rem)]"
					style={{
						opacity: scrollYProgress.to((y) => {
							if (y > 0.75) {
								return 1;
							} else if (y > 0.7) {
								return (y - 0.7) / 0.05;
							} else {
								return 0;
							}
						}),
					}}
				></animated.div> */}
			</div>

			{/* <Test /> */}
		</main>
	);
}
