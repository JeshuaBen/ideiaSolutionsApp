import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTRYPJ_COLLECTION } from "../storageConfig";

export const listAllCompanies = async () => {
  try {
    const storage = await AsyncStorage.getItem(REGISTRYPJ_COLLECTION);

    const companies = storage ? JSON.parse(storage) : [];

    return companies;
  } catch (error) {
    throw error;
  }
};
