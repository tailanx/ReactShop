import {Dimensions, StyleSheet} from 'react-native'

export const {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    viewFont: {
        padding: 10,
        marginTop: 18,
    },
    homeView: {
        height: 66,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 96, 0, 1.0)'
    },

    font14: {
        fontSize: 16,
        textAlign: 'center',
        color: 'white'
    },
    textInputView: {
        marginTop: 22,
        height: 35,
        width: width * 0.75,
        backgroundColor: 'white',
        borderRadius: 12,
    },
    topImage: {
        width: 30,
        height: 30,
        padding: 10
    },
    imageView: {
        flexDirection: 'row',
        marginTop: 20
    },
    typeView: {
        flexDirection: 'row',
    },
    pageView: {
        height: 160,
        width: width
    },
    styleRound: {
        height: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    textRound: {
        fontSize: 16,
        marginLeft: 12
    },
    imageItem: {
        width: 45,
        height: 45
    },
    itemView: {
        width: width / 5,
        height: width / 5,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textItem: {
        textAlign: 'center',
        color: '#111111',
        fontSize: 14,
    },


    listView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: width
    },
    centerView: {
        width: width / 2,
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
    },
    centerLeftImage: {
        width: 125,
        height: 35,
        marginTop: 5,

    },
    centerLeftMText: {
        fontSize: 15,
        color: 'gray',
        textAlign: 'center',
        marginTop: 5
    },
    centerLeftLText: {
        fontSize: 13,
        color: 'blue',
        textAlign: 'center'
    },
    centerLeftRText: {
        fontSize: 13,
        color: '#aa0',
        backgroundColor: 'yellow',
    },

    rightText: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 8

    },
    rightCenterView: {
        width: 120,
        height: 40,
        marginRight: 8
    },
    rightView: {
        flexDirection: 'row',
        width: width / 2,
        justifyContent: 'space-between',
        height: 70,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#e8e8e8'
    },

    centerRView: {
        height: 140,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    rightRView: {
        justifyContent: 'center'
    },
    mallImage: {
        width: width / 3,
        height: width / 5,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 5,
    },
    textSale: {
        position: 'absolute',
        bottom: 40,
        width: 60,
        height: 20,
        backgroundColor: 'yellow'
    },
    textMall: {
        justifyContent: 'center',
        alignItems: 'center'
    }


})