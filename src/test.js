/* eslint-disable prettier/prettier */
import React from 'react';
import AppContainer from './AppContainer'


export default function App() {
  return (
          <AppContainer />
  );
}

//////////////////////////////////////////////////////////////////////////////////////
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import coverBook1 from '../coverBook/coverBook1';
import coverBook2 from '../coverBook/coverBook2';
import coverBook3 from '../coverBook/coverBook3';
import coverBook4 from '../coverBook/coverBook4';

const homeScreen = ({navigation }) => {
  return (
<ScrollView>
      <View style={styles.screen}>
        <TouchableOpacity
                  onPress={() => navigation.navigate('AliceInWonderland')}
                  >
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


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import { data } from '../data';

const DATA = data;

function Item({id, name, selected, onSelect}) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
      style={[
        styles.item,
        {backgroundColor: selected ? '#6e3b6e' : '#f9c2ff'},
      ]}>
      <Text style={styles.name}>{name}</Text>
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item
            id={item.id}
            name={item.name}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 32,
  },
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';

import Image from 'react-native-image-progress';
import {StackNavigator} from 'react-navigation';
import coverBook1 from './coverBook/coverBook1';
import { Data } from '../data';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.getListCall = this.getListCall.bind(this);
    this.GetListItem = this.GetListItem.bind(this);
    this.state = {
      JSONResult: '',
    };
  }

  componentDidMount() {
    this.getListCall();
  }

  getListCall() {
    const that = this;
    const dataBook = Data;
    console.log('-----------url:' + dataBook);

    fetch(dataBook, {method: 'GET'})
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (result.status.response === 'success') {
          that.setState({
            JSONResult: result.data,
          });
        }
         console.log(result.data_list);
      })
      .catch(function (error) {
        console.log('-------- error ------- ' + error);
        alert('result:' + error);
      });
  }

  GetListItem(name) {
    Alert.alert(name);
  }

  ItemSeparatorLine = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#111a0b',
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Data}
          ItemSeparatorComponent={this.ItemSeparatorLine}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={this.GetListItem.bind(this, item.p_title)}>
              <View style={styles.container}>
                <Image
                  source={{uri: `data:image/gif;base64,${coverBook1}`}}
                  indicatorProps={{
                    size: 80,
                    borderWidth: 0,
                    color: 'rgba(150, 150, 150, 1)',
                    unfilledColor: 'rgba(200, 200, 200, 0.2)',
                  }}
                  style={{
                    width: 190,
                    height: 190,
                    alignItems: 'center',
                    margin: 5,
                    justifyContent: 'center',
                  }}
                />

                <Text style={styles.welcome}> {item.p_title} </Text>
              </View>
            </TouchableOpacity>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
