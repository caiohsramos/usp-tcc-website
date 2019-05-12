import React from 'react'
import Jumbo from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Grid from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import GitHubButton from 'react-github-btn'
import Image from 'react-bootstrap/Image'
import tcc_image from '../images/tcc.jpg'

export default () => (
    <Grid>
        <Jumbo>
            <h1>TCC - Caio Henrique Silva Ramos</h1>
            <h2>Métodos para extração e priorização de dívida técnica usando algoritmos de <i>machine learning</i></h2>
            <hr />
            <h3>Supervisor - Alfredo Goldman</h3>
            <h3>Co-supervisor - Diogo Pina</h3>
            <hr />
            <h3>Proposta de trabalho</h3>
            <p>
                O objetivo do trabalho de formatura é desenvolver métodos para priorização de dívida técnica através de uma ferramenta que auxilie nessa tarefa. Dívida técnica é uma metáfora no desenvolvimento de software que representa os custos adicionais do retrabalho, que pode ser causado por decisões de implementação fáceis ao invés de outras que seriam melhores, porém demorariam mais para ser desenvolvida.
            </p>
            <p>
                O projeto irá focar em responder três questões acerca de um dado item de dívida técnica: pagar ou não pagar, categorizar sua importância de pagamento e lista-la em ordem de pagamento em relação a outros itens. Pretende-se fazer isso utilizando: métricas de código extraídas utilizando a ferramenta SonarQube, projeto open - source para analize contínua da qualidade de código; histórico de commits do Git, software de versionamento mais utilizado no mundo; e dados do desenvolvimento e acompanhamento de tarefas e bugs do JIRA Issue Tracker.
                    A motivação por trás do desenvolvimento desse projeto é que não existe atualmente nenhuma aplicação que use todas as diversas informações disponíveis comentadas no paragrafo anterior para construir um relatório baseado não só no código fonte em si, mas no modelo de desenvolvimento de cada time.
            </p>
            <p>
                As informações serão consolidadas usando algoritmos de machine learning como: KNN, CART, regressão linear e logística, SVM e redes neurais para responder as questões propostas.
            </p>
            <p>
                A motivação para o desenvolvimento desse projeto é que não existe, atualmente, nenhum método que priorize os itens de dívida técnica de forma efetiva e abrangente, ou seja, em diferentes linguagens de programação, tipos de dívida técnica e contextos de projetos.
            </p>
            <Row className="justify-content-md-center">
                <Image src={tcc_image} />
            </Row>
            <p>
                A figura anterior representa o modelo a ser seguido no desenvolvimento do projeto. Começando pela lista de dívidas técnicas, pretende-se encontrar métodos que respondam as questões mencionadas na seção anterior, para finalmente ordená-las por importância.
            </p>
            <p>
                <Link to='/schedule'>
                    <Button variant="primary">Cronograma</Button>
                </Link>
            </p>
        </Jumbo>
        <GitHubButton href="https://github.com/caiohsramos/tcc-website/archive/master.zip" data-size="large" aria-label="Download caiohsramos/tcc-website on GitHub">Download</GitHubButton>
    </Grid>
)