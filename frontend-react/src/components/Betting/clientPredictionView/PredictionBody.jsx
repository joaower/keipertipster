import React from 'react'

const PredictionBody = ({
    data: {
        Title,
        Difficulty,
        Odd,
        Prevision,
        Proof,
        Sport,
        Winner,
        Description,
    },
}) => {
    debugger
    const url = Proof !== null ? Proof.url : ''
    const imageUrl =
        process.env.NODE_ENV !== 'development'
            ? Proof.url
            : process.env.REACT_APP_BACKEND_URL + url

    console.log(imageUrl)
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Match</h5>
                <p>{Title}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Difficulty</h5>
                <p>{Difficulty}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Odd</h5>
                <p>{Odd}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Prevision</h5>
                <p>{Prevision}</p>
            </div>

            {url && (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <h5 style={{ marginRight: '5rem' }}>Proof</h5>
                    <img src={imageUrl} />
                </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Sport</h5>
                <p>{Sport}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Winner</h5>
                <p>{Winner}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <h5 style={{ marginRight: '5rem' }}>Description</h5>
                <p>{Description}</p>
            </div>
        </div>
    )
}

export default PredictionBody
