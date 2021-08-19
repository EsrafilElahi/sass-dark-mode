import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext';


function ThemeProvider({ children }) {

    const [checked, setChecked] = useState(false)

    return (
        <ThemeContext.Provider value={{ checked, setChecked }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
