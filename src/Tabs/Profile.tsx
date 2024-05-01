import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Title } from "../components/Title";

export default function Profile() {
  return (
    <ScrollView>
      <VStack alignItems={"center"}>
        <Title mt={"16"} color={"blue.500"}>
          Meu Perfil
        </Title>
        <Avatar
          source={{ uri: "https://www.github.com/douglas-yokomizo.png" }}
          h={20}
          w={20}
        />
        <Title fontSize={"xl"} mt={16} color={"blue.500"} mb={0}>
          Informações pessoais
        </Title>
        <Title fontSize={"lg"} mt={6} mb={0}>
          Douglas Yokomizo
        </Title>
        <Title fontSize={"md"} mt={2} mb={0}>
          07/08/1995
        </Title>
        <Title fontSize={"md"} mt={2}>
          São Paulo
        </Title>
        <Divider mt={6} width={"90%"} height={0.5} />
        <Title fontSize={"xl"} mt={10} color={"blue.500"} mb={0}>
          Histórico médico
        </Title>
        <Text fontWeight={"bold"}>Bronquite</Text>
        <Text fontWeight={"bold"}>Sinusite</Text>
      </VStack>
    </ScrollView>
  );
}
