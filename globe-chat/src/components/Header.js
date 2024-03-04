import { connect } from "react-redux"
import '../styleSheets/Header.css'
const Header = ({users,colors}) => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark pb-3 fixed-top" style={{backgroundColor : colors.headerColor}}>
        <div className="container-fluid px-5">
            <a className="navbar-brand" href="/" style={{color:colors.headerTextColor}}>
            <img src="./Globe.png" alt="Globe" width="30" height="24" className="d-inline-block"/>
                Globe-Chat
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <button className="nav-link btn customize" style={{border:`2px ${colors.headerColor}`,color:colors.headerTextColor}}  data-bs-toggle="modal" data-bs-target="#customModal">Customize</button>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/animesh-agrawal-6b3389191/" rel="noreferrer" target="_blank" style={{color:colors.headerTextColor}}>Meet The Creator</a>
                </li>
                <span className="nav-item dropdown">
                <li className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:colors.headerTextColor}}>
                    Active Users
                </li>
                <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdownMenuLink">
                  {users.map((user,i)=><li key={i}  className="nav-item">{user.name}</li>)}
                </ul>
                </span>
            </ul>
            </div>
        </div>
    </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        colors : state.customize
    }
}

export default connect(mapStateToProps)(Header)

