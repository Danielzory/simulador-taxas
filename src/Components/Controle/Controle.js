import styles from './Controle.module.css'
import * as XLSX from 'xlsx';
import Button from '../Forms/Button'

const Controle = () => {


function excelGenerated() {
  const storedUsers = JSON.parse(localStorage.getItem('simulatedUsers')) || [];

  const worksheetData = storedUsers.map(user => ({
    Nome: user.name,
    Telefone: user.fone,
    Email: user.email
  }));

  const worksheet = XLSX.utils.json_to_sheet(worksheetData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Clientes');

  XLSX.writeFile(workbook, 'clientes-simulados.xlsx');
}

  return (
    <div  className='controle'>
      <Button onClick={excelGenerated}>Clientes Simulados</Button>
    </div>
  )
}

export default Controle