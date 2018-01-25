import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
import {styles,width} from './style'
const LeftData = require("../util/HomeTopMiddleLeft.json")
import CenterRightDemo from './CenterRightView'

export default class CenterViewDemo extends Component {



    render() {
        return (
            <View style={{flexDirection:'row'}}>
                {/*绘制右边*/}
                {this.renderLeftView()}
                {/*绘制左边*/}
                <View style={[styles.centerRView,{width:width/2}]}>
                {this.renderRightView()}
                </View>

            </View>
        )
    }

    renderRightView(){
        var rightData = LeftData.dataRight;
        var items = [];
        rightData.map((i,index) =>{
            items.push(
                <CenterRightDemo
                title ={i.title}
                content = {i.subTitle}
                image = {i.rightImage}
                topColor = {i.titleColor}
                key ={index}
                marLeft={0.5}

            />)
        })
        return items;
    }



    renderLeftView() {
        var leftData = LeftData.dataLeft[0]
        return (
            <View style={styles.centerView}>
                <Image source={require('../image/mdqg.png')} style={styles.centerLeftImage} resizeMode={'cover'}/>
                <Image source={require('../image/yyms.png')} style={styles.centerLeftImage}/>
                <Text style={styles.centerLeftMText}>{leftData.title}</Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <Text style={styles.centerLeftLText}>{leftData.price}</Text>
                    <Text style={styles.centerLeftRText}>{leftData.sale}</Text>
                </View>
            </View>

        )
    }
}