import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import { BLACK600 } from '../../../../../new-theme';
import { brandLight } from '../../../../../topper-theme';

type SidebarPanelProps = {
  title: string;
  children: React.ReactNode;
};
export default function BaseSidebarPanel({ title, children }: SidebarPanelProps) {
  return (
    <Box px={2}>
      <Typography variant="h3" color={brandLight} sx={{ display: 'block', mb: 2 }}>
        {title}
        <div style={{borderBottom: `1px solid ${BLACK600}`}}></div>
      </Typography>
      <Stack spacing={3} mb={2}>
        {children}
      </Stack>
    </Box>
  );
}
