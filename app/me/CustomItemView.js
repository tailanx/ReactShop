import React ,{Component}from 'react'
import PropsTypes from 'prop-types'
import {Text,Image,View}from 'react-native'
import  {styles} from './style'
export  default class CustomItemView extends Component{
    render(){
        return(
            <View style={[styles.commontView,{marginTop:this.props.marginTop}]}>
                {/*绘制左边的布局*/}
                {this._renderLeft()}
                {/*绘制右边的布局*/}
                {this._renderRight()}

            </View>

        )
    }
    _renderRight(){
        return(
            <View style={styles.topLeftView}>
                {this.props.rightIcon.length !== 0? <Image source={this.props.rightIcon} style={styles.commontRightIcon} ></Image> : null}
                {this.props.rightTitle.length !== 0 ?<Text style={styles.commontRightText}>{this.props.rightTitle}</Text>:null}

                <Image source={require('../image/home_arrow.png')} style={styles.commontindicator}></Image>
            </View>
        )
    }

    _renderLeft(){
        return (
        <View style={styles.topLeftView}>
            <Image source={this.props.leftIcon} style={styles.commontImage}></Image>
            <Text style={styles.commontText}>{this.props.leftTitle}</Text>


        </View>
        )
    }
}
CustomItemView.prototypes = {
    leftIcon:PropsTypes.String,
    leftTitle:PropsTypes.String,
    rightIcon:PropsTypes.String,
    rightTitle:PropsTypes.String,
    marginTop:PropsTypes.number,

}
CustomItemView.defaultProps = {
    leftIcon:'',
    leftTitle:'',
    rightIcon:'',
    rightTitle:'',
    marginTop:0,

}