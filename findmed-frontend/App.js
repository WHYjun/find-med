import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Header, Button } from 'react-native-elements'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        {/*Header*/}
        <Header 
          centerComponent={{ text: 'FindMed', style: { color: 'black' } }}
          outerContainerStyles={{ backgroundColor: 'red' }}
        />
        {/*SearchBar*/}
        <View style={styles.searchBar}>
          <TextInput style={styles.searchText}/>
          <Button 
            buttonStyle={styles.button}
            title='Search'
            onPress={() => console.log('Pressed')}
          />
        </View>
        {/*SearchResult*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10
  },
  searchText: {
    flex: 1,
  },
  button: {
    height: 30,
    marginBottom: 8
  },
})