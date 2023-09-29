import { useEffect, useLayoutEffect, useState } from "react";
import BaseLayout from "../../components/BaseLayout";
import * as S from "./styles";
import { useTheme } from "styled-components";
import { ActivityIndicator, FlatList } from "react-native";
import ListEmpty from "../../components/ListEmptyComponent";
import RegisteredUserCard from "../../components/RegisteredUserCard";
import { listAllPeople } from "../../storage/registryPF/listAllPeople";
import { ControlRegisterPF } from "../RegisterPF/components/RegisterPfForm/types";
import Button from "../../components/Button";
import { HomeScreenProps } from "./types";

const Home = ({ navigation }: HomeScreenProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState<string[]>([]);

  const fetchPeople = async () => {
    setIsLoading(true);
    try {
      const data = await listAllPeople();

      setPeople(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const theme = useTheme();

  useEffect(() => {
    fetchPeople();
  }, [people.length]);

  return (
    <BaseLayout
      style={{
        backgroundColor: theme.COLORS.BLUE500,
      }}
    >
      <S.Text>Lista de Cadastros</S.Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={people}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item, index }) => (
            <RegisteredUserCard data={people[index]} />
          )}
          contentContainerStyle={people.length === 0 && { flex: 1 }}
          ListEmptyComponent={() => (
            <ListEmpty message="Que tal cadastrar a primeira pessoa?" />
          )}
        />
      )}

      <Button
        text="Voltar para página inicial"
        onPress={() => navigation.push("SignIn")}
      />
    </BaseLayout>
  );
};

export default Home;
