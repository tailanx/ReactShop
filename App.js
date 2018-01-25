/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {HomeDemo} from "./app/home/home"
import {MeDemo} from "./app/me/me"
import {MoreDemo} from "./app/more/more"
import {ShopDemo} from "./app/shop/shop"
import {UIDemo} from "./app/ui"


import {Scene,Router,Stack} from 'react-native-router-flux'

export default class App extends Component {
  render() {
    return (
        <Router>
          <Scene key  = 'root'>
            <Stack key="init" back>
            <Scene key="ui" initial component = {UIDemo} hideNavBar/>
            {/*<Scene*/}
             {/*key = 'Homapage'*/}
             {/*tabs = {true}*/}
             {/*hideNavBar  ={true}*/}
             {/**/}
            {/*/>*/}

            </Stack>
          </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
