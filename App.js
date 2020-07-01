import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import coverBook1 from './src/coverBook/coverBook1';
import coverBook2 from './src/coverBook/coverBook2';
import coverBook3 from './src/coverBook/coverBook3';
import coverBook4 from './src/coverBook/coverBook4';

const homeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TouchableOpacity
          // style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            source={{uri: `data:image/gif;base64,${coverBook1}`}}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            source={{uri: `data:image/gif;base64,${coverBook2}`}}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            source={{uri: `data:image/gif;base64,${coverBook3}`}}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            source={{uri: `data:image/gif;base64,${coverBook4}`}}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            source={{uri: `data:image/gif;base64,${coverBook4}`}}
            style={styles.img}
          />
        </TouchableOpacity>
        <TouchableOpacity
          // style={styles.button}
          onPress={() => {
            alert('you clicked me');
          }}>
          <Image
            source={{uri: `data:image/gif;base64,${coverBook4}`}}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  ImageIconStyle: {
    height: 100,
    width: 100,
    // resizeMode: 'stretch',
  },
  img: {
    width: 138,
    height: 178,
  },
  // button: {
  //   height: 100,
  //   width: 100,
  // },
});
export default homeScreen;
