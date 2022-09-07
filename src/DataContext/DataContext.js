import { createContext, useState, useEffect } from "react"

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [currentFetch,setCurrentFetch] = useState("Genre")
    
    return (
        <DataContext.Provider value={{
           currentFetch,setCurrentFetch 
        }}>
           {children}
        </DataContext.Provider>
    )
}

export default DataContext