import Navbar from './components/Navbar';
import { DesignCampDesc, MyMiniBlogDesc } from './components/ProjectDataFragments';
import ProjectCard from './components/ProjectCard';
import ProfileTitle from './assets/ProfileTitle';
import imgProfile from './assets/img-profile.png';
import imgAbout from './assets/img-about.png';
import logoHtml from './assets/logo-html5.png';
import logoCss from './assets/logo-css3.png';
import logoJs from './assets/logo-javascript.png';
import logoTs from './assets/logo-typescript.png';
import logoJquery from './assets/logo-jquery.png';
import logoSass from './assets/logo-sass.png';
import logoBootstrap from './assets/logo-bootstrap.png';
import logoReact from './assets/logo-react.png';
import logoRedux from './assets/logo-redux.png';
import logoZustand from './assets/logo-zustand.png';
import logoMui from './assets/logo-mui.png';
import logoTailwind from './assets/logo-tailwind.png';
import logoLinkedin from './assets/logo-linkedin.png';
import logoGithub from './assets/logo-github.png';
import imgSupersewa from './assets/project-supersewa.png'
import imgDesignCamp from './assets/project-designcamp.png';
import imgMyMiniBlog from './assets/project-myminiblog.png';
import imgAnibox from './assets/project-anibox.png';
import './App.css';

const projectDatas = [
	{
		id: 1,
		pic: imgSupersewa,
		title: 'Supersewa Laundry',
		desc: "Supersewa Laundry is a web application where business owners or admins can manage customer orders, specifically for baby equipment's laundry package. This application is intended to be an addition for Supersewa's main service, that is providing management app for baby equipment rental business. The pages available for viewing here are mock design consisted of page to view all the customer orders, page to input new order, page of order detail where user can edit order's data, and page for public viewing where customer can see their current laundry status.",
		techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Radix UI', 'Zustand'],
		liveUrl: 'https://supersewa-laundry.vercel.app/orders',
		sourceUrl: 'https://github.com/idlionora/supersewa-laundry',
	},
	{
		id: 2,
		pic: imgDesignCamp,
		title: 'DesignCamp',
		desc: <DesignCampDesc />,
		techStack: ['React', 'Tailwind CSS', 'Material UI', 'Swiper'],
		liveUrl: 'https://designcamp-noraslice.vercel.app/',
		sourceUrl: 'https://github.com/idlionora/designcamp-landing',
	},
	{
		id: 3,
		pic: imgMyMiniBlog,
		title: 'myMiniBlog',
		desc: <MyMiniBlogDesc />,
		techStack: ['React', 'Tailwind CSS', 'TinyMCE'],
		liveUrl: 'https://noras-miniblog.vercel.app/',
		sourceUrl: 'https://github.com/idlionora/my-mini-blog',
	},
	{
		id: 4,
		pic: imgAnibox,
		title: 'AniBox',
		desc: "AniBox is anime catalogue website where user can see anime titles and preview categorized by trend in home page, search by title, and read extended information in each of detail pages. This project is community exercise to fetch data from custom API, display the result in page layout, and handle error if the data fetched isn't available. Live searching is applied to form input in search page so the result will be displayed while we are actively typing. In the detail page, we have general information, synopsis, trailer, and streaming links available.",
		techStack: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Flowbite', 'Axios'],
		liveUrl: 'https://noras-animesite.vercel.app/',
		sourceUrl: 'https://github.com/idlionora/anibox-exercise',
	},
];

