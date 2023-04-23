import React, { useState, useEffect } from 'react'
import decode from 'jwt-decode'
import { AppBar, Button, Typography, Toolbar, Avatar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import useStyles from './styles'
import brush from '../../images/brush.jpg'

const Navbar = () => {
     
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory(); 
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;
    // JWT ...
    if(token) {
      const decodedToken = decode(token);

      if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    setUser(null);
    history.push('/');
  }

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography component={Link} to='/' className={classes.heading} variant="h2" align="center">Artsy</Typography>
            <img className={classes.image} src={brush} alt="memories" height="90" />
        </div>
        <Toolbar className={classes.toolbar}>
            { user ? (
                <div className={classes.profile}>
                   <Avatar className={classes.purple} alt={user.res.name} src={user.res.imageUrl}>{user.res.name.charAt(0)}</Avatar> 
                   <Typography className={classes.userName} variant="h6">{user.res.name}</Typography>
                   <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
  )
}

export default Navbar