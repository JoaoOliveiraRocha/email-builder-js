import React from 'react';

import { Divider, Drawer, keyframes, Stack, Typography } from '@mui/material';

import { useSamplesDrawerOpen } from '../../documents/editor/EditorContext';
import { BLACK900, WHITE } from '../../new-theme';

import SidebarButton from './SidebarButton';

export const SAMPLES_DRAWER_WIDTH = 272;

const rainbowAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function SamplesDrawer() {
  const samplesDrawerOpen = useSamplesDrawerOpen();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={samplesDrawerOpen}
      sx={{
        width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
      }}
    >
      <Stack spacing={3} py={1}
      sx={{ backgroundColor: BLACK900 }}
      width={SAMPLES_DRAWER_WIDTH} justifyContent="space-between" height="100%">
        <Stack spacing={2} sx={{ '& .MuiButtonBase-root': { width: '100%', justifyContent: 'flex-start' } }}>
          
        <Typography px={2}
        color={WHITE}
          sx={{
            fontWeight: 'bold',
            fontSize: '12px',
            paddingTop: '12px',
            backgroundSize: '200% 200%',
            display: 'inline-block',
            transition: 'color 0.5s ease-in-out, background-image 0.5s ease-in-out, background-size 0.5s ease-in-out',
            '&:hover': {
              animation: `${rainbowAnimation} 3s ease-in-out infinite`,
              backgroundClip: 'text',
              backgroundImage: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
              backgroundSize: '200% 200%',
              color: 'transparent',
            }}}>
            TOPPER-EMAIL-BUILDER
          </Typography>


          <Stack alignItems="flex-start" px={2}>
            <SidebarButton href="#">Empty</SidebarButton>
            <SidebarButton href="#sample/welcome">Welcome email</SidebarButton>
            <SidebarButton href="#sample/one-time-password">One-time passcode (OTP)</SidebarButton>
            <SidebarButton href="#sample/reset-password">Reset password</SidebarButton>
            <SidebarButton href="#sample/order-ecomerce">E-commerce receipt</SidebarButton>
            <SidebarButton href="#sample/subscription-receipt">Subscription receipt</SidebarButton>
            <SidebarButton href="#sample/reservation-reminder">Reservation reminder</SidebarButton>
            <SidebarButton href="#sample/post-metrics-report">Post metrics</SidebarButton>
            <SidebarButton href="#sample/respond-to-message">Respond to inquiry</SidebarButton>
            <SidebarButton href="#sample/topper-base-email">Topper Base Email</SidebarButton>
          </Stack>

        </Stack>
      </Stack>
    </Drawer>
  );
}
