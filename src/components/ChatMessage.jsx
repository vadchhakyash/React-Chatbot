import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({chat}) => {
    console.log("chat data recive:",chat);
    
    if(!chat){
        return <div>No chat data</div>
    }
  return (
    <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message ${chat.isError ? "error" : ""}`}>
        {chat.role === 'model' && <ChatbotIcon/>}
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
