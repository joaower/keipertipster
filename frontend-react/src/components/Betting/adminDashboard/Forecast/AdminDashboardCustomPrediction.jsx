import React, { useState } from "react";
import MatchRequest from "../../../../requests/matches";
import { navigate } from "@reach/router";
import Utility from "../../../../util/utility";
import Prediction from "./Prediction";
import RedirectPage from "../../../RedirectPage";
import CustomPrediction from "./CustomPrediction";
function AdminDashboardCustomPrediction(props) {
  const [winner, setWinner] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [odd, setOdd] = useState(0);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState({});
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
    };
    debugger;
    MatchRequest.createMatch(body)
      .then((res) => {
        console.log(res);
        setOpen(true);
        setTimeout(() => navigate("/spider/dashboard"), 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const uploadFile = (e) => {
    let file;
    if (e.target.files !== undefined) {
      file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      if (file) {
        reader.readAsDataURL(file);
        setImageUrl(reader.result);
      } else {
        setImageUrl("");
      }
      setFile(file);
    }
  };

  return (
    <>
      <CustomPrediction sportValue={props.location.state.sportValue} />
    </>
  );
}

export default AdminDashboardCustomPrediction;
