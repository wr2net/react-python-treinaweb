import {Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor} from "./Lista.style";
import {Button} from "@mui/material";
import {Professor} from "../@types/professor";

interface ListaProps{
  professores: Professor[],
}

const Lista = (props: ListaProps) => {
  return (
    <>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map(professor => (
            <ItemLista key={professor.id}>
              <Foto src={professor.foto}/>
              <Informacoes>
                <Nome>{professor.nome}</Nome>
                <Valor>{professor.valor.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora</Valor>
                <Descricao>{professor.descricao}</Descricao>
                <Button sx={{width: '70%'}}>Marcar Aula com Wagner</Button>
              </Informacoes>
            </ItemLista>
          ))}
        </ListaStyled>
      ) : (
        <ListaVazia>Nenhum registro localizado</ListaVazia>
      )
      }
    </>
  );
}

export default Lista