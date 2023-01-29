import { Avatar } from '@mui/material';

import  React, { useState ,useEffect} from 'react';
import styles from './MessageSender.module.css';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import PhotoLibraryRoundedIcon from '@mui/icons-material/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@mui/icons-material/InsertEmoticonRounded';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useAuthContext } from '../hooks/useAuthContext'



function MessageSender() {
 


  const [text , setText] = useState("")
  const [location , setLocation] = useState("")
  const { user } = useAuthContext()
  const userId = `${user.userId}`
  const [_id , set_id] = useState("")
  const form = document.getElementById('my_form');





 
  const handleVerification = async (e) => {
    
    e.preventDefault();
    const response = await fetch("http://localhost:3002/api/posts", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        userId,
        text,
        location,
       
      }),
    });

    let data = await response.json();
   

    set_id(data._id);
    if (response.status == 200 ) {
      form.reset();
    }

    
    
  };

 

  return (
    <div className={styles.messageSender}>
      <div className={styles.messageSender__top}>
        <Avatar />
        <form  action="" id="my_form">
          <input
            
            
            type="text"
            className={styles.messageSender__input}
            placeholder={`What's on your mind,`}
            value={text}
          onChange={(e) => setText(e.target.value)}
          />
          <input
            
            
            type="text"
            className={styles.messageSender__input}
            placeholder={`Location`}
            value={location}
          onChange={(e) => setLocation(e.target.value)}
          />
          
          
          <Button variant="contained" endIcon={<SendIcon />} onClick={handleVerification}>
          Post
         </Button>
        </form>
      </div>
      <div className={styles.messageSender__bottom}>
        {/* <div className={styles.messageSender__option}>
          <VideocamRoundedIcon style={{ color: 'red' }} />
          <p>Video</p>
        </div> */}
        <div className={styles.messageSender__option}>
          {/* <PhotoLibraryRoundedIcon style={{ color: 'green' }} />
          
          <p>Upload Image</p> */}

         <Button variant="contained" component="label">
        Upload Image
        <input hidden accept="image/*" multiple type="file" />
      </Button>
        </div>
        <div className={styles.messageSender__option}>
          {/* <InsertEmoticonRoundedIcon style={{ color: 'orange' }} />
          <p>Emoji</p> */}
            
          <Button variant="contained" endIcon={<FileUploadIcon style={{ color: 'orange' }} />}>
           Confirm Upload
           
           </Button>

           
         
          
        </div>
      </div>
    </div>
  );
}

export default MessageSender;