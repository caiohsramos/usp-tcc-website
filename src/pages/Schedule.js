import React from 'react'
import Grid from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import ScheduleTable from '../components/ScheduleTable'


export default () => (
    <Grid>
        <h1>Cronograma</h1>
        <ScheduleTable />
        <Link to='/'>
            <Button variant="primary">Voltar</Button>
        </Link>
    </Grid>
)