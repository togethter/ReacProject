import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
//导入类库

var  Dimensions = require('Dimensions');
var  sWidth = Dimensions.get('window').width;
export default class MyApp extends Component {

    render() {
        return (

            <View style = {styles.outViewStyle}>

                {/*头部分*/}
                <View style={styles.headerStyle}>
                    <Image source={{uri:'https://facebook.github.io/react/logo-og.png'}}
                           style={{width: 60, height: 60,borderRadius: 30}}
                    />
                </View>
                {/*输入账号和密码*/}
                <TextInput placeholder='输入账号' style={[styles.inputStyle,{marginTop:5}]}/>
                {/*输入账号和密码*/}
                <TextInput placeholder='输入密码' password = {true} style={styles.inputStyle}/>
                {/*登录按钮*/}
                <TouchableOpacity style={styles.btnstyle} onPress={()=>this.clickBtn()} >
                    <Text style={styles.btnTextStyle}>登录</Text>
                    {/*设置*/}
                </TouchableOpacity>
                <View style={styles.settingStyle}>
                    <Text style={{color: 'blue'}}>无法登陆</Text>
                    <Text style={{color: 'blue'}}>新用户？</Text>
                </View>
                {/*尾部*/}
                <View style={styles.footerView}>
                    <Text>其他方式登录</Text>
                </View>

            </View>
        );
    }
    clickBtn(){
    alert('点击了登录')
    }


}

const styles = StyleSheet.create({

    outViewStyle:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#e8e8e8',

    },
    headerStyle: {
      height:120,
        width:sWidth,
      backgroundColor:'#e8e8e8',
        justifyContent:'center',
        alignItems:'center',
    },
    inputStyle: {
        height:44,
        backgroundColor: 'white',
        marginBottom: 1,
        textAlign: 'center',
    },
    btnstyle: {
        height: 44,
        width:sWidth * 0.95,
        backgroundColor:'orange',
        marginTop: 30,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTextStyle: {
        backgroundColor:'rgba(0,0,0,0)',
        color:'white',
        fontSize:18,
    },
    settingStyle:{
        // 设置主轴的方向
        flexDirection: 'row',
        // 宽度
        width: sWidth * 0.95,
        justifyContent: 'space-between',
        marginTop: 10,
    },
    footerView: {
        flexDirection: 'row',
        alignItems:'center',
        // 绝对定位
        position: 'absolute',
        bottom:20,
        left:10,
    }
});

// 把组件类作为模块输出
module .exports = MyApp;