// @flow
import React from 'react';

import {
  View,
  Text
} from 'react-native';

import { styles } from './Build.css.js';

type Props = {
  build: Object
}

export default class Build extends React.Component<Props> {
  render() {
    const { build } = this.props;

    return (
      <View style={styles.row}>
        <Text>master / react-tutorial #6</Text>
        <Text>Commit message</Text>
      </View>
    )
  }
}
