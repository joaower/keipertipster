import React from 'react'
import { Button } from '@material-ui/core'

const RedirectPage = () => {
    return (
        <div>
            <h1>
                {' '}
                we had some problem loading this page please click the button to
                be redirected
            </h1>
            <Button variant="contained">Click here</Button>
        </div>
    )
}

export default RedirectPage
