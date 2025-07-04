export const NOTIFICATION_GRANTED = 'granted';
export const NOTIFICATION_DENIED = 'denied';

const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export const RegisterServiceWorker = async (publicKey, url) => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        const registration = await navigator.serviceWorker.register('/service-worker.js');

        const convertedVapidKey = urlBase64ToUint8Array(publicKey);

        const subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: convertedVapidKey
        });

        return fetch(`${url}/api/subscribe`, {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return null;
}

export const EnableNotifications = (greating, publicKey, url) => {
    if(!("Notification" in window)) {
        return;
    }

    if(Notification.permission === NOTIFICATION_GRANTED) {
        ShowNotification(greating.title, greating.message);
        return RegisterServiceWorker(publicKey, url);
    }

    Notification.requestPermission()
        .then(( permiso ) => {
            if(permiso === NOTIFICATION_GRANTED) {
                ShowNotification(greating.title, greating.message);
            }
            return RegisterServiceWorker(publicKey, url);
        })
        .catch(console.error);
}

export const ShowNotification = (title, message) => {
    if(Notification.permission !== NOTIFICATION_GRANTED) {
        return;
    }

    new Notification(title, {
        body: message
    });
}