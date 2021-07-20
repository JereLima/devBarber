import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderRigth = () => {
  return (
    <View style={styles.container}>
      <Text>10</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginRight: 10,
    borderRadius: 20,
    elevation: 5,
  },
  title: {
    color: 'white',
  },
});

export default HeaderRigth;
