import React,{useContext} from "react";
import DataListContext from '../context/DataListContext';
import {Text, FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
const DisplayList = () => {
    const {data, addDataToList, removeFromList}= useContext(DataListContext);
    return (<View style={styles.constainerStyle}>
       
        <FlatList 
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>{
            return <View style={styles.itemStyle}>
                <Text style={{fontSize:18}}>
                {item.content}
            </Text>
            <TouchableOpacity style={styles.delButtonStyle} onPress={()=>removeFromList(item.id)}>
            <AntDesign name="delete" size={24} color="red" />
            </TouchableOpacity>
            </View>
        }}
        />
    </View>);
}


const styles= StyleSheet.create({
    constainerStyle:{
        flex:1,
        flexDirection:'row'
    },
    delButtonStyle:{
        padding:10
    },
    itemStyle:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:15,
        backgroundColor:"#36eee6",
        margin :5,
        flex:1,
        borderWidth:2
    }
})
export default DisplayList;