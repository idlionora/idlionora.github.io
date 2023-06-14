import Navbar from './components/Navbar';
import { ProjectDesc1 } from './components/ProjectDataFragments';
import ProjectCard from './components/ProjectCard';
import ProfileTitle from './assets/ProfileTitle';
import imgProfile from './assets/img-profile.png';
import imgAbout from './assets/img-about.png';
import logoHtml from './assets/logo-html5.png';
import logoCss from './assets/logo-css3.png';
import logoJs from './assets/logo-javascript.png';
import logoJquery from './assets/logo-jquery.png';
import logoSass from './assets/logo-sass.png';
import logoBootstrap from './assets/logo-bootstrap.png';
import logoReact from './assets/logo-react.png';
import logoRedux from './assets/logo-redux.png';
import logoMui from './assets/logo-mui.png';
import logoTailwind from './assets/logo-tailwind.png'
import projectimg1 from './assets/project-designcamp.png';
import './App.css';

const projectDatas = [
	{
		id: 1,
		pic: projectimg1,
		title: 'DesignCamp',
		desc: <ProjectDesc1 />,
		techStack: ['React', 'Tailwind CSS', 'Material UI', 'Swiper'],
		liveUrl: 'https://designcamp-noraslice.vercel.app/',
		sourceUrl: 'https://github.com/idlionora/designcamp-landing',
	},
	{
		id: 2,
		pic: projectimg1,
		title: 'DesignCamp',
		desc: <ProjectDesc1 />,
		techStack: ['React', 'Tailwind CSS', 'Material UI', 'Swiper'],
		liveUrl: 'https://designcamp-noraslice.vercel.app/',
		sourceUrl: 'https://github.com/idlionora/designcamp-landing',
	},
];

function App() {
	const skillLogos = [{pic: logoHtml, label: 'HTML'}, {pic: logoCss, label: 'CSS'}, {pic: logoJs, label: 'JavaScript'}, {pic: logoJquery, label: 'jQuery'}, {pic: logoSass, label: 'Sass'}, {pic: logoBootstrap, label: 'Bootstrap'}, {pic: logoReact, label: 'React'}, {pic: logoRedux, label:'Redux'}, {pic: logoMui, label: 'Material-UI'}, {pic: logoTailwind, label:'Tailwind CSS'}]
	
	return (
		<>
			<Navbar />
			<main className="pt-14 w-full overflow-x-hidden ">
				<section id="about" className="w-full flex flex-col items-center px-4 md:px-6">
					<div id="banner-container" className="w-full max-w-5xl relative">
						<div
							id="bannertext-container"
							className="flex flex-col items-center text-center mt-20 mb-14 sm:text-left sm:my-0 sm:w-1/2 sm:absolute sm:top-1/2 sm:translate-y-[-50%] z-[5] "
						>
							<h1 className="w-full text-5xl lg:text-6xl">
								Hi, I&apos;m&nbsp;Nurul.
							</h1>
							<p className="w-full max-w-[470px] sm:max-w-full text-xl sm:text-lg sm:font-medium md:text-xl lg:font-normal">
								I can help you build websites for business or personal&nbsp;use.
							</p>
						</div>
						<div id="bannerpic-container" className=" flex justify-end relative">
							<div className="absolute w-11/12 sm:w-[45.8333%] pt-[73.333%] sm:pt-[36.6667%] rounded-[2.4rem] mr-[4.1667%] sm:mr-[2.0833%] sm:mt-16 lg:mt-20 rotate-12">
								<div className="absolute left-[-4.5%] sm:left-[-114.8%] lg:left-[-114%] top-[1.05rem] sm:top-[-0.95rem] md:top-[-0.75rem] lg:top-[-0.2rem] rotate-[-12deg] w-[109.091%] sm:w-[218.189%] h-full sm:h-[128.62%] md:h-[124.11%] lg:h-[118.94%] opacity-60 mt-[-1rem]">
									<div className="absolute w-screen right-1/2 translate-x-1/2 flex justify-center bottom-0">
										<ProfileTitle
											width="100%"
											rotate={-5}
											divClass="w-[95%] max-w-[64.2778rem]"
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
											divClass="w-[95%] max-w-[64.2778rem]"
											stroke="#ffffff"
											strokeWidth={1.5}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						id="aboutme-container"
						className=" w-full max-w-5xl grid grid-cols-12 mt-20 mb-16"
					>
						<div className="hidden sm:flex flex-col justify-center sm:col-span-5">
							<div className=" w-full pt-[125%] relative rounded-[2.4rem] overflow-hidden">
								<img
									src={imgAbout}
									alt="picture of workspace"
									className="w-full absolute bottom-1/2 translate-y-1/2"
								/>
							</div>
						</div>
						<div className="col-span-12 sm:col-span-7 sm:pl-5 md:pl-6 flex flex-col justify-center text-center sm:text-left">
							<h2>About Me</h2>
							<p className="font-medium text-lg sm:text-base lg:text-lg mt-3">
								My name is Nurul Azizah, and I am a front-end developer based in
								Bandung, Indonesia. As a developer, my expertise lies in crafting
								responsive websites/ applications through writing code in suitable
								framework and libraries. Before the current endeavor, I have
								background in architecture design, and so, it had become a practice
								for me to take good care of user experience when applying design to
								intended product. Besides that, I consider personal development as
								significant aspect in life. I will always strive to improve my skill
								and knowledge in order to deliver satisfying result.
							</p>
						</div>
					</div>
				</section>
				<section
					id="skills"
					className="w-full bg-[#f8f7fc] flex justify-center px-4 md:px-6"
				>
					<div id="skill-container" className="w-full max-w-5xl pt-12 pb-14 text-center">
						<h2>Current Skills</h2>
						<ul className="w-full grid grid-cols-[repeat(auto-fit,_minmax(75px,_1fr))] gap-5 mt-3">
							{skillLogos.map(({ pic, label }, index) => {
								return (
									<li
										key={'logo-' + index}
										className="flex flex-col items-center justify-end"
									>
										<div className="flex h-full max-h-[90px] max-w-[80px]">
											<img
												src={pic}
												alt=""
												className="object-scale-down object-center h-full"
											/>
										</div>
										<div className="flex justify-center">
											<p className="text-lg font-medium mt-1 max-h-[1.75rem]">
												{label}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
				<section
					id="projects"
					className="w-full flex justify-center px-4 md:px-6"
				>
					<div id="projects-container" className="w-full max-w-5xl py-12 text-center">
						<h2>Projects</h2>
						<div id='projectcards-container' className='w-full flex flex-col gap-8 px-2 mt-6'>
							{projectDatas.map(({id, pic, title, desc, techStack, liveUrl, sourceUrl}) => {
								return (
									<ProjectCard key={'projectcard-' + id} id={id} pic={pic} title={title} desc={desc} techStack={techStack} liveUrl={liveUrl} sourceUrl={sourceUrl}/>
								)
							})}
						</div>
					</div>
				</section>
				<section
					id="contact-me"
					className="w-full h-72 bg-[#eeeff1] flex justify-center px-4 md:px-6"
				>
					<div id="contactme-container" className="w-full max-w-5xl py-12 text-center">
						<h2>Contact Me</h2>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;
