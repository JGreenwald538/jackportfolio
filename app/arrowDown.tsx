import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useScroll } from "react-spring";



export default function MyComponent() {
	const { scrollYProgress } = useScroll( );
	return (
		<div className="relative left-[calc(100vw-22rem)] -mt-20 w-fit">
			<animated.div
				className="bg-white w-40"
				style={{
					height: scrollYProgress.to((y) => {
						return Math.min(y * 2000 + 100, 1100);
					}),
				}}
			></animated.div>
			<animated.div className="w-40 h-40 bg-white relative rounded-full -mt-20" style={{
					display: scrollYProgress.to((y) => {
						if (y > 0.7) {
							return "block";
						} else {
							return "none";
						}
					})
				}} />
			<animated.div
				className="w-0 h-0 
              border-l-[7.5rem] border-l-transparent
              border-t-[7.5rem] border-t-white
              border-r-[7.5rem] border-r-transparent -ml-[2.5rem] relative"
				style={{
					rotate: scrollYProgress.to((y) => {
						if (y > 0.6) {
							return 90;
						} else if (y > 0.55) {
							return (y - 0.55) * 90;
						} else {
							return 0;
						}
					}),
					opacity: scrollYProgress.to((y) => {
						if (y > 0.55) {
							return 0;
						} else if (y > 0.5) {
							return (y - 0.5) / 0.05;
						} else {
							return 1;
						}
					}),
					display: scrollYProgress.to((y) => {
						if (y > 0.6) {
							return "none";
						} else {
							return "block";
						}
					})
				}}
			/>
		</div>
	);
}
