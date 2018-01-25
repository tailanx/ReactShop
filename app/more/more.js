import React, {Component, propTypes} from 'react'
import {Image, Text, View} from 'react-native'
import {styles} from './style'
import ItemView from './itemView'

export class MoreDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                {/**顶部的tab**/}
                {this._renderTopView()}

                {/**绘制item**/}
                <ItemView leftTitle={"扫一扫"}
                          isShowSwift={false}
                          viewMarginTop = {10}
                />
                <ItemView leftTitle={"省流量模式"}
                          isShowSwift={true}
                          viewMarginTop = {10}
                />
                <ItemView leftTitle={"消息提醒"}
                          isShowSwift={false}
                />
                <ItemView leftTitle={"邀请好友"}
                          isShowSwift={false}
                />
                <ItemView leftTitle={"清空缓存"}
                          isShowSwift={false}
                          rightTitle ={"1.94M"}
                />
                <ItemView leftTitle={"意见反馈"}
                          isShowSwift={false}
                          viewMarginTop = {10}
                />
                <ItemView leftTitle={"问卷调查"}
                          isShowSwift={false}
                />
                <ItemView leftTitle={"支付帮助"}
                          isShowSwift={false}
                />
                <ItemView leftTitle={"网络诊断"}
                          isShowSwift={false}
                />




            </View>
        )
    }

    //渲染头部
    _renderTopView() {
        return (
            <View style={styles.topView}>
                <Text style={styles.textView}>
                    更多
                </Text>
                <Image source={require('../image/icon_mine_setting.png')} style={styles.imageView}>
                </Image>
            </View>
        )
    }
}


