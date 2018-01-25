import React, {Component} from 'react'
import {HomeDemo} from "./home/home"
import {Image, Text, View} from 'react-native'
import {MeDemo} from "./me/me"
import {MoreDemo} from "./more/more"
import {ShopDemo} from "./shop/shop"
import {styles} from "./util/style"

import TabNavigator from 'react-native-tab-navigator'

const TabNavigatorItem = TabNavigator.Item;

export  class UIDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'Home'
        }
    }

    _renderItem(tag, icon, selectedIcon,  HomeDemo,badge) {
        return (
            <TabNavigatorItem
                title={tag}
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image source={icon} style={styles.tab_image}/>}
                renderSelectedIcon={() => <Image source={selectedIcon} style={styles.tab_image}/>}
                badgeText={badge}
                onPress={() => this.setState({selectedTab: tag})}>
                {HomeDemo}
            </TabNavigatorItem>
        )
    }


    render() {
        return (
            <View style={styles.tabContainer}>
                <TabNavigator>
                    {/*首页*/}
                    {this._renderItem('Home', require('./image/icon_tabbar_homepage.png'), require('./image/icon_tabbar_homepage_selected.png'),  <HomeDemo/>)}
                    {/*商家*/}
                    {this._renderItem('Shop', require('./image/icon_tabbar_merchant_normal.png'), require('./image/icon_tabbar_merchant_selected.png'), <ShopDemo/>)}
                    {/*我的*/}
                    {this._renderItem('Me', require('./image/icon_tabbar_mine.png'), require('./image/icon_tabbar_mine_selected.png'), <MeDemo/>,"1")}
                    {/*更多*/}
                    {this._renderItem('More', require('./image/icon_tabbar_misc.png'), require('./image/icon_tabbar_misc_selected.png'), <MoreDemo/>)}


                </TabNavigator>
            </View>
        )
    }
}