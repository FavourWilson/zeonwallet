
type TSize = {
    width?: number 
    height?: number
    value:string
    src: string
}
const Imagesize = ({width,height,value, src}:TSize) => {
  switch (value) {
    case "base":
        return (
            <img src={src} className={`w-[${width}px] h-[${height}px]`}/>
        )
    case "XL":
        return (
            <img src={src} className={`w-2xl h-2xl `}/>
        )
    case "LG":
        return (
            <img src={src} className={`w-lg h-lg `}/>
        )
    case "MD":
        return (
            <img src={src} className={`w-md h-md `}/>
        )
       
  
    default:
         return (
            <img src={src} className={`w-${width} h-${height}`}/>
        )
  }
}

export default Imagesize
