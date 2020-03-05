import React from 'react'
import Like from './Like'

function Band(props) {
  return (
    <div style={styles.band}>
      <h3 style={styles.name}>{props.name}</h3>
      <div style={styles.body}>
        <div style={styles.left}>
          {props.split === '-' ? 
          <Like/>: 
          <p style={styles.split}>SPLIT in: {props.split}</p>}
        </div>
        <div style={styles.right}>
          <p style={styles.info}>Formed: {props.formed} {props.origin} Fans: {props.fans}</p>
        </div>             
      </div>
    </div>
  )
}

export default Band;

const styles = {
  name: {
    color: 'white'
  },
  info: {
    color: 'white'
  },
  body: {
    display: 'flex',
    margin: 'auto',
    justifyContent: "space-between",
    width: '70vw'
  },
  split: {
    color:'white'
  }
}