import React from 'react';
import './App.css';

import Heading from './Heading'
import data from './metal.json'
import Band from './Band'

function App() {
  console.log(data)
  return (
    <div className="App" style={styles.app}>
      <Heading/>  
      <div style={styles.bands}>
        <p style={styles.all}>Bands: {data.length}</p>
        {
          data.map((band, i) => { // data takes a function as a parameter
            return ( // Return a component
              <Band 
                  key={i}
                  name={band.band_name} 
                  formed={band.formed} 
                  origin={band.origin} 
                  fans={band.fans} 
                  split={band.split}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

const styles = {
  app: {
    backgroundColor: 'black',
    minHeight: '100vh',
    minWidth: '100vw'
  },
  bands: {

  },
  all: {
    color: 'white'
  }
}
