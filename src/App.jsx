import './App.css';
import AboutUs from './Components/AboutUs';
import Carosel from './Components/Carosel';
import { Chatbot } from './Components/Chatbot';
import Header from './Components/Header';
// import { BubbleChat } from 'flowise-embed-react';
// import 'flowise-embed/dist/web.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Carosel/>
      <AboutUs/>
        {/* <BubbleChat
            chatflowid="d712ff57-c465-42a7-8973-7ddb671dc74e"
            apiHost="http://localhost:3000"
            theme={{
                button: {
                    backgroundColor: "#3B81F6",
                    right: 20,
                    bottom: 20,
                    size: "medium",
                    iconColor: "white",
                    customIconSrc: "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
                },
                chatWindow: {
                    welcomeMessage: "Hello! This is Quran GPT",
                    backgroundColor: "#ffffff",
                    height: 500,
                    width: 400,
                    fontSize: 16,
                    poweredByTextColor: "#303235",
                    botMessage: {
                        backgroundColor: "#f7f8ff",
                        textColor: "#303235",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
                    },
                    userMessage: {
                        backgroundColor: "#3B81F6",
                        textColor: "#ffffff",
                        showAvatar: true,
                        avatarSrc: "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
                    },
                    textInput: {
                        placeholder: "Type your question",
                        backgroundColor: "#ffffff",
                        textColor: "#303235",
                        sendButtonColor: "#3B81F6",
                    }
                }
            }}
        /> */}
        <Chatbot/>
    </div>
  );
}

export default App;
