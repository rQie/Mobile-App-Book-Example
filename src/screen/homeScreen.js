/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { bookData } from '../../bookData';

function Item({name, image}) {
  return (
    <View>
      <StatusBar barStyle = "dark-content" backgroundColor = "white"/>
      <Image
        style={styles.image}
        source={{uri: image}}
      />
    </View>
  );
}

export default function App({navigation}) {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    (id) => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bookData}
        renderItem={({item}) => (
          <TouchableOpacity
          style={[styles.button]}
          onPress={() => navigation.navigate(item.place)}>
          <Item
            place={item.place}
            id={item.id}
            name={item.name}
            image={item.image}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
          <View style={styles.textView}>
          <Text style={styles.text}>{item.name}</Text>
          </View>
          </TouchableOpacity>

        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a1bfc3',
    paddingRight: 20,
    paddingLeft: 20,

  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    elevation: 8,
    backgroundColor: '#1183ca',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 300,
  },
});
