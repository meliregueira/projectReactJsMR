import React, {useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const DarkMode = () => {

    const {isDarkMode,ToggleDarkMode} = useContext(ThemeContext)

  return (
    <div>
        <button onClick={ToggleDarkMode}> Cambiar a Dark Mode</button>
    </div>
  )
}

export default DarkMode