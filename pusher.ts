import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: "1527066",
    key: "8d9fbb6c46859c497736",
    secret: "d191de8c7aa62c5ca457",
    cluster: "ap1",
    useTLS: false
});

export const clientPusher = new ClientPusher('8d9fbb6c46859c497736', {
    cluster: 'ap1',
    forceTLS: false
});