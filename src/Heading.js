import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


function Heading () {
  return (
    <div style={styles.navbar}>
      <div style={styles.left}>
        <p style={styles.titleFont} to="/">FEW 1.2 Final Assessment</p>
      </div>
      <div style={styles.right}>
        <p style={styles.titleFont}>Shashwat Prajjwal</p>
      </div>
    </div>
  )
}


export default Heading;

const styles = {
  navbar: {
    background: '#B8E1FF',
    maxWidth: '100vw',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '5vw',
    paddingRight: '5vw'

  },
  left: {
    justifySelf: 'flex-start'
  },
  right: {
    display:'flex',
    justifyContent: 'space-around'
  },
  font: {
    color: '#0A2342',
    margin: '.4em',
    fontSize: '1.2rem',
    fontWeight: '300',
    textDecoration: 'none'
  },
  titleFont: {
    color: '#333',
    fontSize: '1.6rem',
    fontWeight: '500',
    textDecoration: 'none'
  }

}