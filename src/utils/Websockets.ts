import { store } from "../store";

export interface Message {
    chat_id: number;
    time: string;
    type: string;
    user_id: number;
    content: string;
    file?: {
        id: number;
        user_id: number;
        path: string;
        filename: string;
        content_type: string;
        content_size: number;
        upload_date: string;
    };
}

const sockets: Map<number, WebSocket> = new Map();

const newConnect = async (chatId: number, token: string) => {
  if (sockets.has(chatId)) {
    return;
  }

  const userId = store.getState().user?.id;
  const url = "wss://ya-praktikum.tech/ws/chats";
  const socket = new WebSocket(`${url}/${userId}/${chatId}/${token}`);
  sockets.set(+chatId, socket);

  socket.addEventListener("open", () => {
    socket.send(JSON.stringify({content: "0", type: "get old"}));
  });

  socket.addEventListener("close", (event) => {
    if (event.wasClean) {
      console.log(`Код: ${event.code} - Соединение закрыто чисто`);
    } else {
      console.log(`Код: ${event.code} - Обрыв соединения`);
    }

    sockets.delete(chatId);
    clearInterval(ping);
  });

  socket.addEventListener("error", (event: any) => {
    console.log("Ошибка", event.message);
  });

  socket.addEventListener("message", (event) => {
    try {
      const data = JSON.parse(event.data);

      if (data.type && data.type === "pong") {
        return;
      }

      let messagesToAdd: Message[] = [];

      if (Array.isArray(data)) {
        messagesToAdd = data.reverse();
      } else {
        messagesToAdd.push(data);
      }

      const messageList = store.getState().messageList?.[+chatId];
      const currentList: Record<number, any> = {};
      if (messageList) {
        console.log(messageList)
        currentList[+chatId] = [...messageList || {}, ...messagesToAdd];
      } else {
        currentList[+chatId] = [...messagesToAdd];
      }
      store.set('messageList',{ ...currentList });
    } catch (e: any) {
      console.error(e);
    }
  });

  const ping = setInterval(() => {
    socket.send(JSON.stringify({type: "ping"}));
  }, 10000);
};

const sendMessage = (id: number, message: string) => {
  const socket = sockets.get(+id);
  if (socket) {
    socket.send(JSON.stringify({type: "message", content: message}));
  }
};

const closeSockets = () => {
  Array.from(sockets.values()).forEach(socket => {
    socket.close();
  });

  sockets.clear();
};

export {newConnect, sendMessage, closeSockets};
