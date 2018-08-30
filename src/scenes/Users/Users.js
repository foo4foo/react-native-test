// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { translate } from '../../utils/language.utils';
import { ListItem } from 'react-native-elements';

import {
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';

import { getUsers } from '../../actions/UserActions';

import { styles } from './Users.css.js';

type Props = {
  users: Array<Object>,
  loading: boolean,
  getUsers: Function,
  navigation: Object
};

type State = {
  email: string,
};


class Users extends React.Component<Props, State> {
  static navigationOptions = {
    title: translate('HEADER.users'),
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

  componentDidMount() {
    this.props.getUsers();
  }

  keyExtractor = (item, index) => `user-${item.name}-${index}`

  renderItem = ({ item }) => (
    <ListItem
      onPress={() => this.props.navigation.navigate('Profile', item)}
      title={item.name}
      titleStyle={{ color: 'black', fontWeight: 'bold' }}
      subtitle={item.email}
      roundAvatar
      avatar={{
        uri: `https://www.dacia.co.uk/etc/designs/dacia_v3/18.10.1.RENAULT-9/common-assets/img/avatar/avatar.png`,
        width: 25,
        height: 25
      }}
    />
  )

  render() {
    const { loading, users } = this.props;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={users}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({ users: state.users.list, loading: state.users.loading });

const mapDispatchToProps = dispatch => bindActionCreators({ getUsers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users)
