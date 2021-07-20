import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListComponent = ({data, cor}) => {
  return (
    <View style={[styles.container]}>
     
      <View style={styles.icon}>
      
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f0f0f0',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    elevation: 3,
    padding: 10,
  },
  h1: {
    fontSize: 20,
  },
  h2: {
    fontSize: 14,
  },
  icon: {
    backgroundColor: 'orange',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
});
export default ListComponent;
