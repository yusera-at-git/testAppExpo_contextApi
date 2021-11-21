import React,{useState, useContext} from "react";
import DataListContext from '../context/DataListContext';
import {Text, TouchableOpacity, View, StyleSheet, TextInput} from 'react-native';
const SubmitInput = () => {
    const [text, setText] = useState('');
    const {data, addDataToList, removeFromList}= useContext(DataListContext);
    return (
      <View style={styles.container}>
         
        <TextInput 
        value={text}
        onChangeText={setText}
        style={styles.inputStyle}
        placeholder=" Enter Your Text Here"
        autoCapitalize='none'
        autoCorrect={false}
        />
          <TouchableOpacity style={styles.buttonStyle} onPress={()=>addDataToList(text)}>
             <Text style={styles.buttonTextStyle}>
                 Add
             </Text>
              </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
      
    },
    buttonStyle:{
        backgroundColor:'#6aee36',
        width:'70%',
       borderWidth:2,
        color:'white',
        padding:10,
        alignSelf:'center',
        margin:15
    },
    buttonTextStyle:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:18
    },
    inputStyle:{
        padding:10,
        fontSize:25,
        marginHorizontal:15,
        marginVertical:10,
        borderWidth:2
    }
})

export default SubmitInput;