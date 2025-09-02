import React from 'react'
import styles from './Simular.module.css'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'

const Simular = () => {

  const name = useForm();
  const score = useForm(); 
  const time = useForm();  

  function handleSubmit (event) {
    if(score.validate() && time.validate()){
      event.preventDefault()
      console.log(name.value)
      let resultado = Number(score.value) + Number(time.value)
      console.log(resultado)
    }
}

  return (
    <section className={`${styles.simular} animeLeft`}>
 
      <form action="" className='form' onSubmit={handleSubmit}>
        <h1 className={'title'}>Simulador</h1>
        <Input label={"Nome"} type={"Text"} name={"name"} {...name} />
        <Input label={"Score Atual"} type={"Text"} name={"score"} {...score} />
        <Input label={"Tempo Nesta Empresa"} type={"Text"} name={"time"} {...time} />
        <Button>Simular</Button>
      </form>


    </section>
  )
}

export default Simular
