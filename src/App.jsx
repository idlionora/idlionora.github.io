import Navbar from './components/Navbar';
import ProfileTitle from './assets/ProfileTitle';
import imgProfile from './assets/img-profile.png';
import './App.css';

function App() {
	return (
		<>
			<Navbar />
			<main className="pt-14 w-full overflow-x-hidden ">
				<section id="about" className="w-full flex flex-col items-center px-4 md:px-6">
					<div id="banner-container" className=" w-full max-w-6xl relative">
						<div
							id="bannertext-container"
							className="flex flex-col items-center text-center mt-20 mb-14 sm:text-left sm:my-0 sm:w-1/2 sm:absolute sm:top-1/2 sm:translate-y-[-50%] z-[5] "
						>
							<h1 className="w-full text-5xl sm:text-4xl md:text-5xl lg:text-6xl">
								Hi, I&apos;m&nbsp;Nurul.
							</h1>
							<p className="max-w-[470px] sm:max-w-full text-xl sm:text-lg sm:font-medium md:text-xl lg:text-2xl lg:font-normal">
								I can help you build websites for business or personal&nbsp;use.
							</p>
						</div>
						<div
							id="bannerpic-container"
							className=" flex justify-end relative"
						>
							<div className="absolute w-11/12 sm:w-[45.8333%] pt-[73.333%] sm:pt-[36.6667%] rounded-[2.4rem] mr-[4.1667%] sm:mr-[2.0833%] sm:mt-16 lg:mt-20 rotate-12">
								<div className="absolute left-[-4.5%] sm:left-[-114.8%] lg:left-[-114%] top-[1.05rem] sm:top-[-0.95rem] md:top-[-0.75rem] lg:top-[-0.2rem] rotate-[-12deg] w-[109.091%] sm:w-[218.189%] h-full sm:h-[128.62%] md:h-[124.11%] lg:h-[118.94%] opacity-60 mt-[-1rem]">
									<div className="absolute w-screen right-1/2 translate-x-1/2 flex justify-center bottom-0">
										<ProfileTitle
											width="100%"
											rotate={-5}
											divClass="w-[95%] max-w-[72.3125rem]"
											stroke="#8369cf"
										/>
									</div>
								</div>
							</div>
							<div className="w-11/12 sm:w-[45.8333%] pt-[73.333%] sm:pt-[36.6667%] rounded-[2.4rem] float-right mr-[4.1667%] sm:mr-[2.0833%] sm:mt-16 lg:mt-20 relative rotate-12 overflow-hidden">
								<div className="absolute w-[113.1254%] bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 rotate-[-12deg]">
									<img
										src={imgProfile}
										alt="Profile Picture"
										className="absolute w-[120%] top-1/2 translate-y-[-50%]"
									/>
								</div>
								<div className="absolute left-[-4.5%] sm:left-[-114.8%] lg:left-[-114%] top-[1.05rem] sm:top-[-0.95rem] md:top-[-0.75rem] lg:top-[-0.2rem] rotate-[-12deg] w-[109.091%] sm:w-[218.189%] h-full sm:h-[128.62%] md:h-[124.11%] lg:h-[118.94%] opacity-60 mt-[-1rem]">
									<div className="absolute w-screen right-1/2 translate-x-1/2 flex justify-center bottom-0">
										<ProfileTitle
											width="100%"
											rotate={-5}
											divClass="w-[95%] max-w-[72.3125rem]"
											stroke="#ffffff"
											strokeWidth='1.5'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="aboutme-container" className='bg-pink-200 h-96 w-full'></div>
				</section>
				<section id="skills" className="w-full h-96 "></section>
				<section id="projects" className="w-full h-96 bg-yellow-100"></section>
				<section
					id="contact-me"
					className="w-full h-96 bg-theme-purple opacity-30"
				></section>
			</main>
		</>
	);
}

export default App;
