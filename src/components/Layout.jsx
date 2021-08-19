import React, { useContext } from 'react'
import Switch from "react-switch"
import { ThemeContext } from './../context api/ThemeContext';
import '../sass/App.scss'


function Layout({ children }) {

    const { checked, setChecked } = useContext(ThemeContext)

    const handleChange = () => {
        setChecked(!checked)
        document.body.classList.toggle('dark')
    }

    return (
        <div className='app'>

            <header className='header'>
                <nav className='nav'>
                    <div className='light-modi'>Light</div>
                    <div className='switch'>
                        <Switch
                            checked={checked}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            onChange={handleChange}
                            onColor="#d67acd"
                            onHandleColor="#e609b9"
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        />
                    </div>
                    <div className='dark-modi'>Dark</div>
                </nav>
            </header>

            <main className='main'>{children}</main>

            <footer className='footer'>footer ©copy right 2021</footer>

        </div>
    )
}

export default Layout

