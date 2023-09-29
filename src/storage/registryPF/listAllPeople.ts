import AsyncStorage from "@react-native-async-storage/async-storage";
import { REGISTRYPF_COLLECTION } from "../storageConfig";

export const listAllPeople = async () => {
  try {
    const storage = await AsyncStorage.getItem(REGISTRYPF_COLLECTION);

    const people: string[] = storage ? JSON.parse(storage) : [];

    return people;
  } catch (error) {
    throw error;
  }
};
