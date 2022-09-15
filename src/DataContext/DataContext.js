import { createContext, useState, useEffect } from "react"

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [currentFetch,setCurrentFetch] = useState("Top")
    const [input, setInput] = useState()
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(input)
    }
    
    return (
        <DataContext.Provider value={{
           currentFetch,setCurrentFetch,input,setInput,handleSearch
        }}>
           {children}
        </DataContext.Provider>
    )
}

export default DataContext