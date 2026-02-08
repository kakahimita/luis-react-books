import logo from '../../images/logo.svg'
import '../logo/estilo.css'

function Logo() {
    return (
        <div className="logo">
            <img
                src={logo}
                alt='logo' className='logo-img'>
            </img>
            <p>Luis <strong>React</strong>Book</p>
        </div>
    );
}

export default Logo;