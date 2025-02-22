import { useState } from "react"
import { createContext } from "react"

export const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {
  const [input, setInput] = useState()

  return(
    <SearchContext.Provider value={{input, setInput}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider