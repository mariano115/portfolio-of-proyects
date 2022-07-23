import "./Layout.css"
import { Logo } from '../../index'

const Layout = () =>{
    return(
        <div className="layout">
            
            <img src={Logo} alt="" />
            <a href="">PORTFOLIO</a>
            <a href="">ABOUT ME</a>
            <a href="">CONTACT</a>
        </div>    
    )
}

export default Layout;