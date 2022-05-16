import React from 'react';

const Newsletter = () => {
    // const [buyitems, setBuyItems] = React.useState(['']);

    const SendEmail = (nome, mail) => {
        // return console.log(name, email)
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
            return console.log(response)
        }).catch(err => {
            return console.log(err)
        })
    }

    const Validate = (e) => {
        e.preventDefault();
        let iptname = document.getElementById('newslettername')
        let iptemail = document.getElementById('newslettermail')

        if (iptname.value != null && iptname.value.includes(' ') && iptname.value.length > 10) {
            if (iptemail.value != null && iptemail.value.includes('@')) {
                iptemail.classList.remove("fail")
                iptname.classList.remove("fail")
                console.log(iptname.value, iptemail.value)
                SendEmail(iptname.value, iptemail.value)
            } else { iptemail.classList.add("fail"); }
        } else {
            if (iptemail.value == null || !iptemail.value.includes('@')) { iptemail.classList.add("fail") }
            iptname.classList.add("fail");
            console.log(iptname.value, iptemail.value)
        }
    }

    return (
        <section id="newsletter">
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <form className={window.innerWidth > 910 ? 'container' : ''} onSubmit={Validate} >
                <input type="text" id="newslettername" name="nome" placeholder="Digite seu nome" />
                <input type="text" id="newslettermail" name="email" placeholder="Digite seu email" />
                <button className="send-button">Eu quero!</button>
            </form>
        </section>
    );
}

export default Newsletter;
