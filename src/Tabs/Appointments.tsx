import { VStack, ScrollView, Text, Divider } from "native-base";
import { Title } from "../components/Title";
import { Botao } from "../components/Botao";
import CardAppointments from "../components/CardAppointments";

export default function Appointments() {
  return (
    <ScrollView>
      <VStack alignItems={"center"}>
        <Title color={"blue.500"} mt={12} mb={4}>
          Minhas consultas
        </Title>
        <Botao w={"90%"} p={4}>
          <Text fontWeight={"bold"} color={"white"}>
            Agendar outra consulta
          </Text>
        </Botao>
      </VStack>
      <VStack alignItems={"start"} ml={6}>
        <Title color={"blue.500"} fontSize={"lg"}>
          Proxímas consultas
        </Title>
        <CardAppointments
          name="Dr. Douglas"
          date="24/05/2024"
          picture="https://github.com/douglas-yokomizo.png"
          specialty="Cardiologista"
          hasAttended={false}
        />
      </VStack>
      <Divider mt={6} borderWidth={0.5} w={"90%"} alignSelf={"center"} />
      <VStack alignItems={"start"} ml={6}>
        <Title color={"blue.500"} fontSize={"lg"}>
          Consultas passadas
        </Title>
        <CardAppointments
          name="Dr. Douglas"
          date="14/03/2024"
          picture="https://github.com/douglas-yokomizo.png"
          specialty="Cardiologista"
          hasAttended={true}
        />
        <CardAppointments
          name="Dr. Douglas"
          date="14/03/2024"
          picture="https://github.com/douglas-yokomizo.png"
          specialty="Cardiologista"
          hasAttended={true}
        />
        <CardAppointments
          name="Dr. Douglas"
          date="14/03/2024"
          picture="https://github.com/douglas-yokomizo.png"
          specialty="Cardiologista"
          hasAttended={true}
        />
      </VStack>
    </ScrollView>
  );
}
