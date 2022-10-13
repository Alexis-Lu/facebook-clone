import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

export default function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
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
            <input placeholder="Adresse e-mail ou numéro de tél."></input>
            <input placeholder="Mot de passe"></input>
          </div>
          <Button type="submit" onClick={signIn} className="login__button__sc">
            Se connecter
          </Button>
          <p>Mot de passe oublié ?</p>
          <div className="login__bar"></div>
          <Button
            type="submit"
            className="login__button__cunc"
            onClick={signIn}
          >
            Créer un nouveau compte
          </Button>
        </div>
        <div className="login__help">
          <p>
            <span className="login__help__span">Créer une Page</span> pour une
            célébrité, une marque ou une entreprise.
          </p>
        </div>
      </div>
    </div>
  );
}
