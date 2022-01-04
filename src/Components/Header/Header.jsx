import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<a className='header__logo' href='#link'>
					<img
						className='header__logo-img'
						src='https://via.placeholder.com/50'
						alt='Logo'
						width='50'
						height='50'
					/>

					<span className='header__logo-name'>AnsorMed</span>
				</a>

				<div className='hamburger-menu'>
					<span className='hamburger-menu__line'></span>
				</div>

				<Nav />

				<a className='btn' href='#cta'>
					Qabulga yozilish
				</a>
			</div>
		</header>
	);
}

export default Header;
