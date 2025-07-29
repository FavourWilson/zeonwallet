import DashboardLayout from "../layout/DashboardLayout"
import Header from "../molecules/Header"
import WalletBalance from "../molecules/WalletBalance"
import ListWalletBalance from "../organisms/ListWalletBalance"
import TransactionMenu from "../organisms/TransactionMenu"

const Home = () => {
  return (
    <DashboardLayout>
        <div className="flex flex-col gap-4">
            <Header/>
            <WalletBalance/>
            <TransactionMenu/>
            <ListWalletBalance/>
        </div>
    </DashboardLayout>
  )
}

export default Home
