import Logo from '../../../public/assets/airbnb.svg'
export default function Navbar() {
    return(
        <nav>
            <img className='logo' src={Logo} alt="" />
        </nav>
    )
}