import {VStack, Image, Text, Box, FormControl, Input, Button, Link} from 'native-base'
import Logo from './assets/Logo.png'
import { TouchableOpacity } from 'react-native';
import { Title } from './components/Title';
import { TextInput } from './components/TextInput';

export default function Login({navigation}) {
  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt='Logo Voll'/>
      <Title>
        Faça login em sua conta
      </Title>
      <Box>
      <TextInput placeholder='Insira seu endereço de email' label='Email'/>
      <TextInput placeholder='Insirua sua senha' label='Senha'/>
      </Box>
        <Button onPress={() => navigation.navigate('Tabs')} w={'100%'} mt={10} borderRadius={'lg'} bgColor={'blue.800'}>Entrar</Button>
        <Link href='https://www.alura.com.br' mt={2} justifyContent={'center'}>Esqueceu a senha?</Link>
        <Box mt={8} justifyContent={'center'} w={'100%'} flexDirection={'row'}>
          <Text>
            Ainda não tem conta?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text color={'blue.500'}>
              Faça seu cadastro!
            </Text>
          </TouchableOpacity>
        </Box>
    </VStack>
  );
}
