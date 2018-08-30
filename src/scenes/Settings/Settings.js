// @flow
import React from 'react';
import { translate } from '../../utils/language.utils';
import { 
  View, 
  Text,
  TextInput,
  Button,
  AsyncStorage
} from 'react-native';

import { styles } from './Settings.css.js';

type Props = {

};

type State = {
  text: string
}

export default class Settings extends React.Component<Props, State> {
  static navigationOptions = {
    title: translate('HEADER.settings'),
    headerTintColor: '#red',
    headerStyle: {
      backgroundColor: '#ffffff',
      borderBottomColor: '#2F95D6',
      borderBottomWidth: 3,
    },
    headerTitleStyle: {
      fontSize: 18,
    },
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      text: 'Enter API Key ...'
    }
  }

  async saveApiKey(key: string) {
    try {
      await AsyncStorage.setItem('@CircleCIApi:key', key);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { text } = this.state;

    return (
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={text => this.setState({ text })} value={text} />
        <Button
          onPress={() => this.saveApiKey(text)}
          title="Save API Key"
          color="#841584"
        />
      </View>
    )
  }
};
