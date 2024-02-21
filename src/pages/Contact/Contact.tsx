import {Stack, Typography} from '@mui/material';
import {Outlet} from 'react-router-dom';

import ContactForm from '../../Components/contact/ContactForm';
import Root from '../../layout/Root';

// Service.tsx
export default function Contact() {
  return (
    <Stack>

      <ContactForm />
    </Stack>
  )
}
