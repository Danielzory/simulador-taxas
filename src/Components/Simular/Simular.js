import React from 'react'
import styles from './Simular.module.css'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'

const Simular = () => {

  const name = useForm();
  const score = useForm(); 
  const fone = useForm('fone');
  const email = useForm('email');  
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState(null)
  const [showExportButton, setShowExportButton] = React.useState(false)

  const [userData, setUserData] = React.useState([])

  function scoreCalc (score) {
      setTimeout(()=>{
      const calc = (Number(score) + 340 + Math.random() * 80) * 0.9
      setResult(calc.toFixed(0));
      setLoading(false)
    }, 3000);
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
    if(score.validate() && fone.validate() && name.validate()){
      event.preventDefault()
      setLoading(true)
      scoreCalc (score.value) 
      addUserData(name.value, fone.value, email.value)
      setTimeout(() => {
        setShowExportButton(true);
      }, 3200);

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
        
        <Button>Simular</Button>
        
        {loading && <p className='loading'>Carregando resultado...</p>}
        {result && <h3 className={styles.result}>Olá {name.value}, após o Desenrola EVR seu Score será de aproximadamente: {result}</h3>}

      </form>

    </section>
  )
}

export default Simular
