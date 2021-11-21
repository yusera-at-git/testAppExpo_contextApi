import React,{useState} from "react";
import {View, Text, StyleSheet} from 'react-native';
import DisplayList from "../components/DisplayList";
import SubmitInput from "../components/SubmitInput";

const Home = () => {
    const [list, setList]=useState([]);
    function addToList(listItem){
        setList([...list, {content:`${listItem}`}])
        
    }
    console.log(list)
    return(
        <View style={styles.container}>
           <View style={{flexDirection:'row'}}>
        <SubmitInput buttonPress={(item)=>addToList(item)}/>
           </View>
           <DisplayList data={list}/>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   flexWrap:'wrap',
      backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
      
    },
  });


  export default Home;