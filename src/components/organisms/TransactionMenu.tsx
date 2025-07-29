import RoundedButton from '../molecules/RoundedButton'
import { MenuData } from '../utils'

const TransactionMenu = () => {
  return (
    <div className='flex justify-between items-center gap-3 px-4'>
      {
        MenuData.map((data)=>(
            <RoundedButton icon={data.icon} name={data.name} to={data.href} />
        ))
      }
    </div>
  )
}

export default TransactionMenu
