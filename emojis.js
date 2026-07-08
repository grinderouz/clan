const EmojiSystem = (() => {
    const EMOJI_DATA = {
        "404": "assets/emojis/404.png",
        "builder": "assets/emojis/builder.png",
        "wizard": "assets/emojis/wizard.png",
        "clan": "assets/emojis/clan.gif",
        "member": "assets/emojis/member.png",
        "troopdonations": "assets/emojis/troopsdonation.png",
        "elixir": "assets/emojis/elixir.png",
        "gold": "assets/emojis/gold.png",
        "usflag": "assets/emojis/usflag.png",
        "dark-elixir": "assets/emojis/dark-elixir.png",
        "gem": "assets/emojis/gem.png",
        "warleag": "assets/emojis/war-league.png",
        "discord": "assets/emojis/discord.png",
        "activity": "assets/emojis/activity.png",
        "community": "assets/emojis/community.png",
        "leader": "assets/emojis/leader.png",
        "xp": "assets/emojis/xp.png",
        "link": "assets/emojis/link.png",
        "colead": "assets/emojis/co-lead.png",
        "elder": "assets/emojis/elder.png",
        "blacklist": "assets/emojis/blacklisted.png",
        "online-basic": "assets/emojis/online-basic.png",
        "online-ultimate": "assets/emojis/online-ultimate.png",
        "online-creators": "assets/emojis/online-creators.png",
        "apple-pay": "assets/emojis/apple-pay.png",
        "cash-app": "assets/emojis/cash-app.png",
    };

    const DEFAULT_SIZE = "22px";

    function getEmojiStyle(size = DEFAULT_SIZE) {
        return [
            "display: inline-block",
            `width: ${size}`,
            `height: ${size}`,
            "vertical-align: bottom",
            "margin: 0 2px",
            "object-fit: contain"
        ].join("; ") + ";";
    }

    function replaceText(text, size) {
        const style = getEmojiStyle(size);
        return text.replace(/:([a-z0-9_-]+):/gi, function(match, p1) {
            const emojiPath = EMOJI_DATA[p1.toLowerCase()];
            if (emojiPath) {
                return `<img src="${emojiPath}" alt="${p1}" title=":${p1}:" style="${style}" class="custom-emoji">`;
            }
            return match;
        });
    }

    function parse(selector) {
        let elements;
        if (typeof selector === 'string') {
            elements = document.querySelectorAll(selector);
        } else if (selector instanceof NodeList || Array.isArray(selector)) {
            elements = selector;
        } else {
            elements = [selector];
        }
        elements.forEach(function(el) {
            if (el && el.innerHTML) {
                const customSize = el.getAttribute('data-emoji-size') || DEFAULT_SIZE;
                el.innerHTML = replaceText(el.innerHTML, customSize);
            }
        });
    }

    window.addEventListener('DOMContentLoaded', function() {
        parse('[data-emojis]');
    });

    return {
        data: EMOJI_DATA,
        parse,
        replaceText
    };
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmojiSystem;
}