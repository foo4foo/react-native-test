// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { translate } from '../../utils/language.utils';
import {
  View,
  ActivityIndicator,
} from 'react-native';

import { styles } from './Profile.css.js';
import User from '../../components/User';

type Props = {
  user: Object,
  loading: boolean,
  navigation: Object
};

type State = {
  loading: boolean,
};

class Profile extends React.Component<Props, State> {
  static navigationOptions = {
    title: translate('HEADER.profile'),
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
      loading: true
    }
  }

  componentWillUpdate() {
  }

  componentWillReceiveProps(newProps) {
    const { navigation } = this.props;

    if (navigation.state.params) {
      this.setState({
        loading: false
      })
    }
  }

  componentDidMount() {
    const { navigation } = this.props;

    if (navigation.state.params) {
      this.setState({
        loading: false
      })
    }

    //this.subs = [
      //this.props.navigation.addListener('didFocus', () => { if (!this.props.navigation.state.params) { this.props.navigation.goBack(); } })
    //]
  }

  componentWillUnmount() {
    //this.subs.forEach((sub) => {
      //sub.remove();
    //});
  }

  render() {
    const { loading } = this.state;
    const { navigation } = this.props;

    const name = navigation.getParam('name');
    const email = navigation.getParam('email');
    const website = navigation.getParam('website');

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <User user={{
          name,
          email,
          website
        }}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
