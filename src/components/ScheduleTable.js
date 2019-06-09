import React from 'react'
import Table from 'react-bootstrap/Table'

const tableContent = [{
    date: 'Abr',
    activity: 'Criação da página da disciplina',
    status: 'Concluída'
}, {
    date: 'Abr',
    activity: 'Ferramenta para análise automática usando o Sonar',
    status: 'Concluída'
}, {
    date: 'Abr/Mai/Jun',
    activity: 'Relacionar métricas de código com itens de dívida técnica',
    status: 'Em andamento'
}, {
    date: 'Jun',
    activity: 'Ajuste na ferramenta do Git',
    status: 'Não realizada'
}, {
    date: 'Jun',
    activity: 'Ajuste na ferramenta do JIRA',
    status: 'Não realizada'
}, {
    date: 'Jun',
    activity: 'Ajuste na ferramenta do Sonar',
    status: 'Não realizada'
}, {
    date: 'Final de Jun',
    activity: 'Escrita introdutória da monografia',
    status: 'Não realizada'
}, {
    date: 'Jul/Ago',
    activity: 'Método para priorizar se o item deve ou não ser pago',
    status: 'Não realizada'
}, {
    date: 'Jul/Ago',
    activity: 'Método para priorizar em categorias a importância',
    status: 'Não realizada'
}, {
    date: 'Jul/Ago',
    activity: 'Método para priorizar as dívidas em lista',
    status: 'Não realizada'
}, {
    date: 'Começo de Out',
    activity: 'Escrita final do trabalho',
    status: 'Não realizada'
}, {
    date: 'Começo de Nov',
    activity: 'Produção dos materiais auxiliares',
    status: 'Não realizada'
}]

export default () => (
    <Table>
        <thead>
            <tr>
                <th>Data</th>
                <th>Atividade</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {tableContent.map((row) => (
                <tr>
                    <td>{row.date}</td>
                    <td>{row.activity}</td>
                    <td>{row.status}</td>
                </tr>
            ))}
        </tbody>
    </Table>
)