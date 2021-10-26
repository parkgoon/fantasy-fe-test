import {  
  Table  
} from 'antd';
import './App.less';
import React, {useState} from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'playerName',
    sorter: (a, b) => a.playerName.localeCompare(b.playerName)
  }  
];

var data, setData;

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params->', pagination, filters, sorter, extra);
  console.log('onclick data ->',data);
}

function App() {
  [data, setData]=useState(data);  

  fetch('http://localhost:8080/api/player/all')
    .then(function(result){      
      return result.json();
    })
    .then(function(json){      
      setData(json);
      console.log('json->',json);
      // data=json.data;
    });  

    return (
      <div className="App">
      {
        <Table columns={columns} dataSource={data} onChange={onChange}/>
      }
    </div>    
    );
  }
export default App;