const ComponentStyles = `
    <style>
        :root {
            --nav-bg: rgba(15, 23, 42, 0.95);
            --footer-bg: #020617;
            --border-color: #000000;
            --text-light: #f8fafc;
            --text-muted: #9ca3af;
            --accent-gold: #FFD700;
            --accent-blue: #3b82f6;
            --font-display: 'Lilita One', cursive;
            --font-body: 'Montserrat', sans-serif;
        }
        .site-nav {
            position: fixed;
            width: 100%;
            z-index: 50;
            top: 0;
            background: var(--nav-bg);
            border-bottom: 3px solid var(--border-color);
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            transition: all 0.3s ease;
        }
        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 80px;
        }
        .nav-brand {
            display: flex;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
            gap: 12px;
        }
        .nav-logo {
            width: 40px;
            height: 40px;
            object-fit: contain;
        }
        .nav-brand-text {
            font-family: var(--font-heading, var(--font-display));
            font-size: 2.25rem;
            color: var(--text-light);
            letter-spacing: 2px;
            text-shadow: 2px 2px 0 #000;
            margin-top: 4px;
        }
        .nav-links-desktop {
            display: none;
            align-items: center;
            gap: 32px;
        }
        .nav-link {
            font-family: var(--font-heading, var(--font-display));
            color: var(--text-light);
            font-size: 1.25rem;
            text-decoration: none;
            text-transform: uppercase;
            text-shadow: 1px 1px 0 #000;
            transition: transform 0.2s ease, color 0.2s ease;
        }
        .nav-link:hover {
            color: var(--accent-gold-hover, var(--accent-gold));
            transform: scale(1.1);
        }
        .nav-link.discord-link {
            color: #93c5fd;
        }
        .nav-link.discord-link:hover {
            color: var(--accent-blue-hover, var(--accent-blue));
        }
        .nav-mobile-toggle {
            display: flex;
            background: #1e293b;
            color: var(--text-light);
            border: 2px solid var(--border-color);
            padding: 8px 14px;
            border-radius: 8px;
            font-size: 1.25rem;
            cursor: pointer;
            box-shadow: 0 4px 0 #000;
            transition: all 0.1s ease;
        }
        .nav-mobile-toggle:active {
            transform: translateY(4px);
            box-shadow: 0 0 0 #000;
        }
        .mobile-menu {
            display: none;
            background: #1e293b;
            border-bottom: 3px solid var(--border-color);
            padding: 16px 20px;
            flex-direction: column;
            gap: 12px;
        }
        .mobile-menu.open {
            display: flex;
        }
        .mobile-nav-link {
            display: block;
            padding: 12px;
            background: rgba(15, 23, 42, 0.5);
            border: 1px solid #334155;
            border-radius: 8px;
            color: var(--text-light);
            font-family: var(--font-heading, var(--font-display));
            font-size: 1.25rem;
            text-transform: uppercase;
            text-decoration: none;
            text-align: center;
            text-shadow: 1px 1px 0 #000;
            transition: background 0.2s ease;
        }
        .mobile-nav-link:active {
            background: #0f172a;
        }
        .mobile-nav-link.discord-link {
            color: var(--accent-gold);
            border-color: #a16207;
            background: rgba(161, 98, 7, 0.2);
        }
        .site-footer {
            background: var(--footer-bg);
            padding: 48px 20px;
            border-top: 4px solid var(--border-color);
            margin-top: auto;
        }
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
        }
        .footer-brand {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .footer-brand-text {
            font-family: var(--font-body, var(--font-body));
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--text-muted);
            letter-spacing: 2px;
        }
        .footer-links {
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
            justify-content: center;
        }
        .footer-link {
            color: var(--text-muted);
            font-family: var(--font-body, var(--font-body));
            font-weight: 700;
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.2s ease;
        }
        .footer-link:hover {
            color: var(--accent-gold);
        }
        .footer-copy {
            text-align: center;
            color: #64748b;
            font-family: var(--font-body, var(--font-body));
            font-size: 0.9rem;
            font-weight: 600;
        }
        .footer-disclaimer {
            margin-top: 8px;
            font-size: 0.75rem;
            max-width: 400px;
            line-height: 1.5;
            margin-left: auto;
            margin-right: auto;
        }
        @media (min-width: 768px) {
            .nav-links-desktop { display: flex; }
            .nav-mobile-toggle { display: none; }
            .mobile-menu { display: none !important; }
        }
    </style>
`;

