'use client'
import InlineRadioButtons from '@/components/InlineRadioButtons ';
import React, { useState } from 'react';

const VehicleChecklistForm = () =>
{
  const [nivelOleo, setNivelOleo] = useState('');
  const [pneuFurado, setPneuFurado] = useState(false);
  const [nivelAgua, setNivelAgua] = useState('');
  const [eletrica, setEletrica] = useState('');
  const [freio, setFreio] = useState('');

  const handleSubmit = (e:any) =>
  {
    e.preventDefault();
    // Aqui você pode enviar os dados para o servidor ou fazer outra ação
  };

  return (
    <>
      <section className='bg-ct-blue-600 min-h-screen pt-20'>
        <div className="max-w-md mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Checklist do Veículo</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nível do Óleo</label>
              <select
                value={nivelOleo}
                onChange={(e) => setNivelOleo(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione</option>
                <option value="Baixo">Baixo</option>
                <option value="Adequado">Adequado</option>
                <option value="Alto">Alto</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pneu Furado</label>
              <div className="mt-1">
                <input
                  type="checkbox"
                  checked={pneuFurado}
                  onChange={(e) => setPneuFurado(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Sim</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Nível da Água</label>
              <select
                value={nivelAgua}
                onChange={(e) => setNivelAgua(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione</option>
                <option value="Baixo">Baixo</option>
                <option value="Adequado">Adequado</option>
                <option value="Alto">Alto</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Estado da Elétrica</label>
              <select
                value={eletrica}
                onChange={(e) => setEletrica(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione</option>
                <option value="Funcionando">Funcionando</option>
                <option value="Com Problemas">Com Problemas</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Estado dos Freios</label>
              <select
                value={freio}
                onChange={(e) => setFreio(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Selecione</option>
                <option value="Bom">Bom</option>
                <option value="Precisa de Manutenção">Precisa de Manutenção</option>
              </select>
            </div>

            <button
              type="submit"
              className=" mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Enviar Checklist
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default VehicleChecklistForm;

/*

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

export default function SimpleContainer()
{
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ bgcolor: '#4864cc', height: '100vh', pt: 20 }}>
        <Container>
          <ToggleButtonGroup
            color="success"
            sx={{bgcolor:'#eee9f9'}}
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="web">Web</ToggleButton>
            <ToggleButton value="android">Android</ToggleButton>
            <ToggleButton value="ios">iOS</ToggleButton>
          </ToggleButtonGroup>
        </Container>
      </Box>
    </React.Fragment>
  );
}

*/