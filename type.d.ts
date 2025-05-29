interface WebkitMessageHandler {
  postMessage: (message: any) => void;
}

interface Window {
  webkit?: {
    messageHandlers?: Record<string, WebkitMessageHandler>;
  };
}
