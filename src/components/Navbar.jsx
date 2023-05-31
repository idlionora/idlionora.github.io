import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
	const navLinks = [{for: 'Home', to: 'about'}, {for: 'Skills', to:'skills'}, {for: 'Projects', to: 'projects'}, {for: 'Contact Me', to: 'contact-me'}]
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(false);
	const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);
	const [isMenuInPosition, setIsMenuInPosition] = useState(false);

	const toggleHamMenu = () => {
		if (!isMenuOpen) {
			setIsMenuDisplayed(true);
			setIsOverlayDisplayed(true);
			setTimeout(() => {
				setIsMenuInPosition(true);
			}, 10);
		} else {
			setIsMenuInPosition(false);
			setTimeout(() => {
				setIsOverlayDisplayed(false);
			}, 310);
			setTimeout(() => {
				setIsMenuDisplayed(false);
			}, 410);
		}
		setIsMenuOpen(!isMenuOpen)
	}
		
	return (
		<>
			<div
				id="menu-overlay"
				className={`${
					isOverlayDisplayed ? '' : 'hidden'
				} z-[48] w-full h-full bg-black fixed ease-in-out duration-300 ${
					isMenuInPosition ? 'opacity-60' : 'opacity-0'
				}`}
				onClick={toggleHamMenu}
			/>
			<ul
				id="hamburger-menu"
				className={`${
					isMenuDisplayed ? '' : 'hidden'
				} fixed z-[49] bg-white w-full top-14 px-3 flex flex-col gap-0.5 pt-3 pb-2.5 font-semibold text-lg text-center ease-in-out duration-[400ms] ${
					isMenuInPosition ? '' : 'translate-y-[-100%]'
				}`}
			>
				{navLinks.map((link, index) => { return (
					<li key={'hamburger-' + index} className='hamburger-item'>
						<Link
							to={link.to}
							spy={true}
							smooth={true}
							offset={-80}
							duration={500}
							className="hover:bg-violet-100 inline-block w-full rounded-sm px-2 pt-1 pb-0.5" onClick={toggleHamMenu}
						>{link.for}</Link>
					</li>)
				})}
			</ul>
			<nav className=" bg-white flex z-50 justify-center w-full h-14 px-4 md:px-6 fixed shadow-md">
				<div
					id="nav-container"
					className="flex justify-between w-full max-w-6xl h-full items-center"
				>
					<div
						id="hamburger-button"
						className={`w-6 h-6 absolute right-6 cursor-pointer ease-in-out duration-500 sm:hidden`}
						onClick={toggleHamMenu}
					>
						<span
							className={`w-6 h-[2px] bg-black absolute ease-in-out duration-200 translate-y-[-50%] ${
								isMenuOpen ? 'top-1/2 rotate-[-135deg]' : 'top-[20%]'
							}`}
						></span>
						<span
							className={`w-6 h-[2px] bg-black absolute top-1/2 translate-y-[-50%] transition-all ease-in-out duration-[160ms] ${
								isMenuOpen ? 'opacity-0' : ''
							}`}
						></span>
						<span
							className={`w-6 h-[2px] bg-black absolute ease-in-out duration-200 translate-y-[-50%] ${
								isMenuOpen ? 'top-1/2 rotate-[135deg]' : 'top-[80%]'
							}`}
						></span>
					</div>
					<p className="font-bold text-2xl text-theme-purple">@idlionora</p>
					<ul className="hidden sm:flex items-center gap-2 font-semibold">
						{navLinks.map((link, index) => {
							return (
								<li key={'nav-' + index} className="nav-item">
									<Link
										to={link.to}
										spy={true}
										smooth={true}
										offset={-80}
										duration={500}
										className="inline-block hover:text-theme-purple px-2.5 py-1 rounded-md cursor-pointer"
									>
										{link.for}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
