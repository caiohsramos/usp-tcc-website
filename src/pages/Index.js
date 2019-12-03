import React from "react";
import Jumbo from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Grid from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import GitHubButton from "react-github-btn";

export default () => (
  <Grid>
    <Jumbo>
      <h1>TCC - Caio Henrique Silva Ramos</h1>
      <h2>Métodos para extração e priorização de dívida técnica</h2>
      <hr />
      <h3>Supervisor - Alfredo Goldman</h3>
      <h3>Co-supervisor - Diogo Pina</h3>
      <hr />
      <h3>Resumo</h3>
      <p>
        Dívida técnica é uma metáfora na engenharia de software para artefatos
        imaturos, incompletos ou inadequados no ciclo de vida de um projeto.
        Adquirir uma dívida técnica traz benefícios a curto prazo tais como
        redução do tempo de desenvolvimento ou esforço, mas pode causar maiores
        custos e diminuir a qualidade do código ao longo do tempo.
      </p>
      <p>
        O objetivo deste trabalho de formatura é desenvolver métodos para
        priorização de dívida técnica através de uma ferramenta que auxilie
        nessa tarefa. O projeto se concentra em responder três questões sobre um
        dado item de dívida técnica: pagar ou não pagar, categorizar sua
        importância de pagamento e listá-la em ordem de pagamento em relação a
        outros itens. Para fazer isso, são utilizadas métricas de código
        extraídas utilizando a ferramenta SonarQube, projeto open source para
        análise contínua da qualidade de código.
      </p>
      <p>
        Os resultados obtidos foram uma ferramenta para executar análises do
        Sonar Qube para qualquer arquitetura de projeto, escrita na linguagem
        <i> Python</i>; um estudo sobre os dados gerados e tabelas no banco de
        dados utilizadas, com foco aonde são armazenadas as dívidas técnicas e
        métricas de código; exposição e exploração das informações geradas por
        uma análise de dois projetos de código livre reais, comparando métricas
        de arquivos saudáveis com arquivos que possuem algum tipo de problema.
      </p>
      <Row>
        <Button
          href="./tcc2019.pdf"
          variant="primary"
          style={{ margin: "10px" }}
        >
          Monografia
        </Button>
        <Button
          href="./tcc2019_poster.pdf"
          variant="primary"
          style={{ margin: "10px" }}
        >
          Poster
        </Button>
        <Link to="/personal">
          <Button variant="primary" style={{ margin: "10px" }}>
            Apreciação pessoal e crítica
          </Button>
        </Link>
        <Button
          href="https://github.com/caiohsramos/tcc-sonar"
          variant="primary"
          style={{ margin: "10px" }}
        >
          Repositório
        </Button>
      </Row>
    </Jumbo>
    <GitHubButton
      href="https://github.com/caiohsramos/tcc-website/archive/master.zip"
      data-size="large"
      aria-label="Download caiohsramos/tcc-website on GitHub"
    >
      Download
    </GitHubButton>
  </Grid>
);
