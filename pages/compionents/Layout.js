import React, { Children } from 'react'
import Link from 'next/link'
import {AppShell,Button,Stack,Navbar ,Header ,Title} from '@mantine/core';

const Layout = ({children,tituloPagina}) => {
  return (
    <div>
    <AppShell
      padding="md"
      navbar={
      <Navbar width={{ base: 300 }} height={500} p="xs">
        {
           <Stack sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0], height: 300 })}>
             <Button variant="light" color="violet" radius="lg" size="md" compact ><Link href='/'>Inicio</Link></Button>
             <Button variant="light" color="violet" radius="lg" size="md" compact> <Link href='/imc'>IMC</Link></Button>
             <Button variant="light" color="violet" radius="lg" size="md" compact ><Link href='/calcular'>Calcular</Link></Button>
             <Button variant="light" color="violet" radius="lg" size="md" compact ><Link href='/buscador'>Buscador</Link></Button>
         </Stack>
      
        }
        </Navbar>
      
      }
      
      header={<Header height={60} p="xs">{ <Title color="Black" order={1}>{tituloPagina}</Title>}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {children}
    </AppShell>

   
    </div>
  )
}


export default Layout