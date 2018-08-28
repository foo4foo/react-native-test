// @flow
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  centered: {
    marginTop: 20,
    alignItems: 'center'
  },
  leftAligned: {
    textAlign: 'left'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 18,
    marginTop: 20
  },
  row: {
    marginTop: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    height: 70
  },
  rowLine: {
    marginTop: 5,
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'row', 
    flex: 1
  },
  time: {
    textAlign: 'right'
  },
  branch: {
    textAlign: 'left'
  },
  commitMessage: {
    textAlign: 'left'
  }
});

export { styles };
