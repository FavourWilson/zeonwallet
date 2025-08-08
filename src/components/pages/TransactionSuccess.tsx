import { NavLink } from "react-router"
import { TeamsIcon } from "../../assets"
import Imagesize from "../atoms/Imagesize"
import Typography from "../atoms/Typography"
import DashboardLayout from "../layout/DashboardLayout"

const TransactionSuccess = () => {
  return (
    <DashboardLayout>
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <Imagesize src={TeamsIcon} />
            <Typography value={"Heading"} size={24} >
                Transaction SUccessful
            </Typography>
            <NavLink to='/home' className={'font-bold text-purple'}>
              return to Dashboard
            </NavLink>
        </div>
         

    </DashboardLayout>
  )
}

export default TransactionSuccess
