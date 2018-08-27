// @flow
import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View
} from 'react-native';

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
  getUserByEmail: Function
};

type State = {
  email: string,
};

class Home extends Component<Props, State> {
  static navigationOptions = {
    title: 'Home',
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

  onTextChange(text) {
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
