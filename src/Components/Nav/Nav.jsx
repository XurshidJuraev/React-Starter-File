import './Nav.css';
import RasmPasm from '../../Assets/Images/no-banner.jpg';


function Nav() {
	return (
		<section class="home" id="home">
		
		<div class="image">
		<img src={RasmPasm} alt='Artjon'/>
		</div>
		
		<div class="content">
		<span>Bizda bu</span>
		<h3>Maxsulotlar boshqalarga qaraganda ancha arzon</h3>
		<a href="#" class="btn">Ishonmasangiz sinab ko'ring</a>
		</div>
		
		</section>
		);
	}
	
	export default Nav;
	