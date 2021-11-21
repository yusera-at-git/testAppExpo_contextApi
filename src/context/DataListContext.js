import React,{createContext, useState} from 'react';
const DataListContext = createContext();


export const DataListProvider =(props)=>{
   const [dataList, setDataList] = useState([]);

   const addDataToList=(cont)=>{
       setDataList([...dataList, {id: `${Math.floor(Math.random()*9999999)}`,content:cont}])
   }

   const removeFromList=(item)=>{
       newData=dataList.filter((i)=>i.id!==item)
       setDataList(newData)
   }
    return <DataListContext.Provider value={{data:dataList, addDataToList, removeFromList}}>
        {props.children}
    </DataListContext.Provider>
}

export default DataListContext;

