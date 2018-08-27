// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ListItem } from 'react-native-elements';

import {
  View,
  ActivityIndicator,
  FlatList
} from 'react-native';

import { getUsers } from '../../actions/UserActions';

import { styles } from './Users.css';

class Users extends React.Component {

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
