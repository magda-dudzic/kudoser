import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import slugify from "slugify";

import SafeArea from "../components/atoms/SafeArea";
import KudosForm, { KudosFormData } from "../components/molecules/KudosForm";
import KudosItem from "../components/molecules/KudosItem";
import { Kudos } from "../models/Kudos";
import { getKudos, storeKudos } from "../storage/kudos";
import { ListItem } from "@react-native-material/core";

export default function Home() {
  const [kudos, setKudos] = useState<Kudos[]>([]);
  const isFocused = useIsFocused();
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    async function getData() {
      const _kudos = await getKudos();
      setKudos(_kudos);
    }
    if (refresh || isFocused) {
      getData();
      setRefresh(false);
    }
  }, [refresh, isFocused]);

  const handleKudosFormSubmit = async (form: KudosFormData) => {
    const newKudos: Kudos = {
      slug: slugify(form.user + " " + Date.now(), { lower: true }),
      user: form.user,
      colleague: form.colleague,
      points: Number(form.points),
      message: form.message,
    };
    await storeKudos(newKudos);
  };

  return (
    <SafeArea>
      <View>
        <FlatList
          data={kudos}
          keyExtractor={(item) => item.slug}
          ListHeaderComponent={() => (
            <KudosForm
              onSubmit={async (data) => {
                await handleKudosFormSubmit(data);
                setRefresh(true);
              }}
            />
          )}
          renderItem={({ item }) => {
            return (
              <View>
                <ListItem
                  title={`${item.points} kudos from ${item.user} to ${item.colleague}`}
                  secondaryText={item.message}
                  pressEffect={"none"}
                  style={{ marginHorizontal: 35 }}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeArea>
  );
}
