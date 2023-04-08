const Button = ({ value, styles, type, handleInput }) => {
  return (
    <input className={styles} value={`${value}`} type={type} onClick={() => { handleInput(value) }} />
  )
}

export default Button
