import { useState } from "react";
import { ENGLISH, SPANISH } from "../../utils/langs";

import NotificationsES from "../../data/es/translation.json";
import NotificationsEN from "../../data/en/translation.json";
import NotificationsZH from "../../data/zh/translation.json";


import type { INotifications } from "../../interface/LangSupport";
import BellIcon from "./icons/Bell";

interface INotificationComponent {
    lang: string
}

export const NOTIFICATION_GRANTED = 'granted';
export const NOTIFICATION_DENIED = 'denied';

const NotificationButton = ({ lang }: INotificationComponent) => {
    const [ texts, _ ] = useState<INotifications>(
        lang === SPANISH ? NotificationsES.notifications : 
        lang === ENGLISH ? NotificationsEN.notifications : NotificationsZH.notifications
    );
    const [ show, setShow ] = useState<boolean>(Notification.permission !== NOTIFICATION_GRANTED);
    const url = `${import.meta.env.DEV ? 'http://localhost:3000' : 'https://brayan-tellez-server.vercel.app' }`;

    const RegisterServiceWorker = async () => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            const registration = await navigator.serviceWorker.register('/service-worker.js');

            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: import.meta.env.PUBLIC_KEY
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

    const EnableNotifications = () => {
        if(!("Notification" in window)) {
            return;
        }

        if(Notification.permission === NOTIFICATION_GRANTED) {
            ShowNotification(texts.greatings.title, texts.greatings.message);
            return RegisterServiceWorker();
        }

        Notification.requestPermission()
            .then(( permiso ) => {
                if(permiso === NOTIFICATION_GRANTED) {
                    ShowNotification(texts.greatings.title, texts.greatings.message);
                    setShow(false);
                }
                return RegisterServiceWorker();
            })
            .catch(console.error);
    }

    const ShowNotification = (title: string, message: string) => {
        if(Notification.permission !== NOTIFICATION_GRANTED) {
            return;
        }

        new Notification(title, {
            body: message
        });
    }

    return "Notification" in window && show ?
        <button aria-label="Enable Notifications" className="tag skill notify" onClick={EnableNotifications}>
            <BellIcon/>
            <span>{ texts.button }</span>
        </button>
    : null;
}

export default NotificationButton;