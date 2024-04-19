import {Text, Image, Box, Checkbox, ScrollView} from 'native-base'
import Logo from './assets/Logo.png'
import { Title } from './components/Title';
import { TextInput } from './components/TextInput';
import { useState } from 'react';
import { Botao } from './components/Botao';
import { sections } from '../src/utils/SignupInputs';

export default function Signup() {
  const [sectionNumber, setSectionNumber] = useState(0)

  const handleNextSection = () => {
    if (sectionNumber < sections.length - 1) {
      setSectionNumber(sectionNumber + 1)
    }
  }

  const handlePrevSection = () => {
    if (sectionNumber > 0) {
      setSectionNumber(sectionNumber - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5} my={12}>
      <Image source={Logo} alt='Logo Voll' alignSelf={'center'}/>
      <Title>
        {sections[sectionNumber].title}
      </Title>
      <Box>
        {sections[sectionNumber]?.textInput?.map((input) => {
          return <TextInput key={input.id} label={input.label} placeholder={input.placeholder}/>
        })}
      </Box>
      {
        sectionNumber === 2 &&
      <Text color={'blue.800'} fontSize={'md'} my={2} fontWeight={'bold'}>Selecione os planos:</Text>
      }
      <Box>
        {sections[sectionNumber].checkbox.map((checkbox) => {
          return (
          <Checkbox key={checkbox.id} value={checkbox.value}>
            {checkbox.value}
          </Checkbox>
          )
        })}
      </Box>
      {
        sectionNumber > 0 &&
        <Botao onPress={() => handlePrevSection()} w={'100%'} mt={10} borderRadius={'lg'} bgColor={'gray.300'}>Voltar</Botao>
      }
        <Botao onPress={() => handleNextSection()} mt={4} borderRadius={'lg'} bgColor={'blue.800'}>Avançar</Botao>

    </ScrollView>
  );
}
