/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { data } from '../../data';

const DATA = data;

function Item({id, name, image, selected, onSelect}) {
  return (
    <TouchableOpacity
    onPress={() => onSelect(id)}
      style={[
        styles.item,
        {backgroundColor: selected ? '#6e3b6e' : '#f9c2ff'},
      ]}>
    <View style={styles.container}>
      <Image
        source={{uri: image}}
        style={styles.image}
      />

<Text style={styles.name}>{name}</Text>
    </View>
  </TouchableOpacity>
  );
}

export default function App() {
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
        data={DATA}
        renderItem={({item}) => (
          <Item
            id={item.id}
            name={item.name}
            image={item.image}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        extraData={selected}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    margin: 5,
  },
  name: {
    // fontSize: 30,
  },
  image: {
    resizeMode: 'cover',
    width: 138,
    height: 178,
    alignItems: 'center',
    margin: 5,
    justifyContent: 'center',
  }
});
