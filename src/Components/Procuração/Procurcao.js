import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import styles from './Procuracao.module.css'
import * as XLSX from 'xlsx'
import useForm from '../../Hooks/useForm'


const Procurcao = () => {

  const name = useForm()
  const cpf = useForm()
  const rg = useForm()
  const born = useForm()
  const mStatus = useForm()
  const adress = useForm()
  const fone = useForm('fone')
  const email = useForm('email')
  const company = useForm()
  const companyTime = useForm()
  const occupation = useForm()

  function reloadPage () {
    setTimeout(()=>{
      window.location.reload()
    }, 5000)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if(name.validate() && cpf.validate() && rg.validate() && mStatus.validate() && adress.validate() && fone.validate() && email.validate() && occupation.validate()) {
      const data = [
        ['Nome Completo', name.value],
        ['CPF', cpf.value],
        ['RG', rg.value],
        ['Data de Nascimento', born.value],
        ['Estado Civil', mStatus.value],
        ['Endereço', adress.value],
        ['Telefone', fone.value],
        ['E-mail', email.value],
        ['Nome da Empresa', company.value],
        ['Tempo na Empresa', companyTime.value],
        ['Profissão', occupation.value],
      ]

      const worksheet = XLSX.utils.aoa_to_sheet(data)
      const workbook = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados')

      XLSX.writeFile(workbook, `${name.value}procuracao_dados.xlsx`)
      reloadPage()
    } else {
      window.alert("Por favor, preencha todos os dados")
    }

  }

  return (
    <section className={`${styles.procuracao} animeLeft`}>
 
      <form action="" className='form' onSubmit={handleSubmit}>
        <h1 className={'title'}>Dados para Procuração</h1>
        <Input label={"Nome Completo"} type={"Text"} name={"name"} {...name}  />
        <Input label={"CPF"} type={"number"} name={"cpf"} {...cpf}  />
        <Input label={"RG"} type={"number"} name={"rg"} {...rg}  />
        <Input label={"Data de Nascimento"} type={"Text"} name={"born"} {...born}  />
        <Input label={"Estado Civil"} type={"Text"} name={"mStatus"} {...mStatus}  />
        <Input label={"Endereço"} type={"Text"} name={"adress"} {...adress}  />
        <Input label={"Telefone"} type={"number"} name={"fone"} {...fone} placeholder={'(00) 9 0000-0000'} />
        <Input label={"E-mail"} type={"email"} name={"email"} {...email}  />
        <Input label={"Nome da Empresa"} type={"Text"} name={"company"} {...company}  />
        <Input label={"Tempo na Empresa"} type={"Text"} name={"companyTime"} {...companyTime}  />
        <Input label={"Profissão"} type={"Text"} name={"occupation"} {...occupation}  />
        
        <Button>Enviar Dados</Button>
        
      </form>

    </section>
  )
}

export default Procurcao
