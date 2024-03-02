import {Box, Typography} from '@mui/material';
import {Outlet} from 'react-router-dom';

import Root from '../../layout/Root';


export default function index() {
  return (
    <Box sx={{mt: "75px", }}>
      <Root>
        <Typography fontWeight={500}
          sx={{fontSize: {xs: 22, sm: 22, md: 22, lg: 32}, pt: 4, fontWeight: "600"}}>Trouver nos produits
        </Typography>
      <div>
        <Outlet />
      </div>

      </Root>
    </Box>
  )
}
