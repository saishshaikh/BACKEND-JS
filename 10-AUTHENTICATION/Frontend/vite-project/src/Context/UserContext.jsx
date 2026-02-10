import { createContext } from "react"

export const DataContext = createContext()

const UserContext = ({ children }) => {

  const ServerUrl = "http://localhost:8000"

  const value = {
    ServerUrl
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export default UserContext
