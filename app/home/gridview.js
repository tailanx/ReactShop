import React, {Component} from 'react'
import {View} from 'react-native'
import CenterRightDemo from './CenterRightView'

const datas = [
    {
        title: "踏青季特惠",
        content: '春游装备1元购',
        topColor: '#ffff00',
        marTop: 0.5,

    },
    {
        title: "长假住酒店",
        content: '百万红包天天领',
        topColor: '#ff2200',
        marTop: 0.5,

    },
    {
        title: "长假看大片",
        content: '特惠抢票15.9',
        topColor: '#00ff00',
        marTop: 0.5,

    },
    {
        title: "热门团购",
        content: '看大家都在买什么',
        topColor: '#ff00ff',
        marTop: 0.5,

    }
]

export default class GridViewDemo extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
                {/*绘制优惠活动*/}
                {this.renderYhData()}
            </View>
        )
    }

    renderYhData() {
        var itemData = [];
        datas.map((i, index) => {
            itemData.push(
                <CenterRightDemo
                    key={index}
                    title={i.title}
                    content={i.content}
                    topColor={i.topColor}
                    marTop={i.marTop}
                />
            )
        })
        return itemData
    }
}