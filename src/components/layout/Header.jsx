
import React from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Box } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

function Header() {
  return (
    <div>
      <Box sx={{ margin: '15px' }}>
        <AppBar
          position='static'
          style={{ backgroundColor: '#c8454c', borderRadius: '10px' }}
        >
          <Toolbar>
            <Grid
              container
              alignItems='center'
              justifyContent='space-between'
              sx={{ px: [2, 2], py: 1 }}
            >
              <Grid item xs={6} sm={8} md={6}>
                <Typography component='div'>
                  User Dashboard / Attendance
                </Typography>
                <Typography component='span' sx={{ fontWeight: 'bold' }}>
                  Attendance
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sm={4}
                md={6}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                <Button variant='text' sx={{ mr: [1, 2], color: 'white' }}>
                  <Typography
                    component='span'
                    sx={{ fontSize: [10, 12], fontWeight: 'bold' }}
                  >
                    Set Password
                  </Typography>
                </Button>
                <Button variant='text' sx={{ color: 'white' }}>
                  <Typography
                    component='span'
                    sx={{ fontSize: [10, 12], fontWeight: 'bold' }}
                  >
                    Logout
                  </Typography>
                </Button>
                <Box
                  sx={{
                    marginBottom: '1px',
                    marginX: [1, 2],
                    fontSize: ['12px', '15px'],
                  }}
                >
                  |
                </Box>
                <Button
                  variant='text'
                  sx={{
                    color: 'white',
                    fontSize: [10, 12],
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  Hi, Mark
                </Button>
                <Box
                  sx={{
                    color: 'white',
                    marginTop: '1px',
                    cursor: 'pointer',
                    fontSize: ['12px', '15px'],
                  }}
                >
                  <SettingsIcon />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header;





