import { Fav, SearchIcon, Shopping } from "../../icons/icon";
import style from "./search&login.module.css"
const SearchLogin = () => {
  return (
    <div className={style.box}>
      <div id="logo">
        <img src="../../../public/img/logo.png" alt="image" />
      </div>
      <div id="search" className={style.searchBox}>
          <div className={style.icon}><SearchIcon  /></div>
          <input className={style.search} placeholder="دنبال چی میگردی!!!"/>
      </div>
      <div id="loginAndShopping" className={style.logBox}>
        <div>
          <button className={style.fav}><Fav/></button>
          <button className={style.shopping}><Shopping/></button>
        </div>
        <div className={style.login}>ورود و عضویت</div>
      </div>
    </div>
  );
};

export default SearchLogin;
