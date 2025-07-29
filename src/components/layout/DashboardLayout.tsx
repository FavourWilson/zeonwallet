import type React from "react"

type IDashboard = {
    children: React.ReactNode
}
const DashboardLayout = ({children}:IDashboard) => {
  return (
    <div className="bg-dark flex flex-col gap-4 px-4 py-2 h-screen">
      {children}
    </div>
  )
}

export default DashboardLayout
