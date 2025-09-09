import React from 'react'
import styles from './Simular.module.css'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import DigitalSpeedometer from '../Speedometer/DigitalSpeedometer'

const Simular = () => {

  const name = useForm();
  const score = useForm(); 
  const fone = useForm('fone');
  const email = useForm('email');  
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState(null)

  const [userData, setUserData] = React.useState([])
  const { width, height } = useWindowSize()

  function scoreCalc (score) {
      setTimeout(()=>{
      const calc = (Number(score) + 340 + Math.random() * 80) * 0.9
      setResult(calc.toFixed(0));
      setLoading(false)
    }, 3000);
  }

  function reloadPage () {
    setTimeout(()=>{
      window.location.reload()
    }, 30000)
  }

  function addUserData (name, fone, email) {
    const user = {
      name,
      fone,
      email
    }
    setUserData(prev => [...prev, user])
    const storedUsers = JSON.parse(localStorage.getItem('simulatedUsers')) || []
    const updatedList = [...storedUsers, user]
    localStorage.setItem('simulatedUsers', JSON.stringify(updatedList))
    setUserData(updatedList)
  }

  function handleSubmit (event) {
    if(score.validate() && fone.validate() && name.validate() && email.validate()){
      event.preventDefault()
      setLoading(true)
      scoreCalc (score.value) 
      addUserData(name.value, fone.value, email.value)
      reloadPage()
    } else {
      window.alert("Por favor, preencha todos os dados")
    }
}

  return (
    <section className={`${styles.simular} animeLeft`}>
 
      <form action="" className='form' onSubmit={handleSubmit}>
        <h1 className={'title'}>Simulador</h1>
        <Input label={"Nome"} type={"Text"} name={"name"} {...name}  />
        <Input label={"Telefone"} type={"number"} name={"fone"} {...fone} placeholder={'(00) 9 0000-0000'} />
        <Input label={"Score Atual"} type={"Text"} name={"score"} {...score}  />
        <Input label={"E-mail"} type={"email"} name={"email"} {...email}  />
        
        {!result && (
          <Button>Simular</Button>
        )}
        
        {loading && <p className='loading'>Carregando resultado...</p>}

        {result && (
          <div className={styles.result}>
            <Confetti width={width} height={height} numberOfPieces={200} />
            <h3 className={styles.title}>Olá {name.value.split(' ')[0]}, seu score estimado após o Desenrola EVR é:</h3>
            <DigitalSpeedometer value={result} />
          </div>
        )}

      </form>

    </section>
  )
}

export default Simular
