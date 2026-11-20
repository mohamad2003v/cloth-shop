import style from "./header.module.css"
import SearchLogin from '../Components/search&login/SearchLogin'
import Navbar from "../Components/navbar/Navbar"

const Header = () => {
  return (
    <div className={style.header}>
        <SearchLogin/>
        <Navbar/>
    </div>
  )
}

export default Header