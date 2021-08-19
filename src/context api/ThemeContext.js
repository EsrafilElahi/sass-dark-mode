import { createContext } from 'react'

export const ThemeContext = createContext({
    checked: null,
    setChecked: () => { }
})