const NavbarComponent = `
    <nav class="site-nav">
        <div class="nav-container">
            <div class="nav-brand" onclick="window.scrollTo(0,0)">
                <img src="assets/navicon.png" alt="Logo" class="nav-logo">
                <a href="index.html" style="text-decoration: none;">
                    <span class="nav-brand-text">GRINDEROUZ</span>
                </a>
            </div>
            <div class="nav-links-desktop">
                <a href="index.html" class="nav-link">Home</a>
                <a href="#rules" class="nav-link">Rules</a>
                <a href="#leadership" class="nav-link">Leadership</a>
                <a href="#join" class="nav-link discord-link">Discord</a>
            </div>
            <button id="mobile-menu-btn" class="nav-mobile-toggle">
                <i class="fa-solid fa-bars"></i>
            </button>
        </div>
        <div id="mobile-menu" class="mobile-menu">
            <a href="index.html" class="mobile-nav-link">Home</a>
            <a href="#rules" class="mobile-nav-link">Rules</a>
            <a href="#leadership" class="mobile-nav-link">Leadership</a>
            <a href="#join" class="mobile-nav-link discord-link">Join Discord</a>
        </div>
    </nav>
`;

const FooterComponent = `
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <img src="assets/navicon.png" alt="Logo" class="nav-logo" style="width: 32px; height: 32px;">
                <span class="footer-brand-text">GRINDEROUZ</span>
            </div>
            <div class="footer-links">
            <span>| Supercell</span>
                <a href="https://store.supercell.com/" target="_blank" class="footer-link">Supercell Store</a>
                <a href="https://supercell.com/en/supercell-id/" target="_blank" class="footer-link">Supercell ID</a>
                <span>| Grinderouz</span>
                <a href="https://discord.gg/jEN9NNdA4v" class="footer-link">Discord</a>
                <a href="https://www.youtube.com/@Grinderouz223" target="_blank" class="footer-link">YouTube</a>
            </div>
            <div class="footer-copy">
                <p>&copy; 2025-2026 Grinderouz223 Clan. All rights reserved.</p>
                <p class="footer-disclaimer">This website is not affiliated with, endorsed, sponsored, or specifically approved by Supercell.</p>
            </div>
        </div>
    </footer>
`;

function injectStyles() {
    if (!document.getElementById('grinderouz-component-styles')) {
        const styleDiv = document.createElement('div');
        styleDiv.id = 'grinderouz-component-styles';
        styleDiv.innerHTML = ComponentStyles;
        document.head.appendChild(styleDiv);
    }
}

function initApp() {
    injectStyles();

    const navCont = document.getElementById('navbar-container');
    const footCont = document.getElementById('footer-container');

    if (navCont) navCont.innerHTML = NavbarComponent;
    if (footCont) footCont.innerHTML = FooterComponent;

    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('open');
        });

        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 90;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

window.showDiscordToast = function() {
    const toast = document.getElementById('discord-toast');
    if (!toast) return;

    toast.style.transform = 'translate(-50%, 0)';
    toast.style.opacity = '1';
    toast.style.pointerEvents = 'auto';

    setTimeout(() => {
        toast.style.transform = 'translate(-50%, 100px)';
        toast.style.opacity = '0';
        toast.style.pointerEvents = 'none';
    }, 3000);
};

document.addEventListener('DOMContentLoaded', initApp);