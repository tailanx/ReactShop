import React ,{Component}from 'react'
import {Text,View,Image,Switch} from 'react-native'
import PropTypes from 'prop-types'
import {styles} from './style'
export  default class ItemView extends Component{
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
        }
    }
    render() {
        return (
            <View style={[styles.itemView,{marginTop:this.props.viewMarginTop}]}>
                <Text style={styles.leftText}>
                    {this.props.leftTitle}
                </Text>
                {/**绘制右边**/}
                {this._renderRight()}


            </View>
        )
    }

    _renderRight() {
        if (this.props.isShowSwift) {
            return (
                <Switch value={this.state.selected} onValueChange={() => this._onChange()} style={{marginRight:12}}/>
            )
        } else {
            return (
                <View style={styles.rightView}>
                    <Text style={styles.rightText}>{this.props.rightTitle}</Text>
                    <Image source={require('../image/home_arrow.png')}></Image>
                </View>
            )
        }

    }


    _onChange() {
        this.setState({
            selected: !this.state.selected
        })
    }
}


ItemView.prototypes = {
    leftTitle: PropTypes.String,
    isShowSwift: PropTypes.Boolean,
    rightTitle: PropTypes.String,
    viewMarginTop:PropTypes.Number,
}
ItemView.defaultProps = {
    leftTitle: '',
    isShowSwift: false,
    rightTitle: '',
    viewMarginTop:0
}


