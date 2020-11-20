import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, BackHandler } from 'react-native';

export default class App extends Component {
  WEBVIEW_REF = React.createRef();
  state = {
    canGoBack: false,
  };
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }
  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  };
  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };
  render() {
    return (
      <>
        <WebView
          source={{ uri: 'https://minlaxz.me' }}
          ref={this.WEBVIEW_REF}
          onNavigationStateChange={this.onNavigationStateChange}
          style={styles.container}
        />
        <StatusBar style="light" />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:10
  },
});