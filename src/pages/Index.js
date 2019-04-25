import React from 'react'
import Jumbo from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Grid from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default () => (
    <Grid>
        <Jumbo>
            <h1>TCC - Caio Henrique Silva Ramos</h1>
            <p>
                **Proposta de estudo**
            </p>
            <p>
                <Link to='/schedule'>
                    <Button variant="primary">Cronograma</Button>
                </Link>
            </p>
        </Jumbo>
    </Grid>
)