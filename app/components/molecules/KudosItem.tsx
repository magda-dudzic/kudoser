import React from 'react';
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import { Kudos } from '../../models/Kudos';

export default function KudosItem({
  item,
  children,
  childStyles = {},
}: {
  item: Kudos;
  children?: React.ReactNode;
  childStyles?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.user}>Given by: {item.user}</Text>
        <Text style={styles.colleague}>To: {item.colleague}</Text>
        <Text style={styles.points}>Kudos Points: {item.points}</Text>
        <Text style={styles.message}>Kudos message: {item.message}</Text>
      </View>
      <View>{children && <View style={childStyles}>{children}</View>}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 0.1)',
    borderWidth: 1,
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  colleague: {
    fontSize: 15,
  },
  points: {
    fontSize: 15,
  },
  message: {
    fontSize: 15,
  },
});
