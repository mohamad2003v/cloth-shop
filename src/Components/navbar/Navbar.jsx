import { DropDown } from "../../icons/icon"
import SubMenu from "../subMenu/SubMenu"
import style from "./navbar.module.css"
const Navbar = () => {
  return (
    <div>
      <ul>
        <li className={style.first}>زنانه<DropDown/></li>
        <div className={style.modal}>
          <SubMenu />
        </div>
        <li>وبلاگ</li>
        <li>درباره ما</li>
        <li>تماس با ما</li>
        <li>ضمانت مرجوعی</li>
      </ul>
    </div>
  )
}

export default Navbar