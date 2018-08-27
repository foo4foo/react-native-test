// @flow
import React from 'react';

import { View, Text, Image } from 'react-native';

import { styles } from './User.css.js';

type Props = {
  user: Object
};

export default class User extends React.Component<Props> {
  render() {
    const { user } = this.props;

    return (
      <View style={styles.profileContainer}>
        <Image
            source={{ uri: 'https://www.dacia.co.uk/etc/designs/dacia_v3/18.10.1.RENAULT-9/common-assets/img/avatar/avatar.png' }}
            style={styles.avatar}
        />
        <Text style={{ fontSize: 20 }}>{ user.name }</Text>
        <Text style={{ fontSize: 15 }}>{ user.email }</Text>
        <Text style={{ fontSize: 12 }}>{ user.website }</Text>
    </View>
    )
  }
}
