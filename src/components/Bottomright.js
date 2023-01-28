import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import React from 'react'
import "./Bottomright.css";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';



function Bottomright() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }
  return (
    <div className='bottomright'>
        <div className='seticon'>
          <button>
            <SettingsIcon />
            <h2 className='set'>Settings</h2>
            </button>
        </div>
        <div className='logicon'>
          <button onClick={handleClick}>
            <LogoutIcon />
            <h2 className='log'>Logout</h2>
          </button>
        </div>
    </div>
  )
}

export default Bottomright