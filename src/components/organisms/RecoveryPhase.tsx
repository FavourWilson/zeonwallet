import { MnemonicData } from '../utils'
import MnemonicCard from '../molecules/MnemonicCard'

const RecoveryPhase = () => {
  return (
    <div className="grid grid-cols-3 gap-3 justify-center items-center">
      {
        MnemonicData.map((data)=>(
            <MnemonicCard id={data.id} name={data.name} />
        ))
      }
    </div>
  )
}

export default RecoveryPhase
