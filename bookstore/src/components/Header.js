import React, {useState} from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';


function Header() {
    const [value, setValue]=useState();
  return (
    <div>
    <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
          <Toolbar>
          <Typography>
         <LibraryBooksIcon/>
         </Typography>
         <Tabs 
         sx={{ml:"auto"}}
         textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, value)=>setValue(value)}>
             <Tab LinkComponent={NavLink} to="/add" label='Add product'/>
             <Tab  LinkComponent={NavLink} to="/books" label='Books'/>
             <Tab  LinkComponent={NavLink} to="/about" label='About us'/>
         </Tabs>
          </Toolbar>
          </AppBar>
        </div>
)
}

export default Header;