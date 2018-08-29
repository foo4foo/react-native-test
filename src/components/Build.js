// @flow
import React from 'react';

import {
  View,
  Text,
} from 'react-native';

import { getStatusColor } from '../helpers/buildsHelper';

import { styles } from './Build.css.js';

type Props = {
  navigation: Object
}

export default class Build extends React.Component<Props> {
  render() {
    const { navigation } = this.props;
    const params = navigation.state.params;

    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.title}>Circle CI</Text>
        </View>
        <View style={styles.leftAligned}>
          <Text style={styles.description}>Build No #{params.buildNo}</Text>
        </View>
        <View style={styles.leftAligned}>
          <Text>Project Name: {params.build.reponame}</Text>
          <Text>Branch: {params.build.branch}</Text>
          <Text style={getStatusColor(params.build.outcome, styles)}>Status: {params.build.outcome}</Text>
          <Text>Commit message:</Text>
        </View>
        <View style={styles.centered}>
          <Text>{params.build.subject}</Text>
        </View>
      </View>
    )
  }
}
