import { useState } from 'react';

const Navbar = () => {
	const navLinkStyle = 'hover:text-theme-purple px-2.5 py-1 rounded-md';
	const hamburgerLinkStyle = 'hover:bg-violet-100 inline-block w-full rounded-sm px-2 pt-1 pb-0.5';
	const [isMenuOpen, setIsMenuOpen] = useState(true);
	const [isOverlayDisplayed, setIsOverlayDisplayed] = useState(true);
	const [isMenuDisplayed, setIsMenuDisplayed] = useState(true);
	const [isMenuInPosition, setIsMenuInPosition] = useState(true);

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
				<li>
					<a href="/#about" className={hamburgerLinkStyle} onClick={toggleHamMenu}>
						Home
					</a>
				</li>
				<li>
					<a href="/#skills" className={hamburgerLinkStyle} onClick={toggleHamMenu}>
						Skills
					</a>
				</li>
				<li>
					<a href="/#projects" className={hamburgerLinkStyle} onClick={toggleHamMenu}>
						Projects
					</a>
				</li>
				<li>
					<a href="/#contact-me" className={hamburgerLinkStyle} onClick={toggleHamMenu}>
						Contact Me
					</a>
				</li>
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
						<li className={navLinkStyle}>
							<a href="/#about">Home</a>
						</li>
						<li className={navLinkStyle}>
							<a href="/#skills">Skills</a>
						</li>
						<li className={navLinkStyle}>
							<a href="/#projects">Projects</a>
						</li>
						<li className={navLinkStyle}>
							<a href="/#contact-me">Contact Me</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
