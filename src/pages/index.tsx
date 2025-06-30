import { useEffect, useRef, useState } from "react";
import QuestaoModel from "../../model/questão";
import RespostaModel from "../../model/resposta";
import Questionario from "../../components/Questionario";

const questaoMock = new QuestaoModel(1, 'Qual é a melhor cor?', [
  RespostaModel.errada('Verde'),
  RespostaModel.errada('Vermelha'),
  RespostaModel.errada('Azul'),
  RespostaModel.certa('Preta'),
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function questaoRespondida(questao : QuestaoModel){

  }
  
  function irPraProximoPasso(){

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
        <Questionario
          questao={questao}
          ultima={true}
          questaoRespondida={questaoRespondida}
          irPraProximoPasso={irPraProximoPasso}
        />
    </div>
    
  )
}
