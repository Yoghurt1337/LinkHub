// links.js

const links = [
    { url: 'https://soundcloud.com/nightyouth1337', iconClass: 'fab fa-soundcloud' },
    { url: 'https://steamcommunity.com/id/zero_two0', iconClass: 'fab fa-steam' },
    { url: 'https://discord.gg/invite/Fu4B8EE736', iconClass: 'fab fa-discord' }
];

function createLinks() {
    const linksContainer = document.createElement('div');
    linksContainer.classList.add('fake-activity-links');

    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.target = '_blank'; // Open link in a new tab
        const iconElement = document.createElement('i');
        iconElement.className = link.iconClass; // Use className instead of classList.add
        linkElement.appendChild(iconElement);
        linksContainer.appendChild(linkElement);
    });

    return linksContainer;
}
