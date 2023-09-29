import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTRYPJ_COLLECTION } from "../storageConfig";
import { AppError } from "../../utils/AppError";
import { listAllCompanies } from "./listAllCompanies";
import { ControlRegisterPJ } from "../../screens/RegisterPJ/components/RegisterPJForm/types";

export const registerPJ = async (data: ControlRegisterPJ) => {
  console.log("typeof(data)", typeof data);

  try {
    const storedCompanies = await listAllCompanies();

    if (storedCompanies.includes(data.cnpj)) {
      throw new AppError("Já existe um usuário cadastrado com esse CNPJ");
    }

    if (data) {
      const newStorage = JSON.stringify([...storedCompanies, data]);

      await AsyncStorage.setItem(REGISTRYPJ_COLLECTION, newStorage);
    }
  } catch (error) {
    Alert.alert(error);
  }
};
