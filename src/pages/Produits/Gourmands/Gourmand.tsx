import {Typography} from '@mui/material';
import {Outlet} from 'react-router-dom';
import Root from '../../../layout/Root';

// Service.tsx
export default function Gourmand() {
  return (
    <Root>
      <Typography variant="h4"> Gourmand Page</Typography>
    </Root>
  )
}
