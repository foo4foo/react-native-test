import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  View
} from 'react-native';

import { getUser, getUserByEmail } from '../../actions/UserActions';

import { SearchBar } from 'react-native-elements';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { styles } from './Home.css';
import User from '../../components/User';

class Home extends Component {
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

const mapStateToProps = state => ({ user: state.users.user, loading: state.users.loading });

const mapDispatchToProps = dispatch => bindActionCreators({ getUser, getUserByEmail }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
