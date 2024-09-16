import { createContext } from "react"

const UserContext = createContext()
const ContextProvider = ({children}) => {

    const values = {

    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default ContextProvider