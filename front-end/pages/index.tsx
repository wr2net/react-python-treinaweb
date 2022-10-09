import type { NextPage } from 'next'
import Cabecalho from "../src/components/Cabecalho/Cabecalho";
import Lista from "../src/Lista/Lista";
import {Box} from "@mui/material";
import {Professor} from "../src/@types/professor";

const Home: NextPage = () => {

  const professores: Professor[] = [
    {
      id: 1,
      nome: "Profesor 1",
      foto: "https://github.com/wr2net.png",
      descricao: "Descrição do professor 1",
      valor: 100
    },
    {
      id: 2,
      nome: "Profesor 2",
      foto: "https://github.com/wr2net.png",
      descricao: "Descrição do professor 2",
      valor: 100
    },
    {
      id: 3,
      nome: "Profesor 3",
      foto: "https://github.com/wr2net.png",
      descricao: "Descrição do professor 13",
      valor: 100
    },
    {
      id: 4,
      nome: "Profesor 4",
      foto: "https://github.com/wr2net.png",
      descricao: "Descrição do professor 4",
      valor: 100
    }
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
