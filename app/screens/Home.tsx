import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import SafeArea from '../components/atoms/SafeArea';
import KudosForm from '../components/molecules/KudosForm';
import KudosItem from '../components/molecules/KudosItem';
import { Kudos } from '../models/Kudos';
import { getKudos } from '../storage/kudos';

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

  return (
    <SafeArea>
      <View>
        <KudosForm onSubmit={() => {}} />
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
