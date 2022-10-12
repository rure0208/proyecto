import React from 'react';
import {  useState } from 'react'
import { NumberInput,Tabs ,Modal,Overlay , NativeSelect,Center,Card,Button,Text,TextInput,Container,Space,Table, ScrollArea,Box,Input} from '@mantine/core';
import { IconPhoto, IconMessageCircle } from '@tabler/icons';
const Boxes = ({visible,getResult,peso}) => {

    const [error,setError]=useState("");
    const [lipidos,setLipidos]=useState(0.0);
    const [kcalP,setkcakP]=useState(0.0);
    const [gkgP,setgkgP]=useState(0.0);
    const [gP,setgP]=useState(0.0);
    
    const [proteinas,setProteinas]=useState(0.0);
    const [kcalL,setkcakL]=useState(0.0);
    const [gkgL,setgkgL]=useState(0.0);
    const [gL,setgL]=useState(0.0);
    
    const [carbo,setCarbo]=useState(0.0);
    const [kcalC,setkcakC]=useState(0.0);
    const [gkgC,setgkgC]=useState(0.0);
    const [gC,setgC]=useState(0.0);
    const [opened, setOpened] = useState(false);
    const calcularMacro=()=>{
      if((carbo+proteinas+lipidos)===100){
        setkcakP((proteinas*getResult)/100)
        setgP(kcalP/4)
        setgkgP(gP/peso)
    
        setkcakL((lipidos*getResult)/100)
        setgL(kcalL/9)
        setgkgL(gL/peso)
    
        setkcakC((carbo*getResult)/100)
        setgC(kcalC/4)
        setgkgC(gC/peso)
        setError("")
      }else{
       
        setOpened(true)
      }
      
    
     }
     const calcularMacro2=()=>{
    
      setgP2(gkgP2*peso)
      setkcakP2(gP2*4)
      setProteinas2((kcalP2/ getResult)*100)
    
      setgL2(gkgL2*peso)
      setkcakL2(gL2*9)
      setLipidos2((kcalL2/ getResult)*100)
    
      setCarbo2(100-(proteinas2+lipidos2))
      setkcakC2((carbo2*getResult)/100)
      setgC2(kcalC2/4)
      setgkgC2(gC2/peso)
      
     }
     
     const [proteinas2,setProteinas2]=useState(0.0);
    const [kcalP2,setkcakP2]=useState(0.0);
    const [gkgP2,setgkgP2]=useState(0.0);
    const [gP2,setgP2]=useState(0.0);
    const [lipidos2,setLipidos2]=useState(0.0);
    const [kcalL2,setkcakL2]=useState(0.0);
    const [gkgL2,setgkgL2]=useState(0.0);
    const [gL2,setgL2]=useState(0.0);
    const [carbo2,setCarbo2]=useState(0.0);
    const [kcalC2,setkcakC2]=useState(0.0);
    const [gkgC2,setgkgC2]=useState(0.0);
    const [gC2,setgC2]=useState(0.0);
    
    const limpiar=()=>{
      setkcakP(0)
      setgP(0)
      setgkgP(0)
    setCarbo(0)
    setCarbo2(0)
    setProteinas(0)
    setProteinas2(0)
    setLipidos(0)
    setLipidos2(0);
      setkcakL(0)
      setgL(0)
      setgkgL(0)
    
      setkcakC(0)
      setgC(0)
      setgkgC(0)
      
      setkcakP2(0)
      setgP2(0)
      setgkgP2(0)
    
      setkcakL2(0)
      setgL2(0)
      setgkgL2(0)
    
      setkcakC2(0)
      setgC2(0)
      setgkgC2(0)
    }
  return (
    <Box sx={{ position: 'relative' }}>
        {visible && <Overlay opacity={0.6} color="#000" blur={2} />}
    <Card>
    <Space h="xl" />
      <Tabs defaultValue="gallery">
      <Tabs.List position="center">
        <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}   onClick={()=>limpiar()} > %</Tabs.Tab>
        <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}  onClick={()=>limpiar()}>g/kg</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="gallery" pt="xs">      
    <Table>
      <thead>
        <tr>
          <th> </th>
          <th>%</th>
          <th>Kcal</th>
          <th>g</th>
          <th>g/Kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>Proteinas</th>
        <td> <NumberInput value={proteinas}  onChange={( val) => setProteinas(val)} /></td>
        <td> <Input disabled  value={kcalP.toFixed(2)}/> </td>
        <td> <Input disabled  value={gP.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgP.toFixed(2)}/> </td>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <th>Lipidos</th>
        <td> <NumberInput value={lipidos}  onChange={( val) => setLipidos(val)} /></td>
        <td> <Input disabled  value={kcalL.toFixed(2)}/> </td>
        <td> <Input disabled  value={gL.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgL.toFixed(2)}/> </td>
      </tr>
      </tbody> 
      <tbody >
      <tr>
        <th>Carbohidratos</th>
        <td> <NumberInput value={carbo}  onChange={( val) => setCarbo(val)} /></td>
        <td> <Input disabled  value={kcalC.toFixed(2)}/> </td>
        <td> <Input disabled  value={gC.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgC.toFixed(2)}/> </td>
      </tr>
      </tbody>
      <tbody>
        <tr>
        <th>Total</th>
        <td><Input disabled/></td>
        <td><Input disabled placeholder={getResult.toFixed(2)}/></td>
        <td> <Button  onClick={()=>calcularMacro()} variant="light" color="grape" radius="lg" size="xs" uppercase>
         Calcular
    </Button> </td>
        <td><Input disabled/></td>
        </tr>
      </tbody>
      </Table>
      </Tabs.Panel>
      <Text>{error}</Text>
      <Tabs.Panel value="messages" pt="xs">
      <Table>
      <thead>
        <tr>
          <th> </th>
          <th>%</th>
          <th>Kcal</th>
          <th>g</th>
          <th>g/Kg</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <th>Proteinas</th>
        <td>  <Input disabled  value={proteinas2.toFixed(2)}/></td>
        <td> <Input disabled  value={kcalP2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gP2.toFixed(2)}/></td>
        <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgP2}  onChange={( val) => setgkgP2(val)}/></td>
        </tr>
      </tbody>
      <tbody>
      <tr>
        <th>Lipidos</th>
        <td>  <Input disabled  value={lipidos2.toFixed(2)}/> </td>
        <td> <Input disabled  value={kcalL2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gL2.toFixed(2)}/></td>
        <td><NumberInput defaultValue={0.0} precision={2} min={0} step={0.01} max={10} value={gkgL2}  onChange={( val) => setgkgL2(val)}/></td>
      </tr>
      </tbody> 
      <tbody >
      <tr>
        <th>Carbohidratos</th>
        <td>   <Input disabled  value={carbo2.toFixed(2)}/></td>
        <td> <Input disabled  value={kcalC2.toFixed(2)}/> </td>
        <td> <Input disabled  value={gC2.toFixed(2)}/></td>
        <td> <Input disabled   value={gkgC2.toFixed(2)}/> </td>
      </tr>
      </tbody>
      <tbody>
        <tr>
        <th>Total</th>
        <td><Input disabled/></td>
        <td><Input disabled placeholder={getResult.toFixed(2)}/></td>
        <td> <Button  onClick={()=>calcularMacro2()} variant="light" color="grape" radius="lg" size="xs" uppercase>
         Calcular
    </Button> </td>
        <td><Input disabled/></td>
        </tr>
      </tbody>
      </Table>
      </Tabs.Panel>
    </Tabs>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Error"
      >
        {<Text>La suma de todo debe igual a 100</Text>}
      </Modal>
      </Card>
      </Box>
      
  )
}

export default Boxes