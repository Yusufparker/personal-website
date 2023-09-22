import { useState } from "react"
import { sendMsgToOpenAi } from "../utils/openai"

function ChatBot() {

    const [message, setMessage] = useState([
        {
            text:"Hello, this is a chatbox, I'm trying to use the OpenAI API, Any Question?",
            isBot:true
        },
    ])

    const [input, setInput]=useState('')
    
    const handleSendMsg =  async () =>{
        if(input!==''){
            const res = await sendMsgToOpenAi(input);
            setMessage((prevMessages) => [...prevMessages, 
                {
                    text:input,
                    isBot:false
                },
                {
                    text:res,
                    isBot:true
                }
            ]);
            setInput('')
        }
    }


    return (
        <>
            <div className="chatbot container position-relative">
                <div className="chatbox row">
                    <div className="col-12 pb-5 mb-5">

                        {
                            message.map((msg,i)=>(
                            <div className={`row d-flex mb-3 ${msg.isBot ? 'chat-bot' : 'chat-user'} `} key={i}>
                                <div className="col-md-9  p-3 rounded">
                                    {msg.text}
                                </div>
                            </div>

                            ))
                        }




                        
                    </div>
                </div>
                    <div className="input-group mb-3 input-question position-absolute">
                        <textarea className="form-control rounded" placeholder="your chat.." rows={2} value={input}  onChange={(e)=>setInput(e.target.value)}></textarea>
                        <button className="position-absolute btn-send" onClick={handleSendMsg}><i className="bi bi-send-fill"></i></button>
                    </div>

            </div>
        </>
    )
}

export default ChatBot
