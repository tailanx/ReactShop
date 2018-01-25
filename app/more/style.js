import {StyleSheet} from 'react-native'
export  const  styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#e8e8e8"
    },
    topView:{
        flexDirection:'row',
        height:44,
        justifyContent:'center',
        backgroundColor:'rgba(256,96,0,1.0)',
        alignItems:'center'

    },
    textView:{
        fontSize:18,
        color:'white',
        textAlign:'center',
        fontWeight:'bold'
    },
    imageView:{
        width:25,
        height:25,
        position:'absolute',
        right:10,

    },
    itemView:{
        flexDirection:'row',
        height:40,
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
    },
    leftText:{
        fontSize:15,
        color:"#111100",
        alignItems:'center',
        marginLeft:20,
    },
    rightText:{
        fontSize:15,
        color:"gray",
        alignItems:'center',
        marginRight:8,
    },
    rightView:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:20
    },




})
