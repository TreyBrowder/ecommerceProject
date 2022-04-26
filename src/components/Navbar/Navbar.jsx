import { AppBar, Badge, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@material-ui/core'

import React from 'react'
import { ShoppingCart } from '@material-ui/core'
import eCommerceLogo from '../../assets/eCommercePic.png'

const Navbar = () => {
  return (
    <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={eCommerceLogo} alt="Commerce.js" height="25px" className={classes.image}/>
                    Commerce.js
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary"></Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar