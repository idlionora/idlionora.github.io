import PropTypes from 'prop-types';
import noImg from '../assets/image-not-available.png';
import { useState, useEffect, useRef } from 'react';

const ProjectCard = ({
	id = 99,
	pic = noImg,
	title = 'Project Title',
	desc = "Insert sufficient amount of your project's description here.",
	techStack = ['Stack 1', 'Stack 2', 'Stack 3'],
	liveUrl = 'https://idlionora.github.io/',
	sourceUrl = 'https://github.com/idlionora/idlionora.github.io',
}) => {
	const linkRef = useRef(null)
	const [linkOnHover, setLinkOnHover] = useState(false)
	const [hideElementOnHover, setHideElemetOnHover] = useState(true)

	useEffect(() => {
		if (linkOnHover) {
			setHideElemetOnHover(false);
		} else {
			setTimeout(() => {
				setHideElemetOnHover(true)
			}, 310)
		}
	}, [linkOnHover]);

	return (
		<div
			className={`w-full rounded-3xl shadow-[0_0_12px_2px_rgba(0,0,0,0.15)] flex flex-col-reverse ${
				id % 2 == 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
			} px-5 py-8 gap-4`}
		>
			<div className="w-full sm:w-[45%] text-center flex flex-col justify-center text-lg sm:text-base lg:text-lg">
				<h3 className="mt-2 mb-1 sm:my-0">{title}</h3>
				<p className="font-medium mt-2">{desc}</p>
				<ul className="font-medium text-lg sm:text-base lg:text-lg mt-5 w-full flex flex-wrap gap-x-2 gap-y-1 items-center justify-center">
					{techStack.map((tech, index) => {
						return (
							<li
								key={`tech-${id}.${index}`}
								className="font-normal text-base sm:text-sm lg:text-base px-2 py-1 bg-gray-200 rounded-md whitespace-nowrap"
							>
								{tech}
							</li>
						);
					})}
				</ul>
				<div
					className={`w-full flex gap-3 justify-center mt-4 ${
						id % 2 == 0 ? 'flex-row-reverse' : 'flex-row-reverse sm:flex-row'
					}`}
				>
					<a
						href={liveUrl}
						target="_blank"
						rel="noopener noreferrer"
						ref={linkRef}
						className={`flex items-center px-3.5 h-[46px] sm:px-3 sm:h-[40px] lg:px-3.5 lg:h-[46px] rounded-md font-bold sm:font-semibold lg:font-bold ease-in-out duration-300 border-solid border-2 border-theme-cyan hover:bg-theme-cyan hover:text-white active:bg-theme-cyan active:text-white ${
							linkOnHover ? 'bg-theme-cyan text-white' : 'text-theme-cyan'
						}`}
						onMouseEnter={() => setLinkOnHover(true)}
						onMouseLeave={() => setLinkOnHover(false)}
					>
						See Live
					</a>
					<a
						href={sourceUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center px-3.5 h-[46px] sm:px-3 sm:h-[40px] lg:px-3.5 lg:h-[46px] rounded-md font-semibold ease-in-out duration-200 border-solid border-2 border-transparent hover:border-gray-600"
					>
						Source Code
					</a>
				</div>
			</div>
			<div className="w-full sm:w-[55%] flex flex-col justify-center">
				<div
					className="relative w-full pt-[66.6667%] rounded-2xl overflow-hidden active:bg-theme-cyan cursor-pointer"
					onMouseEnter={() => setLinkOnHover(true)}
					onMouseLeave={() => setLinkOnHover(false)}
					onClick={() => linkRef.current.click()}
				>
					<div
						id="link-hover-circle"
						className={`w-[120.185%] pt-[120.185%] absolute bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 origin-center rotate-[33.2deg] ${hideElementOnHover? 'opacity-0':''}`}
					>
						<div className="w-full h-1/2 absolute top-0 overflow-hidden">
							<div
								className={`rounded-full h-[200%] w-full absolute top-0 half-circle-cyan ease-in-out duration-300 origin-center ${
									linkOnHover ? 'rotate-180' : ''
								}`}
							></div>
						</div>
						<div className="w-full h-1/2 absolute top-1/2 overflow-hidden">
							<div
								className={`rounded-full h-[200%] w-full absolute bottom-0 half-circle-cyan ease-in-out duration-300 origin-center ${
									linkOnHover ? '' : '-rotate-180'
								}`}
							></div>
						</div>
					</div>
					<div className="absolute projectpic-size bottom-1/2 translate-y-1/2 right-1/2 translate-x-1/2 rounded-xl overflow-hidden border-solid border-[1px] border-theme-cyan">
						<img
							src={pic}
							alt={`${title} Preview`}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
ProjectCard.propTypes = {
	id: PropTypes.number,
	pic: PropTypes.string,
	title: PropTypes.string,
	desc: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
    techStack: PropTypes.arrayOf(PropTypes.string),
	liveUrl: PropTypes.string,
	sourceUrl: PropTypes.string,
};

export default ProjectCard;
