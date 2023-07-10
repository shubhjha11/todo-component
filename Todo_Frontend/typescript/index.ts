// const ToDoComponent = require('./TodoComponent.js');
// const SessionService = require('./SessionService.js');
// const LocalService = require('./LocalStorage.js');

import ToDoComponent from './TodoComponent.js';
// import SessionService from './SessionService.js';
import LocalService from './LocalStorage.js';
// import RemoteService from './RemoteService.js';

document.addEventListener('DOMContentLoaded', () => {
    // const sessionService = new SessionService();
    const localStorageService = new LocalService();
    // const remoteService = new RemoteService();
    const todoApp = new ToDoComponent(localStorageService);
});
