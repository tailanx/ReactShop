import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },
    topView: {
        height: 120,
        backgroundColor: 'rgba(252,96,0,1.0)',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    topLeftView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
    },
    imageView: {
        width: 46,
        height: 46,
        borderRadius: 23,
        marginLeft: 12,
    },
    textView: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 8
    },
    selectorView: {
        flexDirection: 'row',
        opacity: 0.7,
        backgroundColor: 'rgba(252,96,0,1.0)',

    },
    selectItemView: {
        flex: 1,
        height: 80,
        flexDirection: 'row'
    },
    contentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectTextView: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    viewLine: {
        width: 0.5,
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        height: 70,

    },
    viewLineNone: {
        width: 0.5,
        marginTop: 5,
        marginBottom: 5,
        height: 70,
    },
    commontView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height:46,
        backgroundColor:'white'
    },
    commontImage:{
        width:30,
        height:30,
        borderRadius:15
    },
    commontText:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold',
        marginLeft:8,
    },
    commontindicator:{
        width:25,
        height:25
    },
    commontRightText:{
        fontSize:12,
        marginRight:8,
    },
    commontRightIcon:{
        width:40,
        height:25,
        marginRight:8
    },


    orderView:{
        flexDirection:'row',
        marginTop:0.5,
        backgroundColor:'white',
        height:90,
    },
    orderImage:{
        width:40,
        height:40,
    }





})
