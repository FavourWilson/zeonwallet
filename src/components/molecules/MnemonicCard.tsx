import Typography from "../atoms/Typography"

type IMnemonicCard ={
    id: number,
    name: string,
}
const MnemonicCard = ({id, name}:IMnemonicCard) => {
  return (
    <div className="w-28 border-2 border-white px-1.5 py-1.5 rounded-xl">
        <Typography className="text-center font-bold" value={"content"} size={0}>
             {id}. {name}
        </Typography>
    </div>
  )
}

export default MnemonicCard
