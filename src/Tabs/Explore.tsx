import { VStack, Text, ScrollView, Box } from "native-base";
import { Title } from "../components/Title";
import { TextInput } from "../components/TextInput";
import { Botao } from "../components/Botao";

export default function Explore() {
  return (
    <ScrollView>
      <Box
        w={"80%"}
        alignSelf={"center"}
        mt={20}
        borderWidth={1}
        p={4}
        borderColor={"gray.200"}
        borderRadius={"lg"}
      >
        <TextInput placeholder="Digite a especialidade" mt={0} />
        <TextInput placeholder="Digite sua localização" mt={2} />
        <Botao>
          <Text color={"white"} fontSize={"md"} fontWeight={"bold"}>
            Buscar
          </Text>
        </Botao>
      </Box>
      <Title mt={8} color={"blue.500"}>
        Resultados da busca
      </Title>
    </ScrollView>
  );
}
