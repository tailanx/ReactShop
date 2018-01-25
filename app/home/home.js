import React, {Component} from 'react'
import {Image, ScrollView, Text, TextInput, View} from 'react-native'
import {styles, width} from './style'
import ListTypeView from './listTypeView'
import TopMenuData from '../util/TopMenu.json'
import CenterViewDemo from "./CenterView"
import CenterRightDemo from './CenterRightView'
import GridViewDemo from './gridview'
import CustomItemView from '../me/CustomItemView'
import MallsView from "./mallsView"

const saleMalls = require('../util/XMG_Home_D5.json')

export class HomeDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    _onChange(text) {
        this.setState({
            inputValue: text
        })
    }
    //渲染头部
    _renderHeader() {
        return (
            <View style={styles.homeView}>
                <View style={styles.viewFont}>
                    <Text style={styles.font14}>
                        广州
                    </Text>
                </View>
                <View>
                    <TextInput style={styles.textInputView} placeholder="输入商家, 品类, 商圈"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChange.bind(this)}
                               value={this.state.inputValue}
                    >
                    </TextInput>

                </View>
                <View style={styles.imageView}>
                    <Image source={require('../image/icon_homepage_message.png')}
                           style={[styles.topImage, {marginLeft: 12, marginRight: 12}]}/>
                    <Image source={require('../image/icon_homepage_scan.png')} style={styles.topImage}/>
                </View>

            </View>
        )

    }

    render() {
        var menuData = TopMenuData.data;
        return (
            <View style={styles.tabContainer}>
                <ScrollView>
                    {this._renderHeader()}
                    {/*绘制分类*/}
                    <ListTypeView
                        datas={menuData}
                    />
                    {/*绘制中间的布局*/}
                    <CenterViewDemo/>
                    {/*绘制中间部分*/}
                    {this.renderSingleView()}
                    {/*绘制中间的4个格子*/}
                    <GridViewDemo/>
                    {/*热门*/}
                    <CustomItemView
                        leftIcon = {require('../image/rm.png')}
                        leftTitle  = {'购物中心'}
                        rightTitle = {`查看${saleMalls.count}家`}
                        marginTop  = {10}

                    />

                    <MallsView
                    datas = {saleMalls.data}
                    />

                    <CustomItemView
                        leftIcon = {require('../image/rm.png')}
                        leftTitle  = {'热门频道'}
                        rightTitle = {'查看全部'}
                        marginTop  = {10}
                    />


                    <CustomItemView
                        leftIcon = {require('../image/rm.png')}
                        leftTitle  = {'猜你喜欢'}
                        marginTop  = {10}
                    />


                </ScrollView>
            </View>


        )
    }



    renderSingleView() {
        return (
            <CenterRightDemo
                title={"最高立减25"}
                content={"京东商城优惠券"}
                topColor={"#ff0000"}
                marTop={10}
                widthW={width}
            />
        )
    }

}