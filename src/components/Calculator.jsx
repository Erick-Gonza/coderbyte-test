import { useEffect, useState } from 'react'
import Button from './Button'
import { buttonNumber, buttonOperator } from '../styles/customStyles'
import Screen from './Screen'
import ButtonClear from './ButtonClear'

const Calculator = () => {
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [render, setRender] = useState('')

  useEffect(() => {
    input && setRender(input)
    console.log(input)
  }, [input])

  const handleInput = (value) => {
    setInput(`${input}${value}`)
  }

  const resetInputs = () => {
    setResult('')
    setInput('')
    setRender('')
  }

  const calculateResult = () => {
    try {
      const result = (eval(input))
      if (result % 1 === 0) {
        setResult(result)
        setInput(result)
      } else {
        setResult(result.toFixed(2))
        setInput(result.toFixed(2))
      }
      setRender(result)
    } catch (err) {
      setResult('Syntax Error')
      setInput(result)
    }
  }

  return (
    <>
      <section className='h-1/5 px-3 py-4'>
        <h2 className='text-4xl font-bold text-white'>Calculadora React JS</h2>
      </section>
      {/* Contenedor Calculadora */}
      <section className='h-4/5 w-[50vw] xl:w-[30vw] px-3 py-4 flex flex-col items-center'>
        <div className='w-auto h-auto border border-black px-3 py-4 rounded-md shadow-md bg-slate-300'>
          {/* pantalla */}
          <Screen render={render} />

          {/* clear */}
          <div className='hover:bg-slate-200 border border-slate-400 bg-slate-600 mb-2 px-2 py-2'>
            <ButtonClear styles='w-full text-center font-semibold' handleClear={resetInputs} />
          </div>

          {/* botones */}
          <section className='w-full flex flex-col gap-2'>
            <div className='w-full flex gap-2'>
              <Button value='7' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='8' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='9' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='/' styles={buttonOperator} type='button' handleInput={handleInput} />
            </div>

            <div className='w-full flex gap-2'>
              <Button value='4' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='5' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='6' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='*' styles={buttonOperator} type='button' handleInput={handleInput} />
            </div>

            <div className='w-full flex gap-2'>
              <Button value='1' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='2' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='3' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='-' styles={buttonOperator} type='button' handleInput={handleInput} />
            </div>

            <div className='w-full flex gap-2'>
              <Button value='0' styles={buttonNumber} type='button' handleInput={handleInput} />
              <Button value='.' styles={buttonNumber} type='button' handleInput={handleInput} />
              <button className={buttonOperator} onClick={calculateResult}>=</button>
              <Button value='+' styles={buttonOperator} type='button' handleInput={handleInput} />
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Calculator
