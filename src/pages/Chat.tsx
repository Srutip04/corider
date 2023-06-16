import React from 'react'
import Header from '../components/Header';
import Message from '../components/Message';
import SendMessage from '../components/SendMessage';
type Props = {}

const Chat: React.FC<{}> = (props: Props) => {
    return (
      <div className="w-full text-left font-Mulish h-[100vh] bg-[#FAF9F4] p-4 pt-4 flex flex-col justify-between">
        <Header />
        <Message />
        <SendMessage/>
      </div>
    );
};


export default Chat;