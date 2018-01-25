import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
import PropsTypes from 'prop-types'

import {styles} from './style'

export default class ItemMallDemo extends Component {
    render() {
        return (
            <View style={{marginRight: 10, marginLeft: 10}}>


                <View style={styles.textMall}>
                    <Image source={require('../image/tttj.png')}
                           resizeMode={'cover'}
                           style={styles.mallImage}/>
                    <Text style={{marginTop: 6, marginBottom: 6}}>
                        {this.props.shopName}
                    </Text>

                </View>

                <Text style={styles.textSale}>
                    {this.props.shopSale}
                </Text>

            </View>
        )
    }
}


ItemMallDemo.prototypes = {
    shopName: PropsTypes.String,
    shopSale: PropsTypes.String,
    imageStr: PropsTypes.String,
}
ItemMallDemo.defaultProps = {
    shopName: '白云万达广场',
    shopSale: '32家优惠 ',
    imageStr: ''
}