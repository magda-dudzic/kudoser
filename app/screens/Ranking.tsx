import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import SafeArea from '../components/atoms/SafeArea';

const MOCK_RANKING_DATA = [
  {
    name: 'Philippa',
    pointsThisMonth: 120,
    pointsInTotal: 700,
  },
  {
    name: 'Sami',
    pointsThisMonth: 130,
    pointsInTotal: 860,
  },
  {
    name: 'Magda',
    pointsThisMonth: 800,
    pointsInTotal: 9900,
  },
  {
    name: 'Nathan',
    pointsThisMonth: 80,
    pointsInTotal: 1200,
  },
];

export default function Ranking() {
  const [sortBy, setSortBy] = useState('pointsThisMonth');

  return (
    <SafeArea>
      <Text style={styles.heading}>Ranking</Text>

      <Picker
        selectedValue={sortBy}
        onValueChange={(value: string) => setSortBy(value)}
      >
        <Picker.Item label="Last 30 days" value="pointsThisMonth" />
        <Picker.Item label="In total" value="pointsInTotal" />
      </Picker>

      <FlatList
        data={MOCK_RANKING_DATA.sort((a, b) => b[sortBy] - a[sortBy])}
        renderItem={({ item, index }) => {
          return (
            <View
              style={
                index === MOCK_RANKING_DATA.length - 1
                  ? styles.listItemNoBorder
                  : styles.listItem
              }
            >
              <Text style={styles.number}>{index + 1}. </Text>
              <Text>{item.name} </Text>
              <Text style={styles.number}>{item[sortBy]} </Text>
              {index === 0 && (
                <Ionicons name="trophy" color="#f5e642" size={20} />
              )}
            </View>
          );
        }}
      />
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 16,
    backgroundColor: '#ddd',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  listItemNoBorder: {
    textAlign: 'center',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  number: {
    fontWeight: 'bold',
  },
});
