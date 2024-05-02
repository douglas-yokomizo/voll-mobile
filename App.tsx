import React, { useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import { Themes } from "./src/styles/themes";
import Routes from "./src/Routes";
import api from "./src/services/api";

export default function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/paciente");
      console.log(res.data);
    };
    fetchData();
  }, []);

  return (
    <NativeBaseProvider theme={Themes}>
      <Routes />
    </NativeBaseProvider>
  );
}
