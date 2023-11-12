import { Middleware } from "redux";
import { setError, setLoading, setNumber } from "./appSlice";
import { WEBSOCKET_CONNECT, WEBSOCKET_DISCONNECT } from "./types";

const websocketMiddleware: Middleware = (store) => (next) => (action) => {
  let socket: WebSocket | null = null;

  if (action.type === WEBSOCKET_CONNECT) {
    socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      store.dispatch(setLoading(false));
    };

    socket.onerror = () => {
      store.dispatch(setError(true));
    };

    socket.onmessage = (event) => {
      const number = parseFloat(event.data);
      store.dispatch(setNumber(number));
    };

    socket.onclose = () => {
      socket = null;
    };
  }

  if (action.type === WEBSOCKET_DISCONNECT && socket) {
    socket.close();
  }

  return next(action);
};

export default websocketMiddleware;
