// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  View
} from 'react-native';

type Props = {

}

type State = {

}

class Builds extends React.Component<Props, State> {
  renderRow() {
    return <View></View>
  }
  
  render() {
    return (
      <View>
        
    
      </View>
    )
  }
}

const mapStateToProps = state => ({  });

const mapDispatchToProps = dispatch => bindActionCreators({  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Builds)
