(function() {
    // Define normal CSS for the scroll-to-top button (no Tailwind)
    const styles = `
        #clash-scroll-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            user-select: none;
        }
        #clash-scroll-top.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        .clash-up-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 55px;
            height: 55px;
            background: linear-gradient(to bottom, #fde047, #eab308);
            border: 3px solid #000;
            border-radius: 12px;
            box-shadow: 0 6px 0 #a16207, 0 10px 15px rgba(0,0,0,0.4);
            transition: all 0.1s ease;
        }
        .clash-up-btn .arrow-icon {
            width: 26px;
            height: 26px;
            display: block;
            color: white;
            filter: drop-shadow(-1px -1px 0 #000)
                    drop-shadow(1px -1px 0 #000)
                    drop-shadow(-1px 1px 0 #000)
                    drop-shadow(1px 1px 0 #000);
            transform: translateY(-2px);
        }
        .clash-up-btn:active {
            transform: translateY(4px);
            box-shadow: 0 2px 0 #a16207, 0 4px 8px rgba(0,0,0,0.4);
        }
        @media (max-width: 640px) {
            #clash-scroll-top {
                bottom: 20px;
                right: 20px;
            }
            .clash-up-btn {
                width: 48px;
                height: 48px;
            }
            .clash-up-btn .arrow-icon {
                width: 20px;
                height: 20px;
            }
        }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // No Tailwind or icon font: use SVG for the up arrow
    const btnContainer = document.createElement('div');
    btnContainer.id = 'clash-scroll-top';
    btnContainer.innerHTML = `
        <div class="clash-up-btn">
            <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="white">
                <path d="M14 22V6M14 6l-8 8M14 6l8 8" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    `;
    document.body.appendChild(btnContainer);

    const handleScroll = () => {
        if (window.scrollY > 400) {
            btnContainer.classList.add('show');
        } else {
            btnContainer.classList.remove('show');
        }
    };

    btnContainer.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();
})();