import React, { useState, useEffect, useRef } from 'react';
import './chatbox.css';
import { MdClose, MdMessage } from 'react-icons/md';
import { BiSolidUser } from "react-icons/bi";
import { BiSend } from "react-icons/bi";

const Chatbox = () => {
    const [userMessage, setUserMessage] = useState('');
    const [messageHistory, setMessageHistory] = useState([]);
    const [showChatbot, setShowChatbot] = useState(false);

    const shopQA = {
        "Mua hàng có được miễn phí vận chuyển không?": "Có, chúng tôi có chính sách miễn phí vận chuyển cho các đơn hàng trên 500,000 VNĐ.",
        "Có sản phẩm giảm giá trong tháng này không?": "Có, chúng tôi đang có chương trình giảm giá cho sản phẩm điện tử trong tháng này.",
        "Sản phẩm này còn hàng không?": "Có, Sản phẩm bên shop luôn sẵn sàng để giao đến bạn.",
    };

    const chatInputRef = useRef(null);
    const chatboxRef = useRef(null);
    const questionBoxRef = useRef(null);

    const appendMessageToChat = (role, content) => {
        setMessageHistory((prevHistory) => [...prevHistory, { role, content }]);
    };

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-icons"><BiSolidUser /></span><p></p>`;
        chatLi.innerHTML = chatContent;
        chatLi.querySelector("p").textContent = message;
        return chatLi;
    };

    const generateResponse = () => {
        const message = shopQA[userMessage];
        setUserMessage('');
        if (message) {
            appendMessageToChat("outgoing", userMessage);
            appendMessageToChat("incoming", message);
        } else {
            appendMessageToChat("outgoing", userMessage);
            appendMessageToChat("incoming", "Hãy để lại lời nhắn kèm số điện thoại .Nhân viên sẽ liên hệ với bạn trong thời gian sớm nhất. Xin chân thành cảm ơn!")
            questionBoxRef.current.style.display = 'none';
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            generateResponse();
        }
    };

    const handleToggleChatbot = () => {
        setShowChatbot((prevShowChatbot) => !prevShowChatbot);
    };

    const handleSendClick = () => {
        generateResponse();
    };

    const handleQuestionClick = (selectedQuestion) => {
        const message = shopQA[selectedQuestion];

        if (message) {
            const chatLiQuestion = createChatLi(selectedQuestion, "outgoing");
            const chatLiAnswer = createChatLi(message, "incoming");

            chatboxRef.current.appendChild(chatLiQuestion);
            chatboxRef.current.appendChild(chatLiAnswer);
            chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
        } else {
            const errorMessage = "Hiện tại nhân viên hỗ trợ không sẵn sàng. Thời gian làm việc của chúng tôi từ 08:00 đến 21:00 tất cả các ngày trong tuần, hãy để lại lời nhắn kèm số điện thoại. GEARVN sẽ liên hệ với bạn trong thời gian sớm nhất. Xin chân thành cảm ơn!.Hãy để lại lời nhắn kèm số điện thoại .Nhân viên sẽ liên hệ với bạn trong thời gian sớm nhất. Xin chân thành cảm ơn!";
            const chatLiError = createChatLi(errorMessage, "incoming");
            chatboxRef.current.appendChild(chatLiError);
            chatboxRef.current.scrollTo(0, chatboxRef.current.scrollHeight);
        }
        questionBoxRef.current.style.display = 'none';
    };

    useEffect(() => {
        const chatInputTextarea = chatInputRef.current;
        const questionBoxElement = questionBoxRef.current;
        appendMessageToChat("incoming", "Hi there! How can I help you today?");
        if (chatInputTextarea && questionBoxElement) {
            chatInputTextarea.addEventListener('click', function () {
                questionBoxElement.style.display = 'block';
            });
        }
    }, []);

    return (
        <div className={`Chatbox ${showChatbot ? 'show-chatbot' : ''}`}>
            <button className="chatbot-toggler" onClick={handleToggleChatbot}>
                <span className="material-icons"><MdMessage /></span>
                <span className="material-icons"><MdClose /></span>
            </button>
            <div className="chatbot">
                <header>
                    <h2>Chatbot</h2>
                    <span className="close-btn material-icons" onClick={handleToggleChatbot}><MdClose /></span>
                </header>
                <ul className="chatbox" ref={chatboxRef}>
                    {messageHistory.map((message, index) => (
                        <li key={index} className={`chat ${message.role}`}>
                            {message.role === 'incoming' && <span className="material-icons"><BiSolidUser /></span>}
                            <p>{message.content}</p>
                        </li>
                    ))}
                </ul>
                <div className="chat-input">
                    <textarea
                        placeholder="Enter a message..."
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        required
                        ref={chatInputRef}
                    />
                    <span id="send-btn" className="material-icons" onClick={handleSendClick}><BiSend /></span>
                </div>
                <div className="question-box" ref={questionBoxRef}>
                    <ul className="question-list">
                        <li className="question" onClick={() => handleQuestionClick("Mua hàng có được miễn phí vận chuyển không?")}>Mua hàng có được miễn phí vận chuyển không?</li>
                        <li className="question" onClick={() => handleQuestionClick("Có sản phẩm giảm giá trong tháng này không?")}>Có sản phẩm giảm giá trong tháng này không?</li>
                        <li className="question" onClick={() => handleQuestionClick("Sản phẩm này còn hàng không?")}>Sản phẩm này còn hàng không?</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;
