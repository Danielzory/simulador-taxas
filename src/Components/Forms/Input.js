import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, value, onBlur, onChange, error, placeholder}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>{label}</label>
      <input 
        id={name} 
        name={name} 
        className={styles.input} 
        type={type} 
        value={value} 
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
     />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
