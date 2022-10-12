import React from 'react'
import Layout from './compionents/Layout'
import {  useState ,useEffect} from 'react'
import { Group, TextInput,Button,Table,Modal,useMantineTheme } from '@mantine/core';

const buscador = () => {
  const [opened, setOpened] = useState(false);
  const [search, setSearch] = useState('');
  const [entradaFilter, setEntradaFilter]=useState([]);


  const busqueda = async () => {
    const url = 'https://smaedb-default-rtdb.firebaseio.com/SMAE.json'
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    setEntradaFilter(entradas.filter(entrada => {
      return entrada.Alimento.toLowerCase().includes(search.toLowerCase());

    }));

  }
  return (
    <Layout>
      <Group>
        <TextInput
          label="¿Qué deseas buscar?"
          placeholder=""
          id="busca"
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
        />
        <Button onClick={busqueda}> Buscador </Button>
        
        
      
        <Table>
      <thead>
        <tr>
          
          <th>Alimento</th>
          <th>Detalles</th>
        </tr>
      </thead>
      <tbody>
        {entradaFilter.map((entrada, index)=>(
          <tr key={index}>
            <td>{entrada.Alimento}</td>
            <td> <Button onClick={() => setOpened(true)}>Detalles</Button> </td>
          </tr>
        ))}
      </tbody>
</Table>
<Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Detalles"
      >
        <Table>
        <thead>
        <tr>
          
          <th>Datos</th>
          <th>Resultado</th>
        </tr>
        </thead>
        <tbody>   
          <tr>
            <td></td>
            <td> </td>
          </tr>
    
        
        </tbody>
        </Table>
      </Modal>
      </Group>

    </Layout>

  )
}



export default buscador