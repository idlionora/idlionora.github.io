import Navbar from './components/Navbar';
import ProfileTitle from './assets/ProfileTitle';
import './App.css'


function App() {
  return (
		<>
			<Navbar />
			<main className='pt-14'>
				<section id="about" className='w-full h-96 bg-pink-300 text-blue-400'>
					<ProfileTitle width="100%"/>
				</section>
				<section id="skills" className='w-full h-96 bg-blue-200'></section>
				<section id="projects" className='w-full h-96 bg-yellow-100'></section>
				<section id="contact-me" className='w-full h-96 bg-theme-purple opacity-30'></section>
			</main>
		</>
  );
}

export default App
