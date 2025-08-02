import { useNavigate } from 'react-router';
import RoundedButton from '../molecules/RoundedButton'
import { MenuData } from '../utils'

const TransactionMenu = () => {
    const navigate = useNavigate();

  const handleClick = (href: string, action?: string) => {
    if (action) {
      navigate(href, { state: { action } });
    } else {
      navigate(href);
    }
  };
  return (
    <div className='flex justify-between items-center gap-3 px-4'>
      {
        MenuData.map((data)=>(
            <RoundedButton icon={data.icon} name={data.name} onClick={() => handleClick(data.href, data.action)} />
        ))
      }
    </div>
  )
}

export default TransactionMenu
