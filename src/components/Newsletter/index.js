import React from 'react';
import { useState } from 'react'

const Newsletter = () => {

    const [nameAlert, setNameAlert] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false)
    const [sucess, setSucess] = useState(false)

    const SendEmail = (nome, mail) => {
        const url = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'

        fetch(url, {
            crossDomain: true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: mail,
                name: nome,
            })
        }).then(response => {
            setSucess(true)
        }).catch(err => {
            return console.log(err)
        })
    }

    const ValidateForm = (e) => {
        e.preventDefault();
        let nameInput = document.getElementById('newslettername')
        let emailInput = document.getElementById('newslettermail')

        if (nameInput.value === "" || !nameInput.value.includes(' ')){
            setNameAlert(true)
            if (emailInput.value === "" || !emailInput.value.includes('@') || !emailInput.value.includes('.com')){
                setEmailAlert(true)
            }
            return
        }

        setNameAlert(false)
        setEmailAlert(false)
        
        if (emailInput.value === "" || !emailInput.value.includes('@') || !emailInput.value.includes('.com')){
            setEmailAlert(true)
            return
        }

        setEmailAlert(false)
        SendEmail(nameInput.value, emailInput.value)
    }
    return (
        <section className="newsletter">
            
            {sucess === false && (
                <>
                    <h2 className="newsletter__title">Participe de nossas news com promoções e novidades!</h2>
                    <form className="newsletter__form" onSubmit={ValidateForm} >
                        <div className="newsletter__wrap">
                            <input className="newsletter__input" type="text" id="newslettername" name="nome" placeholder="Digite seu nome" />
                                            
                            {nameAlert === true && (
                                <div className="alert">

                                    <span className="alert__text">Preencha com seu nome completo</span>
                                </div>
                            )}
                        </div>
                        <div className="newsletter__wrap">
                            <input className="newsletter__input" type="text" id="newslettermail" name="email" placeholder="Digite seu email" />
                            
                            {emailAlert === true && (
                                <div className="alert">
                                    <span className="alert__text">Preencha com um e-mail válido</span>
                                </div>
                            )}
                        </div>
                        <button className="newsletter__button">Eu quero!</button>
                    </form>
                </>
            )}

            {sucess === true && (
                <div className="newsletter__sucess">
                    <h4>Seu e-mail foi cadastrado com sucesso!</h4>
                    <span>A partir de agora você receberá as novidade e ofertas exclusivas.</span>
                    <button 
                        className="newsletter__button newsletter__button--restart"
                        onClick={() => setSucess(false)}
                    >Cadastrar novo e-mail</button>
                </div>
            )}
        </section>
    );
}

export default Newsletter;
