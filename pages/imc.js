import React from 'react'
import { useState } from 'react';
import Layout from './compionents/Layout'
import { Center,Card,Button,Text,TextInput,Container,Space,NativeSelect,Group } from '@mantine/core';

 const Imc = () => {
const [altura,setAltura]=useState("");
const [peso,setPeso]=useState("");
const [genero,setGenero]=useState("");
const [bmi,setBmi]=useState(0.0);
const[labelRes,setLabeRes]=useState("");

const bmiCalculation=()=>{
      setBmi( parseFloat (peso)/(parseFloat(altura)**2));
        if(bmi <=18.5) {
          setLabeRes('bajo: '+ bmi.toFixed(2))
        }
        else if (bmi <=24.9 ) {
          setLabeRes('normal: '+ bmi.toFixed(2))
        }
        else if ( bmi <=29.9 ) {
          setLabeRes('sobrepeso: '+ bmi.toFixed(2))
        }
        else {
          setLabeRes('obecidad: '+ bmi.toFixed(2) )
        }
  }
  return (
    <div>
    <Layout tituloPagina="Imc">
   
    <Container size="xs" px="xs">
    <Card shadow="sm" p="lg" radius="md" withBorder>
    <NativeSelect
        data={['Femenino', 'Masculino']}
        value={genero}
        placeholder="Pick one"
        label="Seleccione su genero"
        description="Seleccione su genero"
        withAsterisk
        onChange={(event) => setGenero(event.currentTarget.value)}
      />
       <TextInput
     id="altura"
    placeholder="(m)"
    label="Talla"
    description="Ingrese su Altura"
    radius="md"
    size="md"
    withAsterisk
    onChange={(event) => setAltura(event.currentTarget.value)}
  />
     
      <TextInput
       id="peso"
      placeholder="(kg)"
      label="Peso"
      description="Ingrese su Peso"
      radius="md"
      size="md"
      withAsterisk
      onChange={(event) => setPeso(event.currentTarget.value)}
    />
     <Space h="xl" />
         <Center style={{ alignContent:Center  }}>
         <Group position="center" >
  
    <Button  onClick={()=>bmiCalculation()} variant="light" color="grape" radius="lg" size="md" uppercase>
         BMI
    </Button> 
         </Group>
    </Center>
    <Space h="xl" />
    <Text align="center">{labelRes}</Text>
    </Card>
    </Container>
    </Layout>
</div>
  )
  
}
export default  Imc