function App() {
	const skillLogos = [{pic: logoHtml, label: 'HTML'}, {pic: logoCss, label: 'CSS'}, {pic: logoJs, label: 'JavaScript'}, {pic: logoTs, label: 'TypeScript'}, {pic: logoJquery, label: 'jQuery'}, {pic: logoSass, label: 'Sass'}, {pic: logoBootstrap, label: 'Bootstrap'}, {pic: logoReact, label: 'React'}, {pic: logoRedux, label:'Redux'}, {pic: logoZustand, label:'Zustand'}, {pic: logoMui, label: 'Material-UI'}, {pic: logoTailwind, label:'Tailwind CSS'}]
	
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
							<div className="absolute w-11/12 pt-[73.333%] rounded-[2.4rem] mr-[4.1667%] sm:w-[45.8333%] sm:pt-[36.6667%] sm:mr-[2.0833%] sm:mt-16 lg:mt-20 rotate-12">
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
							<div className="w-11/12 pt-[73.333%] rounded-[2.4rem] mr-[4.1667%] sm:w-[45.8333%] sm:pt-[36.6667%] sm:mr-[2.0833%] sm:mt-16 lg:mt-20 relative rotate-12 overflow-hidden">
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
					<div id="skill-container" className="w-full max-w-5xl pt-12 pb-16 text-center">
						<h2>Current Skills</h2>
						<ul className="w-full flex flex-wrap gap-5 mt-4 justify-center">
							{skillLogos.map(({ pic, label }, index) => {
								return (
									<li
										key={'logo-' + index}
										className="flex flex-col items-center justify-end w-full max-w-[5rem] min-[940px]:max-w-[5.2rem]"
									>
										<div className="h-full max-h-[70px] max-w-[65px] min-[940px]:max-h-[75px] min-[940px]:max-w-[70px]">
											<img
												src={pic}
												alt=""
												className="object-scale-down object-center h-full"
											/>
										</div>
										<div className="flex justify-center">
											<p className="text-base font-medium mt-1 max-h-[1.75rem]">
												{label}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
				<section id="projects" className="w-full flex justify-center px-4 md:px-6">
					<div id="projects-container" className="w-full max-w-5xl py-12 text-center">
						<h2>Projects</h2>
						<div
							id="projectcards-container"
							className="w-full flex flex-col gap-8 px-2 mt-6"
						>
							{projectDatas.map(
								({ id, pic, title, desc, techStack, liveUrl, sourceUrl }) => {
									return (
										<ProjectCard
											key={'projectcard-' + id}
											id={id}
											pic={pic}
											title={title}
											desc={desc}
											techStack={techStack}
											liveUrl={liveUrl}
											sourceUrl={sourceUrl}
										/>
									);
								}
							)}
						</div>
					</div>
				</section>
				<section id="contact-me" className="w-full flex justify-center px-4 md:px-6">
					<div
						id="contactme-container"
						className="w-full max-w-5xl pt-6 pb-16 text-center text-xl sm:text-lg md:text-xl"
					>
						<h2>Contact Me</h2>
						<p className="mt-3">Would you like to work with me?</p>
						<p>Let&apos;s get in touch!</p>
						<div className="w-full mt-4 flex flex-col items-center gap-3 text-xl sm:text-[1.2rem] lg:text-xl font-semibold sm:font-medium lg:font-semibold">
							<a
								href="mailto:idlionora@gmail.com"
								className="block w-[18.65rem] sm:w-[17.7rem] lg:w-[18.65rem] py-2 sm:py-1.5 lg:py-2 ease-in-out duration-200 border-solid border-2 border-theme-cyan rounded-md text-theme-cyan hover:bg-theme-cyan hover:text-white"
							>
								email: idlionora@gmail.com
							</a>
							<a
								href="tel:+62-813-9547-6613"
								className="block w-[18.65rem] sm:w-[17.7rem] lg:w-[18.65rem] py-2 sm:py-1.5 lg:py-2 ease-in-out duration-200 border-solid border-2 border-theme-cyan rounded-md text-theme-cyan hover:bg-theme-cyan hover:text-white"
							>
								phone: +62-813-9547-6613
							</a>
						</div>
					</div>
				</section>
				<footer className="w-full h-32 bg-zinc-900 flex justify-center px-4 md:px-6">
					<div className="w-full max-w-6xl h-full flex justify-between items-center text-white pt-1">
						<div className="w-4/5">
							<p className="font-light text-zinc-50">
								© 2023, built by Nurul&nbsp;Azizah.
							</p>
						</div>
						<div className="flex items-center w-1/5 justify-end">
							<div className="flex items-center w-[3.8rem] justify-between">
								<a
									href="https://github.com/idlionora/"
									className="shrink-0 w-7 opacity-95 hover:opacity-100 flex justify-center"
								>
									<img
										src={logoGithub}
										alt="GitHub"
										className="w-5 hover:w-7 ease-in-out duration-100"
									/>
								</a>
								<a
									href="https://www.linkedin.com/in/idlionora/"
									className="shrink-0 w-7 opacity-95 hover:opacity-100 flex justify-center"
								>
									<img
										src={logoLinkedin}
										alt="LinkedIn"
										className="w-5 hover:w-7 ease-in-out duration-100"
									/>
								</a>
							</div>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}

export default App;
