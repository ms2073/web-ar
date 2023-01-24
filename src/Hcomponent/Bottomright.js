import React from 'react'
import "./Bottomright.css";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

function Bottomright() {
  return (
    <div className='bottomright'>
        <div className='seticon'>
          <button>
            <SettingsIcon />
            <h2 className='set'>Settings</h2>
            </button>
        </div>
        <div className='logicon'>
           <button> <LogoutIcon />
            <h2 className='log'>Logout</h2>
            </button>
        </div>
    </div>
  )
}

export default Bottomright