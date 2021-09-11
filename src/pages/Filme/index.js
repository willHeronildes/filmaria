
import { useEffect, useState } from 'react';
import './filme-info.css';
import { useParams, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';


export default function Filme(){
   const { id } = useParams();
   const history = useHistory();
   const [filme, setFilme] = useState([]);
   const [loading, setLoading] = useState(true);
   const [contador, setContador] = useState(0);
   const [print, setPrint] = useState ();

   useEffect(()=>{
       async function loadFilme(){
           const response = await api.get(`r-api/?api=filmes/${id}`);

           if(response.data.length === 0){
               //tentou acessar com id que não existe, navego para home!
               history.replace('/');
               return;
           }

           setFilme(response.data);
           setLoading(false);
       }

       loadFilme();

       return() => {
          console.log('COMPONENTE DESMONTADO');
       }

   }, [history, id]);

   function salvaFilme(){

     const minhaLista = localStorage.getItem('filmes');

     let filmesSalvos = JSON.parse(minhaLista) || [];

     // se tiver algum filme salvo com esse mesmo id precisa ignorar..

     const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id)

     if(hasFilme){
         toast.error('Você já possui esse filme salvo.');
         return;
     }

     filmesSalvos.push(filme);
     localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
     toast.success('Filme salvo com sucesso!');

   }

   if(loading){
       return(
           <div className="filme-info">
               <h1>Carregando seu Filme...</h1>
           </div>
       )
   }

    return(
        <div className="filme-info">
           <h1> {filme.nome} </h1>
           <img src={filme.foto} alt={filme.nome} />
           <h3>Sinopse</h3>
           <p> {filme.sinopse} </p>

           <div className="botoes">
               <button>
                   <a target="_blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                     Trailer  
                   </a>
               </button>
               <div className="btn-add">
                  <h3>Selecione quantos deseja salvar</h3>
                  <button onClick={()=> setContador(contador - 1)}> - </button>
                  <input type="text" id="cont" name="cont" value={contador}></input>
                  <button onClick={()=> setContador(contador + 1)}> + </button>
                  <button onClick={salvaFilme} >Salvar</button>
               </div>
               <form>
                      <input type="button" value="IMPRIMIR" onClick={()=> setPrint(window.print)}/>
               </form>
           </div>    
        </div>
    );
}