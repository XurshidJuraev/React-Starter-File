import './Nav.css';

function Nav() {
	return (
		<ul className='header__list'>
			<li className='header__item'>
				<a className='header__link' href='#link'>
					Xizmatlar
				</a>
			</li>

			<li className='header__item'>
				<a className='header__link' href='#link'>
					Dorilar
				</a>
			</li>

			<li className='header__item'>
				<a className='header__link' href='#link'>
					Asal
				</a>
			</li>

			<li className='header__item'>
				<a className='header__link' href='#link'>
					Kontaktlar
				</a>
			</li>

			<li className='header__item'>
				<a className='header__link' href='#link'>
					Blog
				</a>
			</li>
		</ul>
	);
}

export default Nav;
