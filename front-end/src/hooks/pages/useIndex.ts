import {useEffect, useState} from "react";
import {Professor} from "../../@types/professor";
import {ApiService} from "../../services/ApiService";

export function useIndex() {
  const [listaProfessores, setListaProfessores] = useState<Professor[]>([])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>();
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    ApiService.get('/teachers').then((response) => {
      setListaProfessores(response.data)
    });
  }, []);

  useEffect(() => {
    limparFormulario();
  }, [professorSelecionado])

  function marcarAula() {
    if (professorSelecionado !== null) {
      if (validaDadosAula()) {
        ApiService.post('/teachers/' + professorSelecionado?.id + '/classroom', {
          name,
          email
        }).then(() => {
          setProfessorSelecionado(null);
          setMensagem("Cadastrado com sucesso");
        }). catch((error) => {
          setMensagem(error.response?.data.message);
        })
      } else {
        setMensagem('Preencha os dados corretamente');
      }
    }
  }

  function validaDadosAula() {
    return name.length > 0 && email.length > 0;
  }

  function limparFormulario() {
    setName('');
    setEmail('');
  }

  return {
    listaProfessores,
    name,
    setName,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem
  }
}