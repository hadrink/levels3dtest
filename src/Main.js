import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScansList from './containers/scansList'

export default class Main extends React.Component {
  render() {
    return (
        <ScansList />
    );
  }
}
