import React, {Component} from 'react'
import {Dimensions, Image, ListView, ScrollView, Text, View} from 'react-native'
import {styles} from './style'
import PropsTypes from 'prop-types'
import TopMenuData from '../util/TopMenu.json'

const colorList = ['red', 'blue']
const {width, height} = Dimensions.get("window")
const distanceTime = 10000


export default class ListTypeView extends Component {
    constructor(props) {
        super(props)
        this.jsonData = TopMenuData.data

        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => {
                r1 !== r2
            }
        })

        this.state = {
            currentPage: 0,
            dataSource: ds.cloneWithRows(this.jsonData[0])
        }
    }


    componentDidMount() {
        this.timer = setInterval(() => {
            if (this.state.currentPage >= colorList.length - 1) {
                this.refs.ScrollView.scrollTo({x: 0, animated: true})
                this.setState({
                    currentPage: 0
                })
            } else {
                this.refs.ScrollView.scrollTo({x: width, animated: true})
                this.setState({
                        currentPage: this.state.currentPage + 1
                    }
                )
            }
        }, distanceTime)

    }

    componentWillUnmount() {
        this.clearInterval(this.timer)
    }

    render() {
        return (
            <View>
                <ScrollView pagingEnabled={true} style={styles.typeView} horizontal={true}
                            onMomentumScrollEnd={(e) => this._onMomentumScrollEnd(e)}
                            showsHorizontalScrollIndicator={false}
                            ref='ScrollView'
                >
                    {/*渲染滑动*/}
                    {this._renderTypeView()}
                </ScrollView>
                {/*绘制圆点*/}
                <View style={styles.styleRound}>
                    {this._renderRoundView()}
                </View>
            </View>
        )
    }


    _onMomentumScrollEnd(e) {
        this.setState({
            currentPage: Math.floor((e.nativeEvent.contentOffset.x) / width),
        })
    }

    //绘制圆点
    _renderRoundView() {
        let roundColor = [];
        for (var i = 0; i < this.jsonData.length; i++) {
            roundColor.push(
                <Text style={[{color: (i === this.state.currentPage) ? 'orange' : 'gray'}, styles.textRound]} key={i}>
                    &bull;
                </Text>
            )

        }
        return roundColor;
    }


    _renderTypeView() {
        var viewList = [];
        for(var i = 0 ; i< this.jsonData.length;i++){
            var dataSource = new ListView.DataSource({rowHasChanged:(r1,r2) =>{r1 !== r2}}).cloneWithRows(this.jsonData[i])
            viewList.push(
                <ListView
                    contentContainerStyle={styles.listView}
                    dataSource={dataSource}
                    key={i}
                    renderRow={(rowData) => this._renderRows(rowData)}
                />
            )
        }
        return viewList;
    }


    _renderRows(rowData) {
        return (
            <View style={styles.itemView}>
                <Image source={require('../image/ly.png')} style={styles.imageItem}>
                </Image>
                <Text style={styles.textItem}>
                    {rowData.title}
                </Text>
            </View>
        )
    }
}
