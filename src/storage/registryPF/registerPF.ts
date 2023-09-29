import { Alert } from "react-native";
import { ControlRegisterPF } from "../../screens/RegisterPF/components/RegisterPfForm/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTRYPF_COLLECTION } from "../storageConfig";
import { AppError } from "../../utils/AppError";
import { listAllPeople } from "./listAllPeople";

export const registerPF = async (data: ControlRegisterPF) => {
  console.log("typeof(data)", typeof data);

  try {
    const storedPeople = await listAllPeople();

    if (storedPeople.includes(data.cpf)) {
      throw new AppError("Já existe um usuário cadastrado com esse CPF");
    }

    if (data) {
      const newStorage = JSON.stringify([...storedPeople, data]);

      await AsyncStorage.setItem(REGISTRYPF_COLLECTION, newStorage);
    }
  } catch (error) {
    Alert.alert(error);
  }
};
