import "./Layout.css"
import { Logo } from '../../index'

const Layout = () =>{
    return(
        <div className="layout">
            
            <img src={Logo} alt="" />
            <a href="tral">PORTFOLIO</a>
            <a href="trial2">ABOUT ME</a>
            <a href="trial3">CONTACT</a>
        </div>    
    )
}

export default Layout;