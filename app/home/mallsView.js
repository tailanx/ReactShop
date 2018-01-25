import React, {Component} from 'react'
import {ScrollView,View} from 'react-native'
import ItemMallDemo from './itemMallView'
import PropsTypes from 'prop-types'

export default class MallsView extends Component {
    render() {
        return (
            <ScrollView
                style={{marginTop:0.5,backgroundColor:'white'}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}

            >
                {this.renderMalls()}

            </ScrollView>
        )
    }


    renderMalls() {
        var jsonDatas = this.props.datas;
        var items = [];
        if (jsonDatas) {
            jsonDatas.map((i, index) => {
                items.push(<ItemMallDemo
                    key = {index}
                    imageStr = {i.img}
                    shopName = {i.name}
                    shopSale = {i.showtext.text}
                />)
            })
        } else {
            return (<View
                style={{height: 100, backgroundColor: '#ff0000'}}>
            </View>)
        }

        return items;

    }

}
MallsView.prototypes = {
    datas: PropsTypes.array
}
MallsView.defaultProps = {
    datas: [],
}