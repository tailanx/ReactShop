import React, {Component} from 'react'

import {View,Text,Image} from 'react-native'
import PropsTypes from 'prop-types'
import {styles ,width} from "./style"

export  default  class CenterRightDemo extends Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <View style={[styles.rightView,{marginLeft:this.props.marLeft,marginTop:this.props.marTop, width:this.props.widthW}]}>
                <View style={styles.rightRView}>
                    <Text style={[styles.rightText,{color:this.props.topColor}]}>{this.props.title}</Text>
                    <Text style={styles.rightText}>{this.props.content}</Text>
                </View>

                <Image source = {require('../image/tttj.png')} style={styles.rightCenterView}></Image>

            </View>
        )
    }
}


CenterRightDemo.prototypes = {
    title:PropsTypes.String,
    content:PropsTypes.String,
    image:PropsTypes.String,
    topColor:PropsTypes.String,
    marLeft:PropsTypes.Number,
    marTop:PropsTypes.Number,
    widthW:PropsTypes.Number,
}
CenterRightDemo.defaultProps ={
    title:'',
    content:'',
    image:'',
    topColor:'white',
    marLeft:0,
    marTop:0,
    widthW:width/2
}

