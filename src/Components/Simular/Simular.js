import React from 'react'
import styles from './Simular.module.css'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import * as XLSX from 'xlsx'

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

  function exportXlsxVertical() {
    const worksheetData = [];

    userData.forEach((user, index) => {
      const baseRow = index * 4; // espaço entre blocos

      worksheetData[baseRow] = ['Nome', user.name];
      worksheetData[baseRow + 1] = ['Telefone', user.fone];
      worksheetData[baseRow + 2] = ['Email', user.email];
      worksheetData[baseRow + 3] = []; // linha em branco opcional
    });

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Simulações');

    XLSX.writeFile(workbook, `simulação-${name.value}.xlsx`);
    setShowExportButton(false)
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
        {showExportButton && userData.length > 0 && (
        <Button onClick={exportXlsxVertical}>Exportar para Excel</Button>
        )}

      </form>

    </section>
  )
}

export default Simular
