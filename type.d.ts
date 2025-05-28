interface WebkitMesssageHandler {
  postMessage: (message: any) => void;
}

interface Window {
  webkit?: {
    messageHandlers?: {
      bridge?: WebkitMesssageHandler;
    };
  };
}
interface MessagePayload {
  type: string;
  payload: {
    url?: string;
    data?: any;
    [key: string]: any;
  };
}
interface MessageEvent {
  data: MessagePayload;
  origin: string;
  source: Window;
  ports: any[];
  lastEventId: string;
  type: string;
  bubbles: boolean;
  cancelable: boolean;
  composed: boolean;
  defaultPrevented: boolean;
  isTrusted: boolean;
  timeStamp: number;
  srcElement: Window;
  target: Window;
  currentTarget: Window;
  eventPhase: number;
  returnValue: boolean;
  cancelBubble: boolean;
  composedPath: () => EventTarget[];
  initEvent: (type: string, bubbles?: boolean, cancelable?: boolean) => void;
  stopPropagation: () => void;
  stopImmediatePropagation: () => void;
  preventDefault: () => void;
  getPreventDefault: () => boolean;
  initMouseEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window,
    detail?: number,
    screenX?: number,
    screenY?: number,
    clientX?: number,
    clientY?: number,
    ctrlKey?: boolean,
    altKey?: boolean,
    shiftKey?: boolean,
    metaKey?: boolean,
    button?: number,
    relatedTarget?: EventTarget | null
  ) => void;
  initKeyboardEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window,
    key?: string,
    location?: number,
    ctrlKey?: boolean,
    altKey?: boolean,
    shiftKey?: boolean,
    metaKey?: boolean,
    repeat?: boolean,
    locale?: string
  ) => void;
  initUIEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window,
    detail?: number
  ) => void;
  initCustomEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    detail?: any
  ) => void;

  composedPath: () => EventTarget[];
  initEvent: (type: string, bubbles?: boolean, cancelable?: boolean) => void;
  stopPropagation: () => void;
  stopImmediatePropagation: () => void;
  preventDefault: () => void;
  getPreventDefault: () => boolean;

  initMouseEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window,
    detail?: number,
    screenX?: number,
    screenY?: number,
    clientX?: number,
    clientY?: number,
    ctrlKey?: boolean,
    altKey?: boolean,
    shiftKey?: boolean,
    metaKey?: boolean,
    button?: number,
    relatedTarget?: EventTarget | null
  ) => void;
  initKeyboardEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window,
    key?: string,
    location?: number,
    ctrlKey?: boolean,
    altKey?: boolean,
    shiftKey?: boolean,
    metaKey?: boolean,
    repeat?: boolean,
    locale?: string
  ) => void;
  initUIEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    view?: Window,
    detail?: number
  ) => void;
  initCustomEvent: (
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    detail?: any
  ) => void;
}
