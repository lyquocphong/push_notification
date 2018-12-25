console.log('Service worker Loaded');

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log('Push Received....');
    self.registration.showNotification(data.title, {
        body: 'Notified by Phong Ly',
        icon: 'https://randomuser.me/api/portraits/men/12.jpg'
    });
})