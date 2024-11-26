const notificationsContainer = document.getElementById('notifications');

// Lyssna på meddelanden från LUA
window.addEventListener('message', (event) => {
    if (event.data.action === 'showNotification') {
        createNotification(event.data.message, event.data.duration, event.data.type);
    }
});

function createNotification(message, duration, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type || 'info'}`; // Standardtyp är 'info'

    // Lägg till ikon beroende på typ
    const icon = document.createElement('i');
    icon.className = `icon fas ` + getIconForType(type);

    // Lägg till ikon och text
    notification.appendChild(icon);
    notification.appendChild(document.createTextNode(message));

    notificationsContainer.appendChild(notification);

    // Standardvärde för tid om ingen tid skickas
    const displayDuration = duration || 5000;

    // Ta bort notifikationen efter anpassad tid
    setTimeout(() => {
        notification.remove();
    }, displayDuration);
}

function getIconForType(type) {
    switch(type) {
        case 'success': return 'fa-solid fa-check';  // Framgång - grön
        case 'error': return 'fa-exclamation-circle'; // Fel - röd
        case 'info': return 'fa-info-circle';  // Info - blå
        case 'warning': return 'fa-exclamation-triangle'; // Varning - orange
        default: return 'fa-info-circle'; // Standard - blå
    }
}