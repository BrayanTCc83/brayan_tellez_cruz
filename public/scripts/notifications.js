export const NOTIFICATION_GRANTED = 'granted';
export const NOTIFICATION_DENIED = 'denied';

export const EnableNotifications = (greating) => {
    if(!("Notification" in window)) {
        return;
    }

    if(Notification.permission === NOTIFICATION_GRANTED || Notification.permission === NOTIFICATION_DENIED) {
        return;
    }

    Notification.requestPermission()
        .then(( permiso ) => {
            if(permiso === NOTIFICATION_GRANTED) {
                ShowNotification(greating.title, greating.message);
            }
        });
}

export const ShowNotification = (title, message) => {
    if(Notification.permission !== NOTIFICATION_GRANTED) {
        return;
    }

    new Notification(title, {
        body: message
    });
}