import React from 'react';
import {  useState } from 'react'
import {Group , NativeSelect,Center,Card,Button,TextInput,Container,Space,Table, ScrollArea,Text} from '@mantine/core';
import Boxes from './calis';

const Harris_benedict = () => {
  const [talla,setTalla]=useState("");
  const [peso,setPeso]=useState("");
  const [edad,setEdad]=useState("");
  const [genero,setGenero]=useState("");
  const[fa,setFactorActividad]=useState(0.0);
  const[faResult,setfaResult]=useState(0.0);
  const[termoharris,setTermo]=useState(0.0);
  const[getResult,setGetResult]=useState(0.0);
  const[Result,setResul]=useState(0.0);
  const [visible, setVisible] = useState(true);
      const calcularHarris=()=>{
          if(genero=="Masculino"){
              setResul(66.5+(parseFloat(peso)*13.75)+(parseFloat(talla)*5)-(parseFloat(edad)*6.78));
              setfaResult(fa*Result);
              setTermo(Result*.10);
              setGetResult(faResult+termoharris);
              setVisible((v) => !v)
            }else if(genero=="Femenino")
            {
              setResul(655.1+(parseFloat(peso)*9.56)+(parseFloat(talla)*1.85)-(parseFloat(edad)*4.68));
              setfaResult(fa*Result);
              setTermo(Result*.10);
              setGetResult(faResult+termoharris)
              setVisible((v) => !v)
            }  
      }
      const calcularMiflin=()=>{
        if(genero=="Masculino"){
          setResul((parseFloat(peso)*10)+(parseFloat(talla)*6.25)-(parseFloat(edad)*5)+5);
          setfaResult(fa*Result);
          setGetResult(faResult);
          setVisible((v) => !v)
          }else if(genero=="Femenino")
          {
            setResul((parseFloat(peso)*10)+(parseFloat(talla)*6.25)-(parseFloat(edad)*5)-161);
            setfaResult(fa*Result);
            setGetResult(faResult);
            setVisible((v) => !v)
          }   
    }
    const calcularOms=()=>{
     if(genero=="Masculino"){
        setResul((parseFloat(peso)*11.3)+((parseFloat(talla)/100)*16)+901);
        setfaResult(fa*Result);
        setGetResult(faResult);
        setVisible((v) => !v)
        }else if(genero=="Femenino")
        {
          setResul((parseFloat(peso)*8.7)+((parseFloat(talla)/100)*25)+865);
          setfaResult(fa*Result);
          setGetResult(faResult);
          setVisible((v) => !v)
        } 
  }
  const calcularOwen=()=>{
    if(genero=="Masculino"){
        setResul((parseFloat(peso)*10.2)+879);
        setfaResult(fa*Result);
        setGetResult(faResult);
        setVisible((v) => !v)
      }else if(genero=="Femenino")
      {
        setResul((parseFloat(peso)*7.18)+795);
        setfaResult(fa*Result);
        setGetResult(faResult);
        setVisible((v) => !v)
      } 
}
const calcularValencia=()=>{
  if(genero=="Masculino"){
      const sel=parseFloat(edad);

       if(sel>=18 && sel<=29){
        setResul((parseFloat(peso)*13.37)+747);
        setfaResult(fa*Result);
        setGetResult(faResult);
        setVisible((v) => !v)
       }
       else if(sel>=30 && sel<=59){
        setResul((parseFloat(peso)*13.37)+693);
        setfaResult(fa*Result);
        setGetResult(faResult);
        setVisible((v) => !v)
       }
       else if(sel>=60){
        setResul((parseFloat(peso)*13.37)+429);
        setfaResult(fa*Result);
        setGetResult(faResult);
        setVisible((v) => !v)
       }

    }else if(genero=="Femenino")
    {
      const sel=parseFloat(edad);
         if(sel>=18 && sel<=29){
          setResul((parseFloat(peso)*11.02)+679);
          setfaResult(fa*Result);
          setGetResult(faResult);
          setVisible((v) => !v)
         }
         else if(sel>=30 && sel<=59){
          setResul((parseFloat(peso)*10.92)+677);
          setfaResult(fa*Result);
          setGetResult(faResult);
          setVisible((v) => !v)
         }
         else if(sel>=60){
          setResul((parseFloat(peso)*10.98)+520);
          setfaResult(fa*Result);
          setGetResult(faResult);
          setVisible((v) => !v)
         }
    }  
}
  return (
    <Container size="sm" px="xs">
    
   <ScrollArea>
   <Card shadow="sm" p="lg" radius="md" withBorder>
   <NativeSelect
        data={['Seleccione una opcion','Femenino', 'Masculino']}
        value={genero}
        label="Seleccione su genero"
        description="This is anonymous"
        withAsterisk
        onChange={(event) => setGenero(event.currentTarget.value)}
      />
       <NativeSelect
        data={[{value:null,label:'Seleccione una opcion'},{value:1.2,label:'SEDENTARIO'},{value:1.3,label:'LIGERO'},{value:1.5,label:'MODERADO'},{value:1.7,label:'ACTIVO'},{value:1.9,label:'VIGOROSO'}]}
        label="Seleccione su Factor de actividad"
        description="This is anonymous"
        withAsterisk
        onChange={(event) => setFactorActividad(event.currentTarget.value)}
      />
      <TextInput
       id="talla"
      placeholder="cm"
      label="Talla"
      description="Ingrese su Altura"
      radius="md"
      size="md"
      value={talla}
      withAsterisk
      onChange={(event) => setTalla(event.currentTarget.value)}
    />
      <TextInput
       id="peso"
      placeholder="(kg)"
      label="Peso"
      description="Ingrese su Peso"
      radius="md"
      size="md"
      value={peso}
      withAsterisk
      onChange={(event) => setPeso(event.currentTarget.value)}
    />
      <TextInput
       id="edad"
      placeholder="años"
      label="Edad"
      description="Ingrese su Edad"
      radius="md"
      size="md"
      value={edad}
      withAsterisk
      onChange={(event) => setEdad(event.currentTarget.value)}
    />
     <Space h="xl" />
         <Center style={{ alignContent:Center  }}>
         <Group position="center" >
         <Button  onClick={calcularHarris} variant="light" color="grape" radius="lg" size="md" uppercase>
         Harris
    </Button> 
    <Button  onClick={()=>calcularOms()} variant="light" color="grape" radius="lg" size="md" uppercase>
         OMS
    </Button> 
    <Button  onClick={()=>calcularOwen()} variant="light" color="grape" radius="lg" size="md" uppercase>
         Owen
    </Button> 
    <Button  onClick={()=>calcularMiflin()} variant="light" color="grape" radius="lg" size="md" uppercase>
         Mifflin
    </Button> 
    <Button  onClick={()=>calcularValencia()} variant="light" color="grape" radius="lg" size="md" uppercase>
         Valencia
    </Button> 
         </Group>
    </Center>
    <Space h="xl" />
    <Table>
      <thead>
        <tr>
          <th>DATOS</th>
          <th></th>
        </tr>
      </thead>  
      <tbody>
        <tr>
        <td>Resultado</td>
        <td>{Result.toFixed(2)}</td>   
        </tr>
      </tbody>
   <tbody>
      <tr>
        <td>FA</td>
        <td>{faResult.toFixed(2)}</td>  
      </tr>
      </tbody>  
      <tbody >
      <tr>
        <td>GET</td>
        <td>{getResult.toFixed(2)}</td>    
      </tr>
      </tbody>
      </Table>
    </Card>
    <Boxes visible={visible} getResult={getResult} peso={peso}/>
   </ScrollArea>
    </Container>
  )
}
export default Harris_benedict