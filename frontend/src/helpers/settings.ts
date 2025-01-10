import { Button } from "react-chatbotify";

export const settings = {
  ariaLabel: {
    chatButton: "Chat with me",
    audioButton: "toogle audio",
  },
  // botBubble: {
  //   showAvatar: true,
  //   animate: true,
  // },
  general: {
    showFooter: false,
    flowStartTrigger: "ON_CHATBOT_INTERACT",
  },
  // chatHistory: { storageKey: "example_basic_form" },
  userBubble: {
    showAvatar: true,
  },
  // chatWindow: {
  //   defaultOpen: true,
  // },
  header: {
    title: "Postrecin",
    buttons: [
      // Button.NOTIFICATION_BUTTON,
      // Button.AUDIO_BUTTON,
      Button.CLOSE_CHAT_BUTTON,
    ],
  },
  tooltip: {
    // mode: "ALWAYS",
    text: "Te ayudo?",
  },
};
