import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useScroll } from "react-spring";



export default function MyComponent() {
	const { scrollYProgress } = useScroll( );
	return (
		<div className="relative left-[] -mt-40 w-fit">
			<animated.div
				className="bg-white h-40 relative"
				style={{
					width: scrollYProgress.to((y) => {
						return 300
					}),
					left: scrollYProgress.to((y) => {
						return "calc(100vw - 35rem) !important";
					}),
					opacity: scrollYProgress.to((y) => {
						if (y > 0.75) {
							return 1;
						} else if (y > 0.7) {
							return (y - 0.7) / 0.05;
						} else {
							return 0;
						}
					})
				}}
			></animated.div>
			{/* <animated.div
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
					})
				}}
			/> */}
		</div>
	);
}
