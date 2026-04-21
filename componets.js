const NavbarComponent = `
    <nav class="fixed w-full z-50 top-0 transition-all duration-300 bg-slate-900/95 border-b-4 border-slate-950 shadow-xl backdrop-blur-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0 flex items-center cursor-pointer" onclick="window.scrollTo(0,0)">
                    <div class="w-10 h-10 rounded bg-[none] border-2 border-none flex items-center justify-center mr-3">
                        <img src="assets/navicon.png" alt="Logo">
                    </div>
                    <a href="index.html"><span class="sc-heading text-2xl tracking-wider">GRINDEROUZ</span></a>
                </div>
                
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a href="#about" class="nav-link text-white text-lg">About</a>
                        <a href="#rules" class="nav-link text-white text-lg">Rules</a>
                        <a href="#leadership" class="nav-link text-white text-lg">Leadership</a>
                        <a href="#applynow" class="nav-link text-white text-lg">Apply Now!</a>
                        <a href="#join" class="nav-link text-[lightblue] hover:text-[#7289da] text-lg">Discord</a>
                    </div>
                </div>

                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-gray-300 hover:text-white focus:outline-none p-2 bg-slate-800 rounded">
                        <i class="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <div id="mobile-menu" class="hidden md:hidden bg-slate-800 border-b-4 border-black">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#about" class="text-white block px-3 py-2 rounded-md text-base font-bold uppercase sc-heading mobile-nav-link">About</a>
                <a href="#rules" class="text-white block px-3 py-2 rounded-md text-base font-bold uppercase sc-heading mobile-nav-link">Rules</a>
                <a href="#leadership" class="text-white block px-3 py-2 rounded-md text-base font-bold uppercase sc-heading mobile-nav-link">Leadership</a>
                <a href="#applynow" class="text-white block px-3 py-2 rounded-md text-base font-bold uppercase sc-heading mobile-nav-link">Apply Now!</a>
                <a href="#join" class="text-yellow-400 block px-3 py-2 rounded-md text-base font-bold uppercase sc-heading mobile-nav-link">Join Discord</a>
            </div>
        </div>
    </nav>
`;

const FooterComponent = `
    <footer class="bg-slate-950 py-8 border-t-4 border-black mt-auto">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-y-6">
            <div class="flex items-center">
                <div class="w-8 h-8 rounded flex items-center justify-center mr-2">
                    <img src="assets/navicon.png" alt="Logo">
                </div>
                <span class="sc-heading text-xl text-slate-400">GRINDEROUZ</span>
            </div>
            
            <div class="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-x-6 text-slate-400 text-sm font-bold">
                <a href="https://store.supercell.com/" target="_blank" class="hover:text-yellow-400 transition-colors">Supercell Store</a>
                <a href="https://supercell.com/en/supercell-id/" target="_blank" class="hover:text-yellow-400 transition-colors">Supercell ID</a>
                <a href="https://discord.gg/jEN9NNdA4v" class="hover:text-yellow-400 transition-colors">Community</a>
            </div>

            <div class="text-slate-500 font-bold text-sm text-center md:text-right">
                <p>&copy; 2025-2026 Grinderouz223 Clan. All rights reserved.</p>
                <p class="mt-1 text-xs max-w-sm md:max-w-none">This website is not affiliated with, endorsed, sponsored, or specifically approved by Supercell.</p>
            </div>
        </div>
    </footer>
`;

function initApp() {
    const navCont = document.getElementById('navbar-container');
    const footCont = document.getElementById('footer-container');

    if (navCont) navCont.innerHTML = NavbarComponent;
    if (footCont) footCont.innerHTML = FooterComponent;

    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                const headerOffset = 80;
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

    toast.classList.remove('translate-y-32', 'opacity-0', 'pointer-events-none');
    
    setTimeout(() => {
        toast.classList.add('translate-y-32', 'opacity-0', 'pointer-events-none');
    }, 3000);
};

document.addEventListener('DOMContentLoaded', initApp);