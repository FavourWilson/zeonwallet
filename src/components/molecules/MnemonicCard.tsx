import Typography from "../atoms/Typography"

type IMnemonicCard ={
    id: number,
    name: string,
}
const MnemonicCard = ({id, name}:IMnemonicCard) => {
  return (
    <div className="w-28 border-2 border-white px-2 py-4 rounded-xl">
        <Typography className="text-center text-white font-poppins font-bold" value={"content"} size={12}>
             {id}. {name}
        </Typography>
    </div>
  )
}

export default MnemonicCard
