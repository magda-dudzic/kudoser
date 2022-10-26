import { Ionicons } from '@expo/vector-icons';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import SafeArea from '../components/atoms/SafeArea';

const MOCK_RANKING_DATA = [
  {
    name: 'Magda',
    pointsThisMonth: 120,
    pointsInTotal: 700,
  },
  {
    name: 'Sami',
    pointsThisMonth: 130,
    pointsInTotal: 660,
  },
  {
    name: 'Philippa',
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

      <SelectPicker
        selectedValue={sortBy}
        onValueChange={(value: string) => setSortBy(value)}
      >
        <SelectPicker.Item label="Last 30 days" value="pointsThisMonth" />
        <SelectPicker.Item label="In total" value="pointsInTotal" />
      </SelectPicker>

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
