import React, {Component} from 'react'
import {Image, Text, View} from 'react-native'
import {styles} from './style'
import CustomItemView from './CustomItemView'

const NUMBER = [{
    name: '优惠券',
    number: '111'
}, {
    name: '评价',
    number: '10'
}, {
    name: '收藏',
    number: '1222'
}]
const ORDERS = [
    {
        name:'待付款',
        imageNmae:require('../image/order1.png')
    },
    {
        name:'待使用',
        imageNmae:require('../image/order2.png')
    } ,
    {
        name:'待评价',
        imageNmae:require('../image/order3.png')
    },
    {
        name:'退款/售后',
        imageNmae:require('../image/order4.png')
    }

]

export class MeDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/***绘制头部的UI*/}
                {this._renderTopView()}
                {/**绘制第二部分**/}
                <View style={styles.selectorView}>
                    {this._renderSecondView()}
                </View>
                {/*绘制公共的组件item*/}
                <CustomItemView
                    leftIcon = {require('../image/collect.png')}
                    leftTitle = {"我的订单"}
                    rightTitle = {'查看全部订单'}
                />
                {/*绘制订单*/}
                <View style={styles.orderView} >
                {this._renderOrder()}
                </View>

                {/*绘制其他条目*/}
                <CustomItemView
                    leftIcon = {require('../image/draft.png')}
                    leftTitle = {"钱包"}
                    rightTitle = {'账户余额:$100'}
                    marginTop={10}
                />
                <CustomItemView
                    leftIcon = {require('../image/like.png')}
                    leftTitle = {"抵用券"}
                    rightTitle = {'0'}
                />

                <CustomItemView
                    leftIcon = {require('../image/card.png')}
                    leftTitle = {"商城抵用券"}
                    marginTop={10}
                />
                <CustomItemView
                    leftIcon = {require('../image/new_friend.png')}
                    leftTitle = {"今日推荐"}
                    rightIcon={require("../image/icon_hot.png")}
                    marginTop={10}
                />
                <CustomItemView
                    leftIcon = {require('../image/pay.png')}
                    leftTitle = {"我要合作"}
                    rightTitle = {"轻松开店，招财进宝"}
                    marginTop={10}

                />


            </View>
        )
    }
    _renderOrder(){
        let orders = [];
        ORDERS.map((i,index) =>{
            orders.push(<View key = {index} style={styles.contentView}>
                <Image source={i.imageNmae} style={styles.orderImage}/>
                <Text style={styles.commontRightText}>
                    {i.name}
                </Text>
            </View>)
        })
        return orders;

    }

    //绘制第二部分
    _renderSecondView() {
        let selectionView = [];
        for (var i = 0; i < NUMBER.length; i++) {
            selectionView.push(
                <View key={i} style={styles.selectItemView}>
                    <View style={styles.contentView}>
                        <Text style={styles.selectTextView}>
                            {NUMBER[i].number}
                        </Text>
                        <Text style={[styles.selectTextView, {marginTop: 5}]}>
                            {NUMBER[i].name}
                        </Text>
                    </View>

                    {i != NUMBER.length - 1 ?  <View style={styles.viewLine}></View>: null}

                </View>
            )
        }

        return selectionView
    }


    _renderTopView() {
        return (
            <View style={styles.topView}>
                {this._renderTopLeftView()}
                <Image
                    source={require('../image/icon_cell_rightarrow.png')}
                    style={{width: 12, height: 12, marginRight: 12}}
                />


            </View>
        )
    }

    //绘制第一部分的左边
    _renderTopLeftView() {
        return (
            <View style={styles.topLeftView}>
                <Image source={require('../image/tttj.png')} style={styles.imageView}/>
                <Text style={styles.textView}> 刘子阳</Text>
                <Image source={require("../image/avatar_vip.png")} style={{width: 12, height: 12, marginLeft: 8}}/>
            </View>
        )
    }
}