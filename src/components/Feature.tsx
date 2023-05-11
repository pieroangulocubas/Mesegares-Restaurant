import { FC } from "react"

interface FeatureProps{
  icon:any,
  title:string,
  description:string,
  color:string
}

const BgColor:any={'red':'bg-mes-red-100','yellow':'bg-mes-yellow-100','green':'bg-mes-green-100'}
const Feature:FC<FeatureProps> = ({icon,title,description,color}) => {
  return (
    <article className="w-full sm:w-[378px] flex flex-col gap-[16px] items-center">
      <div className={`p-[12px] ${BgColor[color]} rounded-[16px]`}>
        {icon}
      </div>
      <h3 className="text-[28px] md:text-[32px]">{title}</h3>
      <p className="text-center">{description}</p>
    </article>
  )
}
export default Feature