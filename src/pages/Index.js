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
            <h2>Proposta de trabalho</h2>
            <p>
                O objetivo do trabalho de formatura é construir uma ferramenta que auxilie na priorização de itens relativos a dívidas técnicas. Dívida técnica (ou débito técnico) é um conceito no desenvolvimento de software que representa os custos adicionais do retrabalho, que pode ser causado por decisões de implementação fáceis ao invés de outras que seriam melhores, porém demorariam mais.
            </p>
            <p>
                O projeto irá focar em responder três questões acerca de um determinado débito técnico: pagar ou não pagar, categorizar sua importância e ordená-lo em relação aos outros débitos. Pretende-se fazer isso utilizando: métricas de código extraídas utilizando a ferramenta SonarQube, projeto open-source para analize contínua da qualidade de código; histórico de commits do Git, software de versionamento mais utilizado no mundo; e informações acerca do desenvolvimento e acompanhamento de tarefas e bugs com o JIRA. As informações serão consolidadas usando algoritmos de machine learning como KNN, CART, regressão linear e logística, SVN e redes neurais para responder as questões propostas no início.
                A motivação por trás do desenvolvimento desse projeto é que não existe atualmente nenhuma aplicação que use todas as diversas informações disponíveis comentadas no paragrafo anterior para construir um relatório baseado não só no código fonte em si, mas no modelo de desenvolvimento de cada time.
            </p>
            <p>
                <Link to='/schedule'>
                    <Button variant="primary">Cronograma</Button>
                </Link>
            </p>
            <Row className="justify-content-md-center">
                <Image src={tcc_image} />
            </Row>
        </Jumbo>
        <GitHubButton href="https://github.com/caiohsramos/tcc-website/archive/master.zip" data-size="large" aria-label="Download caiohsramos/tcc-website on GitHub">Download</GitHubButton>
    </Grid>
)