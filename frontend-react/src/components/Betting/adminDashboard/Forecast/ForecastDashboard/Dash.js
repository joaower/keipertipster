import React from 'react'
import { AuthConsumer } from '../../../../../context/AuthContext'
import Login from '../../../../login'

const Dash = props => (
    <AuthConsumer>
        {({ auth }) =>
            auth ? (
                <div className="container">
                    {props.children}
                </div>
            ) : (
                <Login anyProp="Is not Authenticated..." />
            )
        }
    </AuthConsumer>
)

export default Dash
