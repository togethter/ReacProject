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

var ElifeCicle = React.createClass({
    // 初始化属性 只读不能修改
    getDefaultProps() {

        return {
            name:'张三丰'
        }
    },
    // 初始化属性 技能够读也能写
    getInitialState() {
    return{
    age:18
    }
    },
    // 初始化，渲染界面
    render() {

        return(
            <View style={styles.textStyle}>
                <Text> 我叫{this.props.name}</Text>
                <Text> 今年{this.state.age}</Text>
                {/*不加()-- 调用的时候触发；和加()----运行到这里触发*/}
                {/*{(st)=>this.dealWithAge(st)}用于串参数 */}
                <TouchableOpacity onPress={this.dealwithAge}>
                    <Text>点我+1</Text>
                </TouchableOpacity>
                    <TextInput ref='textInput' style={{width:300,height:40,borderWidth: 1,borderColor:'red'}}/>
            </View>
        )
    },
    // 处理一些耗时的操作，比如请求网络数据 定时器
    componentDidMount() {

    },

    // 处理年龄
    dealwithAge() {
    this.setState({
        age:this.state.age +=1
    });
    // 让输入框获得焦点
        this.refs.textInput.focus();
    },
});

const styles = StyleSheet.create({
    textStyle: {
 flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'yellow',
    },



});


module.exports = ElifeCicle;