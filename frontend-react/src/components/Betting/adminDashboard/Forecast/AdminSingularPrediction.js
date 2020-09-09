import React, { useState } from 'react'
import { navigate } from '@reach/router'
import MatchRequest from '../../../../requests/matches'
import Utility from '../../../../util/utility'
import Prediction from './Prediction'
import RedirectPage from '../../../RedirectPage'
function AdminSingularPrediction(props) {
  const [winner, setWinner] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [odd, setOdd] = useState(0)
  const [description, setDescription] = useState('')
  const [file, setFile] = useState({})
  const [open, setOpen] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  function save() {
    const body = {
      Title: `${props.location.state.homeTeam.name} - ${props.location.state.awayTeam.name}`,
      Prevision: false,
      Difficulty: difficulty,
      Odd: odd,
      Description: description,
      Sport: Utility.getSportValue(props.location.state.sportValue),
      Winner: winner,
      Proof: file,
    }
    debugger
    MatchRequest.createMatch(body)
      .then(res => {
        console.log(res)
        setOpen(true)
        setTimeout(() => navigate('/spider/dashboard'), 4000)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const uploadFile = e => {
    let file
    if (e.target.files !== undefined) {
      file = e.target.files[0]
      const reader = new FileReader()

      reader.onloadend = () => {
        setImageUrl(reader.result)
      }
      if (file) {
        reader.readAsDataURL(file)
        setImageUrl(reader.result)
      } else {
        setImageUrl('')
      }
      setFile(file)
    }
  }

  return (
    <>
      {props.location.state !== null ? (
        <Prediction
          props={props}
          handleClose={handleClose}
          winner={winner}
          setWinner={setWinner}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setOdd={setOdd}
          imageUrl={imageUrl}
          uploadFile={uploadFile}
          setDescription={setDescription}
          save={save}
          open={open}
        />
      ) : (
        <RedirectPage />
      )}
    </>
  )
}

export default AdminSingularPrediction
