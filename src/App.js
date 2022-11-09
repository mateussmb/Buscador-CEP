import { useState } from 'react';
import  { FiSearch} from 'react-icons/fi';
import './styles.css';
import api from './services/api';
import {MdCopyright} from 'react-icons/md';




function App() {

    const [input, setInput] = useState("")
    const [cep, setCep] = useState({});

    async function handleSearch() {
        if (input ==='') {
          alert('Preencha o CEP!!')
          return;
        } 

        try {
          const response = await api.get(`${input}/json`);
          setCep(response.data)
          
          
          setInput('')

        }catch{
          alert('CEP INVÁLIDO!!')
          setInput('')
        }
      

    }




  return (
    <div className="container">
      <h1 className="title">Buscar CEP</h1>
      <div className="containerInput">
        <input type='cep' maxLength={8} placeholder="Digite um cep..."
        value={input} onChange={(e) => setInput(e.target.value)}></input>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#000'></FiSearch>
        </button>

      </div>

      <main className='main'>

      <h2>CEP: {cep.cep}</h2>
      <span >{cep.logradouro}</span>
      <span> {cep.localidade}</span>
      <span>{cep.bairro}  </span>
      <span></span>


      </main>

      <folder className='rodape'>
        <MdCopyright  size={25}></MdCopyright>
        <h2>mt.moreirabarros@gmail.com</h2>

      </folder>
    </div>


  );
}

export default App; 
