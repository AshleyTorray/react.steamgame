import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import close from "../../assets/img/close.svg";
import burger from "../../assets/img/burger.svg";
import steam from "../../assets/img/steam.svg";
import X from "../../assets/img/x.svg";
import Discord from "../../assets/img/discord.svg";
import Twitch from "../../assets/img/Twitch.svg";
import Medium from "../../assets/img/Medium.svg";
import Youtube from "../../assets/img/Youtube.svg";

const Header =() => {

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <a href="/" className="header__logo">
                        <img src={logo} alt=''/>
                    </a>
                    <div className="menu">
                        <nav className="nav">
                            <a className = "nav__link"><Link to='../howtostart'><span>How to start</span></Link></a>
                            <a className = "nav__link"><Link to='../support'><span>Support</span></Link></a>
                            <a className = "nav__link"><Link to='../rules'><span>Rules</span></Link></a>
                        </nav>
                        <button className="menu__close">
                            <img src={close}/>
                        </button>
                        <div class="socials">
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={X} alt=""/>
                                </span>
                                <span class="socials__title text22">
                                    X.com
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Discord} alt=""/>
                                </span>
                                <span class="socials__title text22">
                                    discord
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Twitch} alt=""/>
                                </span>
                                <span class="socials__title text22">
                                    Twitch
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Youtube} alt=""/>
                                </span>
                                <span class="socials__title text22">
                                    Youtube
                                </span>
                            </a>
                            <a href="" class="socials__item">
                                <span class="socials__icon">
                                    <img src={Medium} alt=""/>
                                </span>
                                <span class="socials__title text22">
                                    Medium
                                </span>
                            </a>
                        </div>
                    </div>
                    <button class="header__btn m-btn m-btn-red">
                        <img src={steam} alt=""/>
                        <span>Login <br/> with steam</span>
                    </button>
                    <button class="burger m-btn m-btn-red">
                        <img src={burger} alt=""/>
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header