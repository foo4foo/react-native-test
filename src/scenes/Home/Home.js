// @flow
import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View,
  AsyncStorage
} from 'react-native';
import firebase from 'react-native-firebase';

import { translate } from '../../utils/language.utils';

import { getUserByEmail } from '../../actions/UserActions';

import { SearchBar } from 'react-native-elements';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserSelector } from '../../selectors/userDataSelector';

import { styles } from './Home.css.js';
import User from '../../components/User';

type Props = {
  user: Object,
  loading: boolean,
  getUserByEmail: Function,
  fetchBuilds: Function,
  navigation: Object
};

type State = {
  email: string,
};

class Home extends Component<Props, State> {
  static navigationOptions = {
    title: translate('HEADER.home'),
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

  constructor(props) {
    super(props);

    this.state = {
      email: ''
    }
  }

  // znam da ne bih trebao koristiti willMount. ovo je samo zbog testiranja :D
  componentWillMount() {
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword('disko.misic@gmail.com', 'gibanica')
    //   .then(() => console.log('successfuly registered'))
    //   .catch(error => console.error(error));
    firebase
      .auth()
      .signInWithEmailAndPassword('disko.misic@gmail.com', 'gibanica')
      .then((user) => console.log(user))
      .catch(error => console.error(error));

    // const { currentUser } = firebase.auth();
    // console.log(currentUser);
  }

  async componentDidMount() {
    if (!(await this.apiKeyExists())) {
      this.props.navigation.navigate('Settings');
    }
  }

  async apiKeyExists(): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem('@CircleCIApi:key');
      if (!value) {
        return false;
      }
     } catch (error) {
       console.log(error);
     }

     return true;
  }

  onTextChange(text) : void {
    this.setState({ email: text });
    this.props.getUserByEmail(text);
  }

  render() {
    const { user } = this.props;

    return (
      <View>
        <SearchBar
          lightTheme
          round
          clearIcon
          onChangeText={(text) => this.onTextChange(text)}
          onClearText={() => this.setState({ email: '' })}
          placeholder='Search by email' />
          <View>
        {
          user && <User user={{
            name: user.name,
            email: user.email,
            website: user.website
          }} />
        }
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({ user: getUserSelector(state), loading: state.users.loading });

const mapDispatchToProps = dispatch => bindActionCreators({ getUserByEmail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
