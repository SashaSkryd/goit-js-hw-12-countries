const refs = {
    notification: document.querySelector('.js-notification'),
}

let timeoutId = null;

refs.notification.addEventListener('click', notificationClickHandler)

export function notificationClickHandler() {
    clearTimeout(timeoutId);
    hideNotification()
};

export function showNotification() {
    refs.notification.classList.add('is-visible')

    timeoutId = setTimeout(() => {
        hideNotification()
    }, 5000)
};

export function hideNotification() {
    refs.notification.classList.remove('is-visible')
};

