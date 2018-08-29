// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBuilds } from '../../actions/buildsActions';
import {
  View,
  AsyncStorage,
  Text,
  TouchableOpacity
} from 'react-native';
import type { Build } from '../../types/builds';
import { getBuildsSelector } from '../../selectors/buildsDataSelector';

import { styles } from '../Builds/Builds.css.js';

type Props = {
  fetchBuilds: Function,
  navigation: Object,
  builds: Array<Build>,
}

type State = {

}

class Builds extends React.Component<Props, State> {
  async componentDidMount() {
    // iz nekog razloga ne radi kako treba
    //const apiKey = await AsyncStorage.getItem('@CircleCIApi:key');
    //console.log(apiKey);
    this.props.fetchBuilds('2b72a20c0cf7be14a7eef21a8b3879a838453828');
  }

  redirectToBuild(build: Build, buildNo: number): void {
    this.props.navigation.navigate('Build', { build, buildNo});
  }

  renderRow(build, buildsLength, i) {

    return (
      <View key={i} style={styles.row} onTouchStart={() => this.redirectToBuild(build, buildsLength - i)}>
        <View style={styles.rowLine}>
          <View style={styles.branch}>
            <Text>{`${build.branch} / ${build.reponame} #${buildsLength - i}`} </Text>
          </View>
          <View style={styles.time}>
            <Text>| {build.stop_time}</Text>
          </View>
        </View>
        <View style={styles.rowLine}>
          <Text>{build.subject} </Text>
          <Text>| status: {build.outcome}</Text>
        </View>
      </View>
    )
  }
  
  render() {
    const { builds } = this.props; 

    return (
      <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.title}>Circle CI</Text>
        </View>
        <View style={styles.leftAligned}>
          <Text style={styles.description}>Latest Builds</Text>
        </View>
        <View style={styles.centered}>
          {
            builds.map((b, i) => {
              return this.renderRow(b, builds.length, i)
            })
          }
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({ builds: getBuildsSelector(state) });

const mapDispatchToProps = dispatch => bindActionCreators({ fetchBuilds }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Builds)
