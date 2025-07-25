import React from 'react';
// mui
import { Box, Stack, Typography, Skeleton } from '@mui/material';

export default function Materials() {
  return (
    <Box p={2}>
      <Stack>
        <Typography variant="body1" sx={{ width: 130 }}>
          <Skeleton variant="text" />
        </Typography>

        <Stack spacing={0.8}>
          <Stack direction="row" gap={1} alignItems="center" width="100%">
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton height={12} width={'50%'} />
          </Stack>
          <Stack direction="row" gap={1} alignItems="center" width="100%">
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton height={12} width={'50%'} />
          </Stack>
          <Stack direction="row" gap={1} alignItems="center" width="100%">
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton height={12} width={'50%'} />
          </Stack>
          <Stack direction="row" gap={1} alignItems="center" width="100%">
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton height={12} width={'50%'} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
