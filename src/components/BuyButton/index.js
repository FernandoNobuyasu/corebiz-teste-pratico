import React from 'react';

const BuyButton = () => {
    // const [buyitems, setBuyItems] = React.useState(['']);

    function BuyProd() {
        let cartQnt = localStorage.getItem('cartQnt') || 0;
        cartQnt = parseInt(cartQnt) + 1;
        document.getElementById('minicart__qnt').innerHTML = cartQnt;
        localStorage.setItem('cartQnt', cartQnt);
    }

    return (
        <>
            <button className="product__buy" onClick={BuyProd}>COMPRAR</button>
        </>
    );
}

export default BuyButton;
