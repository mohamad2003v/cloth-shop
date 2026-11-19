import style from "./subMenu.module.css";
import SubMenuSec from "../sunMenuSection/SubMenuSec";
import { subMenuData } from "./data";

const SubMenu = () => {
  const data = subMenuData;
  return (
    <div className={style.div}>
      <div className={style.div2}>
        {data.slice(0, 5).map((item, key) => {
          return (
            <SubMenuSec key={key} title={item.title} subTitle={item.data} />
          );
        })}
      </div>
      <div className={style.div2}>
        {data.slice(5, 10).map((item, key) => {
          return (
            <SubMenuSec key={key} title={item.title} subTitle={item.data} />
          );
        })}
      </div>
      <div className={style.div2}>
        {data.slice(10, 14).map((item, key) => {
          return (
            <SubMenuSec key={key} title={item.title} subTitle={item.data} />
          );
        })}
      </div>
      <div className={style.div2}>
        {data.slice(14, 18).map((item, key) => {
          return (
            <SubMenuSec key={key} title={item.title} subTitle={item.data} />
          );
        })}
      </div>
    </div>
  );
};

export default SubMenu;
