import { Avatar, Text, VStack } from "native-base";
import { Botao } from "./Botao";

interface CardAppointmentsProps {
  name: string;
  specialty: string;
  picture: string;
  date?: string;
  hasAttended?: boolean;
}

export default function CardAppointments({
  name,
  specialty,
  date,
  picture,
  hasAttended,
}: CardAppointmentsProps) {
  return (
    <VStack
      mb={4}
      w={"90%"}
      shadow={1}
      borderColor={"gray.200"}
      borderWidth={1}
      p={4}
      borderRadius={"lg"}
      bgColor={hasAttended ? "blue.200" : "white"}
    >
      <VStack flexDir={"row"} alignItems={"center"}>
        <Avatar size={"lg"} source={{ uri: picture }} />
        <VStack ml={4}>
          <Text fontSize={"lg"}>{name}</Text>
          <Text>{specialty}</Text>
          <Text>{date}</Text>
        </VStack>
      </VStack>
      {hasAttended ? <Botao>Agendar Consulta</Botao> : <Botao>Cancelar</Botao>}
    </VStack>
  );
}
