'use client'
import React from 'react';
import { Autocomplete, Box, Container, TextField } from '@mui/material';
import BottonLabel from '@/components/BottonLabel';

const Input: React.FC<any> = (props) => (
  <Box sx={{ mb: 2 }}>
    <TextField {...props} fullWidth />
  </Box>
)


const Page: React.FC = () => (
  <Container sx={{ mt: 5 }}>
    <form>

      <Autocomplete fullWidth
        disablePortal
        options={["IOC3521","GHZ6727"]}
        sx={{ width: 300,mb: 2 }}
        renderInput={(params) => <TextField {...params} label="Placa" />}
      />

      <Input id="p1" label="Nome completo" variant="outlined" />

      <Input id="p2" label="Placa" variant="outlined" />

      <Input id="p3" label="Modelo" variant="outlined" />

      <Input id="p4" label="Outlined" variant="outlined" />

      <Input id="p4" label="Outlined" variant="outlined" />

      <BottonLabel title={"Documento em dia?"} values={['Sim', 'Não']} />

      <BottonLabel title={"Algun pneu furado?"} values={['Sim', 'Não']} />

      <BottonLabel title={"Nivel do oleo"} values={['Normal', 'Baixo', 'Critico']} />

      <BottonLabel title={"Nivel da agua"} values={['Sim', 'Não']} />
    </form>
  </Container>
);

export default Page;