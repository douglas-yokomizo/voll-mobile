import { VStack, Image, Text, Box, Button, Link, useToast } from "native-base";
import Logo from "./assets/Logo.png";
import { TouchableOpacity } from "react-native";
import { Title } from "./components/Title";
import { TextInput } from "./components/TextInput";
import { useState, useEffect } from "react";
import { fazerLogin } from "./services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function Login({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(true);
  const toast = useToast();

  useEffect(() => {
    async function verificarLogin() {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        navigation.replace("Tabs");
      }
      setCarregando(false);
    }
    verificarLogin();
  }, []);

  async function login() {
    const resultado = await fazerLogin(email, senha);
    if (resultado) {
      const { token } = resultado;
      AsyncStorage.setItem("token", token);

      const tokenDecodificado = jwtDecode(token) as any;
      const pacienteId = tokenDecodificado.id;
      AsyncStorage.setItem("pacientId", pacienteId);
      navigation.replace("Tabs");
    } else {
      toast.show({
        title: "Erro no login",
        description: "O email ou senha não conferem",
        backgroundColor: "red.500",
      });
    }
  }

  if (carregando) {
    return null;
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Image source={Logo} alt="Logo Voll" />
      <Title>Faça login em sua conta</Title>
      <Box>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Insira seu endereço de email"
          label="Email"
        />
        <TextInput
          value={senha}
          onChangeText={setSenha}
          placeholder="Insirua sua senha"
          label="Senha"
          type="password"
        />
      </Box>
      <Button
        onPress={login}
        w={"100%"}
        mt={10}
        borderRadius={"lg"}
        bgColor={"blue.800"}
      >
        Entrar
      </Button>
      <Link href="https://www.alura.com.br" mt={2} justifyContent={"center"}>
        Esqueceu a senha?
      </Link>
      <Box mt={8} justifyContent={"center"} w={"100%"} flexDirection={"row"}>
        <Text>Ainda não tem conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text color={"blue.500"}>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
