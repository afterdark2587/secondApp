import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.image1} source={require('../assets/lru.png')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>สมุนไพรท้องถิ่น</Text>
      </View>

      <View style={styles.section}>
        <Image style={styles.coverScreenImage} source={require('../assets/Face.png')} />
      </View>

      <View style={styles.screenSection}>
        <Image style={styles.image} source={require('../assets/Face2.png')} />
        <Image style={styles.image} source={require('../assets/Face3.png')} />
        <Image style={styles.image} source={require('../assets/Face4.png')} />
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'green',
    flexDirection: 'column',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  coverScreenImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover',
    marginTop: 100, 
  },
  screenSection: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    marginHorizontal: 10,
  },
  image1: {
    width: 110,
    height: 145,
    marginHorizontal: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: 'darkorange',
  },
});

export default Flex;
