// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBuilds } from '../../actions/buildsActions';
import {
  View,
  AsyncStorage,
  Text
} from 'react-native';

import { getBuildsSelector } from '../../selectors/buildsDataSelector';

import { styles } from '../Builds/Builds.css.js';

type Props = {
  fetchBuilds: Function,
  navigation: Object,
}

type State = {

}

class Builds extends React.Component<Props, State> {
  async componentDidMount() {
    //const apiKey = await AsyncStorage.getItem('@CircleCIApi:key');
    //console.log(apiKey);
    this.props.fetchBuilds('2b72a20c0cf7be14a7eef21a8b3879a838453828');
  }

  renderRow(build, i) {
    console.log(build);
    return (
      <View key={i} style={styles.row}>
        <View style={styles.rowLine}>
          <View style={styles.branch}>
            <Text>{`${build.branch} / ${build.reponame} #${i + 1}`} </Text>
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
              return this.renderRow(b, i)
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
