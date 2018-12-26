/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,

} from 'react-native';

// 引入创建的模块类
var  LoginView = require('./XMGLoginView');
var  ELifeCicle = require('./ELifeCicle');
var  FScrollDemo = require('./FScrollDemo');
var  imageData = require('./ImageDiect/imageData').data;
export default class MyApp extends Component {
  render() {
      return (
          //把模块类生成组件
      <FScrollDemo imageData={imageData}/>
      );
  }
}
AppRegistry.registerComponent('MyApp', () => MyApp);
