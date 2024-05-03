import {
  VStack,
  Text,
  Image,
  Center,
  Box,
  ScrollView,
  Divider,
} from "native-base";
import { Title } from "../components/Title";
import Logo from "../assets/Logo.png";
import { TextInput } from "../components/TextInput";
import { Botao } from "../components/Botao";

export default function Main() {
  return (
    <ScrollView mb={10}>
      <VStack flex={1} alignItems={"start"} mt={"16"} ml={"10"}>
        <Image source={Logo} alt="Voll Logo" />
        <Title color={"blue.500"}>Boas-vindas!</Title>
        <Center
          flex={1}
          justifyContent={"center"}
          alignItems={"center"}
          w={"90%"}
        >
          <Box
            w={"100%"}
            borderColor={"#e4e8f0"}
            borderWidth={"2"}
            px={4}
            pb={4}
            borderRadius={"lg"}
          >
            <TextInput placeholder="Digite a especialidade" label="" mt={0} />
            <TextInput placeholder="Digite sua localização" label="" mt={0} />
            <Botao p={3}>Buscar</Botao>
          </Box>
          <Title color={"blue.800"}>Depoimentos</Title>
          <Box mt={6}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit aperiam laborum rem temporibus eaque. Accusamus sed,
              sequi beatae omnis aliquid eaque suscipit sapiente. Ipsum quod
              animi rerum ab cupiditate explicabo.
            </Text>
            <Title fontSize={"lg"} mt={4} mb={2}>
              Júlio, 40 anos, São Paulo/SP.
            </Title>
          </Box>
          <Divider color={"gray.500"} w={"full"} />
          <Box mt={6}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit aperiam laborum rem temporibus eaque. Accusamus sed,
              sequi beatae omnis aliquid eaque suscipit sapiente. Ipsum quod
              animi rerum ab cupiditate explicabo.
            </Text>
            <Title fontSize={"lg"} mt={4} mb={2}>
              Júlio, 40 anos, São Paulo/SP.
            </Title>
          </Box>
          <Divider color={"gray.500"} w={"full"} />
          <Box mt={6}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit aperiam laborum rem temporibus eaque. Accusamus sed,
              sequi beatae omnis aliquid eaque suscipit sapiente. Ipsum quod
              animi rerum ab cupiditate explicabo.
            </Text>
            <Title fontSize={"lg"} mt={4} mb={2}>
              Júlio, 40 anos, São Paulo/SP.
            </Title>
          </Box>
          <Divider color={"gray.500"} w={"full"} />
        </Center>
      </VStack>
    </ScrollView>
  );
}
