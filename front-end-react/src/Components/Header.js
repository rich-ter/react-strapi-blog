import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Container from '@mui/material/Container';

export default function MyApp() {
  return (
    <div>
        <Container fixed/>
      <Grid container spacing={2} >
  <Grid xs={8}>
    xs
  </Grid>
  <Grid xs={4}>
    xs
  </Grid>
  <Grid xs={4}>
    xs
  </Grid>
  <Grid xs={8}>
    xs
  </Grid>
</Grid>
    </div>
  );
}