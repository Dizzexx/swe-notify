const notificationsContainer = document.getElementById('notifications');

window.addEventListener('message', (event) => {
    if (event.data.action === 'showNotification') {
        createNotification(event.data.message, event.data.duration, event.data.type);
    }
});

function createNotification(message, duration, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type || 'info'}`;

    const icon = document.createElement('i');
    icon.className = `icon fas ` + getIconForType(type);

    notification.appendChild(icon);
    notification.appendChild(document.createTextNode(message));

    notificationsContainer.appendChild(notification);

    const displayDuration = duration || 5000;

    setTimeout(() => {
        notification.remove();
    }, displayDuration);
}

function getIconForType(type) {
    switch(type) {
        case 'success': return 'fa-solid fa-check';
        case 'error': return 'fa-exclamation-circle';
        case 'info': return 'fa-info-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}