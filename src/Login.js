import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"></img>
        <h4>Connexion récentes</h4>
        <p>Cliquez sur votre image ou sur Ajouter un compte.</p>
        <div className="login__cards">
          <div className="login__card__container">
            <div className="login__card"></div>
            <div className="login__card__name">
              <p>Alexis</p>
            </div>
          </div>

          <div className="login__card__container">
            <div className="login__card"></div>
            <div className="login__card__name">
              <div style={{ marginRight: "5px" }}> Ajouter</div>
              <div>un compte</div>
            </div>
          </div>
        </div>
      </div>
      <div className="login__right">
        <div className="login__form">
          <div className="login__input">
            <input></input>
            <input></input>
          </div>
          <Button type="submit" onClick={signIn} className="login__button__sc">
            Se connecter
          </Button>
          <p>Mot de passe oublié ?</p>
          <div></div>
          <Button className="login__button__cunc">
            Créer un nouveau compte
          </Button>
        </div>
      </div>
    </div>
  );
}
