import {Typography} from '@mui/material';
import {Outlet} from 'react-router-dom';
import Root from '../../layout/Root';

// Service.tsx
export default function index() {
  return (
    <Root>
      <Typography variant="h4">Service Page</Typography>

      <div>
        <Outlet />
      </div>

    </Root>
  )
}
