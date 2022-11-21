import { createContext , useState } from "react";
import getLangue from '../getLangueParametres'

export const ThemeLanguagem  = createContext();

export const ProviderLanguagem = ({children}) => {
    const langueBase = getLangue()
    const [langueValue , setLangueValue] = useState(langueBase)

    return ( 
        <ThemeLanguagem.Provider value={{langueValue , setLangueValue}}>
            {children}
        </ThemeLanguagem.Provider>
    )
}

export default ProviderLanguagem;