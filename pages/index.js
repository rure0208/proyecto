import React from 'react'
import {Carousel} from '@mantine/carousel';
import {  TextInput, Checkbox, Button, Group, Box,PasswordInput  } from '@mantine/core';
import Layout from './compionents/Layout';
import { useForm } from '@mantine/form';

const Home = () => {
  return (
    <div>

    <Layout tituloPagina="Inicio">
    <Box sx={{ maxWidth: 300 }} mx="auto">
      
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          
        />
        <PasswordInput 
          withAsterisk
          label="Contraseña"
          
          
        />

        <Checkbox
          mt="md"
          label="Recordar Credenciales"
          
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      
    </Box>

      
    </Layout>

   
    </div>
  )
}

export default Home