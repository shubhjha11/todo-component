// const ToDoComponent = require('./TodoComponent.js');
// const SessionService = require('./SessionService.js');
// const LocalService = require('./LocalStorage.js');

import ToDoComponent from './components/TodoComponent.js';
// import SessionService from './services/SessionService.js';
import LocalService from './services/LocalStorage.js';
import RemoteService from './services/RemoteService.js';

document.addEventListener('DOMContentLoaded', () => {
    // const sessionService = new SessionService();
    const localStorageService = new LocalService();
    // const remoteService = new RemoteService();
    const todoApp = new ToDoComponent(localStorageService);
});
