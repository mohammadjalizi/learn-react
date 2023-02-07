import React, { Component } from 'react'
import Product from './Product'
import CartProduct from './CartProduct'
import img1 from '../Shoping/images/Album 1.png'

export default class Shop extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [
                { id: 1, title: 'Album 1', price: 5, img: img1 },
                { id: 2, title: 'Album 2', price: 15, img: img1 },
             
            ],

            shoppingCart: [],
            socials: [
                { id: 1, href: 'https://www.youtube.com', img: 'Images/YouTube Logo.png' },
                { id: 2, href: 'https://www.spotify.com', img: 'Images/Spotify Logo.png' },
                { id: 3, href: 'https://www.facebook.com', img: 'Images/YouTube Logo.png' },
            ],
        }


    }


    render() {
        return (
            <>
                <header class="main-header">
                    <nav class="main-nav nav">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">STORE</a></li>
                            <li><a href="#">ABOUT</a></li>
                        </ul>
                    </nav>
                    <h1 class="band-name band-name-large">SabzLearn Shop</h1>
                </header>
                <section class="container content-section">
                    <div class="shop-items">

                        <Product />
                    </div>
                </section>
                <section class="container content-section">
                    <h2 class="section-header">CART</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">Doing</span>
                    </div>
                    <div class="cart-items">

                        <CartProduct />
<img src='../'></img>

                    </div>
                    <button class="btn btn-primary btn-purchase" type="button">
                        Empty Cart
                    </button>
                </section>
                <footer class="main-footer">
                    <div class="container main-footer-container">
                        <h3 class="band-name">The Generics</h3>
                        <ul class="nav footer-nav">

                       
                        </ul>
                    </div>
                </footer>


            </>
        )
    }
}