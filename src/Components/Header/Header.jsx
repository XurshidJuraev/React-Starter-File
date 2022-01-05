import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
	return (
		<header>

			<div className="header-1">

				<a href="#" className="logo"><i className="fas fa-shopping-basket"></i>groco</a>

				{/* <form className="search-box-container">
					<input type="search" id="search-box" placeholder="Maxsulotlar qidirish">
					<label for="search-box" className="fas fa-search"></label>
				</form> */}

			</div>

			<div className="header-2">

				<div id="menu-bar" className="fas fa-bars"></div>

				<nav className="navbar">
					<a href="#home">Bosh sahifa</a>
					<a href="#category">Katigoriyalar</a>
					<a href="#product">Maxsulotlar</a>
					<a href="#deal">Chegirmalar</a>
					<a href="#contact">Aloqa</a>
				</nav>

				<div className="icons">
					<a href="#" className="fas fa-shopping-cart"></a>
					<a href="#" className="fas fa-heart"></a>
					<a href="#" className="fas fa-user-circle"></a>
				</div>

			</div>

		</header>
	);
}

export default Header;
