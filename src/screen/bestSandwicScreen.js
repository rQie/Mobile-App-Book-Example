import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import coverBook4 from '../coverBook/coverBook4';

const aliceInWonderlandScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.childContainer}>
        <Image
          style={styles.image}
          source={{uri: `data:image/gif;base64,${coverBook4}`}}
        />
        <Text style={styles.text}>
          Best {'\n'} Sandwich {'\n'} Recipes {'\n'} from {'\n'} Around {'\n'}
          the World
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>read</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>share</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonDelete}>
        <Text style={styles.buttonText}>delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#d6d6d6',
  },
  childContainer: {
    flexDirection: 'row',
  },
  button: {
    elevation: 8,
    backgroundColor: '#27a0ed',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  buttonDelete: {
    elevation: 8,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 190,
    height: 300,
    marginRight: 20,
    marginBottom: 100,
  },
});

export default aliceInWonderlandScreen;
