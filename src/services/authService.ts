import api from "./api";

export const loginUser = async (email: string, senha: string) => {
  if (!email || !senha) throw new Error("Email e senha são obrigatórios");

  try {
    const res = await api.post("/auth/login", { email, senha });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(`Erro ao fazer login: ${error}`);
    return null;
  }
};
