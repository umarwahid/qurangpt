import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { FAQs, Features, Footer, Header, Hero } from "./components";
import { BubbleChat } from "flowise-embed-react";

const App = () => {
  // header stuck
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isSticky={isSticky} />
      <main id="main">
        <Hero />
        <Features />
        <FAQs />
      </main>
      <BubbleChat
        chatflowid="f26bd670-1109-4fca-ac26-1d12879bee27"
        apiHost="http://localhost:3000"
        theme={{
          button: {
            backgroundColor: "#0866FF",
            right: 20,
            bottom: 20,
            size: "medium",
            iconColor: "white",
            // customIconSrc:
            //   "https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg",
          },
          chatWindow: {
            welcomeMessage: "Hello! This is custom welcome message",
            backgroundColor: "#ffffff",
            // height: 700,
            // width: 400,
            fontSize: 16,
            poweredByTextColor: "#ffffff",
            botMessage: {
              backgroundColor: "#f7f8ff",
              textColor: "#303235",
              showAvatar: true,
              // avatarSrc:
              //   "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png",
            },
            userMessage: {
              backgroundColor: "#3B81F6",
              textColor: "#ffffff",
              showAvatar: true,
              avatarSrc:
                "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
            },
            textInput: {
              placeholder: "Type your question",
              backgroundColor: "#ffffff",
              textColor: "#303235",
              sendButtonColor: "#3B81F6",
            },
          },
        }}
      />
      <Footer />
    </div>
  );
};

export default App;