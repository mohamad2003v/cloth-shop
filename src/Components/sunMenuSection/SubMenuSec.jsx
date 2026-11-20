import { LeftArrow } from '../../icons/icon'
import style from './subMenuSec.module.css'

const SubMenuSec = ({title , subTitle}) => {
  return (
    <div className={style.div}>
        <h4 className={style.h4}>{title} <LeftArrow/></h4>
        <div className={style.divh6}>
          {subTitle.map((item , key)=>
            <h6 className={style.h6} key={key}>{item}</h6>
          )}
        </div>
        
    </div>
  )
}

export default SubMenuSec