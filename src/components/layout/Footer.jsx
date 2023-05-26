import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';

function Footer() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '10px',
        background: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: isSmallScreen ? 'center' : 'space-between',
        }}
      >
        <Typography
          variant='body2'
          color='textSecondary'
          sx={{ marginRight: isSmallScreen ? '10px' : '20px' }}
        >
          Create Support Ticket
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          sx={{ marginRight: isSmallScreen ? '10px' : '20px' }}
        >
          Chat Support
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          sx={{ marginRight: isSmallScreen ? '10px' : '30px' }}
        >
          V 0.0.118
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;






