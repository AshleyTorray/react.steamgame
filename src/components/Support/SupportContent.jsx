import React from "react";
import Close2 from "../../assets/img/close2.svg";
const SupportContent = () => {
    return(
            <div class="container">
                <div class="support__grid">
                    <div class="support__col">
                        <h2 class="text80">
                            FAQ
                        </h2>
                        <div class="faq__items">
                            <div class="qa-card spoiler">
                                <div class="qa-card__top spoiler__toggle">
                                    <div class="qa-card__btn">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="_hide" d="M14 3.5V24.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 14L24.5 14" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="qa-card__title text46">
                                        Can I make money from my video/stream?
                                    </div>
                                </div>

                                <div class="qa-card__bottom spoiler__hidden">
                                    <div class="spoiler__wrap">
                                        <div class="text20 text16-tablet">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="qa-card spoiler">
                                <div class="qa-card__top spoiler__toggle">
                                    <div class="qa-card__btn">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="_hide" d="M14 3.5V24.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 14L24.5 14" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="qa-card__title text46">
                                        What is the staging branch?
                                    </div>
                                </div>

                                <div class="qa-card__bottom spoiler__hidden">
                                    <div class="spoiler__wrap">
                                        <div class="text20 text16-tablet">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="qa-card spoiler">
                                <div class="qa-card__top spoiler__toggle">
                                    <div class="qa-card__btn">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="_hide" d="M14 3.5V24.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 14L24.5 14" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="qa-card__title text46">
                                        I’m crashing! Performance is poor!
                                    </div>
                                </div>

                                <div class="qa-card__bottom spoiler__hidden">
                                    <div class="spoiler__wrap">
                                        <div class="text20 text16-tablet">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="qa-card spoiler">
                                <div class="qa-card__top spoiler__toggle">
                                    <div class="qa-card__btn">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="_hide" d="M14 3.5V24.5" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 14L24.5 14" stroke="#1C1C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div class="qa-card__title text46">
                                        The server I was playing on is down!
                                    </div>
                                </div>

                                <div class="qa-card__bottom spoiler__hidden">
                                    <div class="spoiler__wrap">
                                        <div class="text20 text16-tablet">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="support__col">
                        <form action="" class="req-form">
                            <div class="text46">
                                Submit a request
                            </div>
                            <div class="req-form__fields">
                                <div class="fg _error">
                                    <label>
                                        Your email address
                                    </label>
                                    <input type="email"/>
                                    <div class="fg__error-text">
                                        <button type="button" class="fg__clear">
                                            <img src={Close2} alt=""/>
                                        </button>
                                        <span>Not correct</span>
                                    </div>
                                </div>
                                <div class="fg">
                                    <label>
                                        Subject
                                    </label>
                                    <input type="text"/>
                                </div>
                                <div class="fg">
                                    <label>
                                        SteamID
                                    </label>
                                    <input type="text"/>
                                </div>
                                <div class="fg">
                                    <label>
                                        Description
                                    </label>
                                    <textarea></textarea>
                                </div>
                                <div class="fg">
                                    <label>
                                        Attachments
                                    </label>
                                    <div class="file-input _full">
                                        <div class="file-input__wrap">
                                            <div class="custom-file-container" data-upload-id="file-input"></div>
                                            <div class="file-input__inner">
                                                <div class="text22 font2">
                                                    Add file or drop files here
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="req-form__btn m-btn m-btn-black">
                                    <span>submit</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    );
}
export default SupportContent