import style from "./footer.module.css"

const Cat = ({h,it1,it2,it3,it4,it5}) => {
  return (
        <div className={style.items}>
          <h5 className={style.h5}>{h}</h5>
          <p className={style.cp}>{it1}</p>
          <p className={style.cp}>{it2}</p>
          <p className={style.cp}>{it3}</p>
          <p className={style.cp}>{it4}</p>
          <p className={style.cp}>{it5}</p>
        </div>
  )
}

export default Cat