import './Footer.css';

function Footer() {
    return (
        <section className="footer">
        
        <div className="box-container">
        
        <div className="box">
        <a href="#" className="logo"><i className="fas fa-shopping-basket"></i>groco</a>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam culpa sit enim nesciunt rerum laborum illum quam error ut alias!</p>
        <div className="share">
        <a href="#" className="btn fab fa-facebook-f"></a>
        <a href="#" className="btn fab fa-twitter"></a>
        <a href="#" className="btn fab fa-instagram"></a>
        <a href="#" className="btn fab fa-linkedin"></a>
        </div>
        </div>
        
        <div className="box">
        <h3>our location</h3>
        <div className="links">
        <a href="#">india</a>
        <a href="#">USA</a>
        <a href="#">france</a>
        <a href="#">japan</a>
        <a href="#">russia</a>
        </div>
        </div>
        
        <div className="box">
        <h3>quick links</h3>
        <div className="links">
        <a href="#">home</a>
        <a href="#">category</a>
        <a href="#">product</a>
        <a href="#">deal</a>
        <a href="#">contact</a>
        </div>
        </div>
        
        <div className="box">
        <h3>download app</h3>
        <div className="links">
        <a href="#">google play</a>
        <a href="#">window xp</a>
        <a href="#">app store</a>
        </div>
        </div>
        
        </div>
        
        </section>
        )
    }
    
    export default Footer;
    