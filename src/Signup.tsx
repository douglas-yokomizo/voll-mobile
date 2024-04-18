import {VStack, Image, Box, Button,} from 'native-base'
import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { TextInput } from './components/TextInput';
import { useState } from 'react';
import { Botao } from './components/Botao';

export default function Login() {
  const [sectionNumber, setSectionNumber] = useState(0)
  const sections = [
    {
      id: 1,
      title: 'Insira alguns dados básicos',
      textInput: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
      ]
    },
    {
      id: 2,
      title: 'Agora mais alguns dados sobre você',
      textInput: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ]
    }
  ]

  const handleNextSection = () => {
    if (sectionNumber < sections.length - 1) {
      setSectionNumber(sectionNumber + 1)
    } else {

    }
  }

  const handlePrevSection = () => {
    if (sectionNumber > 0 && sectionNumber === sections.length - 1) {
      setSectionNumber(sectionNumber - 1)
    } else {

    }
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll'/>
      <Title>
        {sections[sectionNumber].title}
      </Title>
      <Box>
        {sections[sectionNumber].textInput.map((input) => {
          return <TextInput key={input.id} label={input.label} placeholder={input.placeholder}/>
        })}
      </Box>
      {
        sectionNumber > 0 &&
        <Botao onPress={() => handlePrevSection()} w={'100%'} mt={10} borderRadius={'lg'} bgColor={'gray.300'}>Voltar</Botao>
      }
        <Botao onPress={() => handleNextSection()} mt={4} borderRadius={'lg'} bgColor={'blue.800'}>Avançar</Botao>

    </VStack>
  );
}
