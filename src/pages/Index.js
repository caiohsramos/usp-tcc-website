import React from 'react'
import Jumbo from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Grid from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default () => (
    <Grid>
        <Jumbo>
            <h1>TCC</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Link to='/more'>
                    <Button variant="primary">Learn more</Button>
                </Link>
            </p>
        </Jumbo>
    </Grid>
)