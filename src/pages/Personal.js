import React from "react";
import Grid from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Jumbo from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";

const Subsection = ({title, children, hideDivider}) => (
    <>
    <h3>{title}</h3>
    {children}
    {!hideDivider && <hr/>}
    </>
)

export default () => (
  <Grid>
    <Jumbo>
    <h1>Apreciação pessoal e crítica</h1>
    <br/>
    <Subsection title='Agradecimentos'>
      <p>
        Primeiramente, queria agradecer ao Professor Alfredo Goldman e ao Diogo Pina que me auxiliaram na construção desse trabalho com questionamentos e provocações pertinentes, além de dicas e incentivo para o desenvolvimento do conteúdo.
      </p>
      <p>
        Depois, agradeço a minha família e amigos, que me deram suporte em todos os momentos não só do TCC mas da graduação como um todo.
      </p>
      <p>
        Finalmente, gostaria de agradecer a todos os professores, funcionários e membros da comunidade do IME e da USP, que permitiram que esse trabalho fosse possível e que eu tivesse todo o conhecimento necessário para essa pesquisa.
      </p>
    </Subsection>
    <Subsection title='Desafios e frustações'>
      <p>
        A principal dificuldade encontrada foi a conciliação do estágio e mudança de emprego com a pesquisa e escrita do TCC, ainda mais fazendo disciplinas presenciais durante esse período. É um desafio saber administrar o tempo dedicado para cada uma dessas atividades sem prejudicar seu desenvolvimento e tempo pessoal.
      </p>
      <p>
        Além disso, a comunicação com o Diogo (cossupervisor) foi prejudicada durante um período do ano por conta de questões pessoais. Mas mesmo assim, ele conseguiu me dar o apoio e a motivação necessária para finalizar o trabalho, se mostrando sempre (que possível) solicito e prestativo.
      </p>
      <p>
        O último ponto é que foi difícil contruir um calendário e uma proposta com pouco informação ainda sobre o que realmente eu iria desenvolver durante o ano. Só quando comecei a por a "mão na massa" foi que percebi a complexidade e o objetivo geral do tema. Mais difícil ainda foi seguir o cronograma, pois além de além de imprevistos citados anteriormente a complexidade de alguns itens era maior do que aparentava ser.
      </p>
    </Subsection>
    <Subsection title='Diciplinas relevantes para o TCC' hideDivider>
      <ul>
        <li>
          <b>MAC0459 - Ciência e Engenharia de Dados</b>: ajudou com <i>insights</i> principalmente na análise exploratória de dados e uso de ferramentas de ciência de dados.
        </li>
        <li>
          <b>MAC0426 - Sistemas de Bancos de Dados</b>: ensinou os conceitos da linguagem SQL e de bancos de dados relacionais, que agilizou muito a parte que diz respeito à estrutura do software Sonar Qube.
        </li>
        <li>
          <b>MAC0460 - Introdução ao aprendizado de máquina</b>: foi a fundo em modelos de aprendizado de máquina com a teoria necessária para o entendimento, e em seus usos práticos com ferramentas como Jupyter e Pandas.
        </li>
        <li>
          <b>MAC0472 - Laboratório de Métodos Ágeis</b>: introduziu o conceito de dívida técnica para mim, que é base do trabalho como um todo; também contribuiu para o aprendizado de ferramentas usadas no projeto como o Docker. Também foi por ela que contatei o Diogo para o início desse TCC.
        </li>
      </ul>
    </Subsection>
    <br/>
    <Link to="/">
      <Button style={{marginTop: '15px'}} variant="primary">Voltar</Button>
    </Link>
    </Jumbo>
  </Grid>
);
