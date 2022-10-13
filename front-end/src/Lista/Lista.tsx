import {Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor} from "./Lista.style";
import {Button} from "@mui/material";
import {Professor} from "../@types/professor";
import {FormatadorService} from "../services/FormatadorService";

interface ListaProps{
  professores: Professor[],
  onSelect: (professor: Professor) => void,
}

const Lista = (props: ListaProps) => {

  return (
    <>
      {props.professores.length > 0 ? (
        <ListaStyled>
          {props.professores.map(professor => (
            <ItemLista key={professor.id}>
              <Foto src={professor.photo}/>
              <Informacoes>
                <Nome>{professor.name}</Nome>
                <Valor>{FormatadorService.valorMonetario(professor.value)} por hora</Valor>
                <Descricao>{FormatadorService.limitarTexto(professor.description, 200)}</Descricao>
                <Button onClick={() => props.onSelect(professor)} sx={{width: '70%'}}>Marcar Aula com {professor.name}</Button>
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