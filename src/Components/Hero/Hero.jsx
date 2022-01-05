import './Hero.css';
import RasmPasm from '../../Assets/Images/banner-1.jpg';

import RasmPasm2 from '../../Assets/Images/banner-2.jpg';


function Header() {
    return (
        <section className="banner-container">
        
        <div className="banner">
        <img src={RasmPasm} alt='Artjon'/>
        <div className="content">
        <h3>special offer</h3>
        <p>upto 45% off</p>
        <a href="#" className="btn">check out</a>
        </div>
        </div>
        
        <div className="banner">
        <img src={RasmPasm2} alt="banner2"/>
        <div className="content">
        <h3>limited offer</h3>
        <p>upto 50% off</p>
        <a href="#" className="btn">check out</a>
        </div>
        </div>
        
        </section>
        );
    }
    
    export default Header;
    