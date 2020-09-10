import React from "react";
import CustomPrediction from "./CustomPrediction";
function AdminDashboardCustomPrediction(props) {
  

  /* function save() {
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
  } */

  /* const uploadFile = (e) => {
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
  }; */

  return (
    <>
      <CustomPrediction />
    </>
  );
}

export default AdminDashboardCustomPrediction;
