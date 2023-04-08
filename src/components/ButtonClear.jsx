const ButtonClear = ({ styles, handleClear }) => {
  return (
    <button className={styles} onClick={handleClear}>
      <p>CLEAR</p>
    </button>
  )
}

export default ButtonClear
