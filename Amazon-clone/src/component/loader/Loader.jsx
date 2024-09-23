import React from 'react'
import {PulseLoader} from 'react-spinners'
function Loader() {
  return (
    <div style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      height:"50vh",
    }}>
      <PulseLoader color='black'/>
    </div>
  );
}

export default Loader
