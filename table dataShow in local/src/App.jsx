import './App.css';
import React, { useState, useEffect } from 'react';
import Data from './component/Data';
import Table from './component/Table';
function App() {


  // getdata localStorage

  const getDatalocal = () => {
    const data = localStorage.getItem('don')
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }


  const [actualDetail, setactualDetail] = useState(getDatalocal())
  let [detail, setdetail] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobile: "",
    password: "",
    gender: "",
    term: false


  })
  const deletebtn = (index) => {
    const copydetail = [...actualDetail]
    copydetail.splice(index, 1)
    setactualDetail(copydetail)
  }

  // savedata localStorage

  useEffect(() => {
    localStorage.setItem('don', JSON.stringify(actualDetail))

  }, [actualDetail])

  // const Tabledata = (value) => {
  //   setdetail(value)
  //   console.log(value);
  // }
  return (
    <div className=' container-fluid mt-3'>
      <div className='row'>
        <div className='col-lg-5' >

          <Table p={detail} send={setdetail} actualDetail={actualDetail} setactualDetail={setactualDetail} />
        </div>
        <div className='col-lg-6'>
          <Data actualDetail={actualDetail} deletebtn={deletebtn} />

        </div>
      </div>




    </div>
  )

}

export default App;
