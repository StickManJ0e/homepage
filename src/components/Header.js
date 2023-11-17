import React, { useEffect, useState } from "react";
import "../styles/Header.css"

const Header = () => {
    useEffect(() => {
        // Reveal text on scroll in view
        const main = document.querySelector('.box.main > .text');
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    main.classList.add('text-reveal-transition');
                    return;
                }
    
                main.classList.remove('text-reveal-transition');
            });
        });
    
        observer.observe(document.querySelector('.box.main'));

    }, [])

    return (
        <header>
            <div class="container">
                <div class="box main">
                    <div class="text text-reveal-transition">
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus tellus diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent rutrum risus quis dui molestie, vitae sagittis quam interdum. Etiam congue porttitor commodo. Donec vitae nulla massa. Suspendisse finibus, velit ut consequat posuere, urna mi hendrerit turpis, nec porttitor nibh urna eget augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales id metus vitae venenatis. Duis ac nunc risus. Cras in turpis vel risus fringilla efficitur id quis diam. Phasellus tincidunt congue tristique. Quisque magna magna, rutrum molestie dui ut, dapibus ultricies purus.</p>
                    </div>
                </div>
                <div class="box overlay">Welcome</div>
            </div>
        </header>
    )
}

export default Header;