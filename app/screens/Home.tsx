import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import slugify from 'slugify';

import SafeArea from '../components/atoms/SafeArea';
import KudosForm, { KudosFormData } from '../components/molecules/KudosForm';
import KudosItem from '../components/molecules/KudosItem';
import { Kudos } from '../models/Kudos';
import { getKudos, storeKudos } from '../storage/kudos';

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
      slug: slugify(form.user + ' ' + Date.now(), { lower: true }),
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
        <KudosForm
          onSubmit={async (data) => {
            await handleKudosFormSubmit(data);
            setRefresh(true);
          }}
        />
      </View>
      <View>
        <FlatList
          data={kudos}
          keyExtractor={(item) => item.slug}
          renderItem={({ item }) => {
            return (
              <View>
                <KudosItem item={item} />
              </View>
            );
          }}
        />
      </View>
    </SafeArea>
  );
}
