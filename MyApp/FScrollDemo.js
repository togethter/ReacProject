import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
} from 'react-native';

var  TimerMixin = require('react-timer-mixin');
var  Dimensions = require('Dimensions');
var  sWidth = Dimensions.get('window').width;

var  FScrollDemo = React.createClass({
    mixins:[TimerMixin],
    render() {
        return (
            <View style={{marginTop: 20}}>
                {/*上*/}
                <ScrollView
                    ref='scrollView'
                horizontal={true}
                pagingEnabled={true}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd = {(e)=>this.onPagescrollEnd(e)}
                onScrollBeginDrag = {()=>this.clearTimer()}
                onScrollEndDrag = {()=>this.startTime()}
                >
                    {this.renderImgItem()}
                </ScrollView>
                {/*下*/}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicatorItem()}
                </View>
            </View>
        )
    },

    onPagescrollEnd(e) {

// 请求水平方方向的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;
        var currentPage = offsetX / sWidth;

        this.setState({
            selectedPage:currentPage,
        });

    },

    getDefaultProps() {
        return {
            durationTime:1000,
            // 接收其他界面传递过来的图片数组
            imageData:[]
        }
    },

    getInitialState() {
        return {
        selectedPage:0,
        }
    },

    componentDidMount() {
    this.startTime();
    },
    // 产生图片组件
    renderImgItem() {

        //    1.1 数组组件
        var  imgArr = [];
        for (var i = 0;i<this.props.imageData.length;i++) {
            var item =  this.props.imageData[i];
            imgArr.push(
                <Image key={i} source={{uri:item.img}} style={styles.imgStyle}/>
            );
        }
        return imgArr;
    },

    renderIndicatorItem() {
        var  IndicatorArr = [],style;
        for (var i = 0;i<this.props.imageData.length;i++) {
            style = (i == this.state.selectedPage) ? {color:'orange'}:{color: 'white'}
            IndicatorArr.push(
                <Text key={i} style={[{fontSize:30},style]}>
                    &bull;
                </Text>
            );
        }
        return IndicatorArr;
    },

    startTime() {
    var  scrollView = this.refs.scrollView;
    this.timer = this.setInterval(function () {

        var  activePage;
        if (this.state.selectedPage + 1 >= this.props.imageData.length) {
            activePage = 0;
        }  else  {
            activePage = this.state.selectedPage + 1;
        }
        this.setState({
            selectedPage:activePage,
        });
        var offsetX = activePage * sWidth;
        scrollView.scrollResponderScrollTo({x:offsetX,y:0,animated:true});
      },this.props.durationTime);
    },
    // 清除定时器
    clearTimer(){
      this.clearInterval(this.timer);
    },
});


const styles = StyleSheet.create({
    imgStyle:{
        width:sWidth,
        height:300,

    },
    indicatorViewStyle:{
        backgroundColor:'rgba(0,0,0,0.4)',
        flexDirection: 'row',
        position: 'absolute',
        bottom:0,
        width: sWidth,


    },
});

module .exports =  FScrollDemo;