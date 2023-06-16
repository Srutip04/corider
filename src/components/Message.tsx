import React, { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
type Props = {}

interface Chat {
  id: string;
  message: string;
  sender: {
    image: string;
    is_kyc_verified: boolean;
    self: boolean;
    user_id: string;
  };
  time: string;
}

interface ChatData {
  chats: Chat[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
}

const Message = (props: Props) => {
   const [chats, setChats] = useState<Chat[]>([]);
   const { userId } = useParams<{ userId: string }>();
    useEffect(() => {
      fetchChatData();
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let fetchChat = () => {
      fetch("https://qa.corider.in/assignment/chat?page=0")
        .then((response) => response.json())
        .then((data: Chat) => {
          updateTime(data.time);
        })
        .catch((error) => {
          console.error("Error fetching chat data:", error);
        });
    };
    const updateTime = (time: string) => {
      const timeElement = document.getElementById("time");
      if (timeElement) {
        timeElement.textContent = time;
      }
    };

    let fetchChatData = () => {
      fetch("https://qa.corider.in/assignment/chat?page=0")
        .then((response) => response.json())
        .then((data: ChatData) => {
          setChats(data.chats);
        })
        .catch((error) => {
          console.error("Error fetching chat data:", error);
        });
    };

    const filteredChats = userId
      ? chats.filter((chat) => chat.sender.user_id === userId)
      : chats;
  return (
    <div className="h-full relative z-0">
      <div className="bottom-0 absolute h-[100%] overflow-scroll scrollbar-none w-full">
        <div className="w-full"></div>
        <div>
          {filteredChats.map((chat) => (
            <div>
              <div className="w-full flex items-center justify-center gap-2 mt-3">
                <div className="w-full flex flex-grow h-[1px] bg-[#B7B7B7]"></div>
                <p
                  id="time"
                  className="text-[14px] text-[#B7B7B7] text-center w-[500px]"
                >
                  {chat.time}
                </p>
                <div className="w-full h-[1px] bg-[#B7B7B7]"></div>
              </div>
              <div className="flex items-start mt-3" key={chat.id}>
                <img
                  src={chat.sender.image}
                  className=" mr-2 w-6 rounded-full"
                  alt=""
                />
                <p className="bg-white rounded-lg text-[#606060] rounded-tl-none shadow-md p-2 text-[14px] mr-16">
                  {chat.message}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute right-2">
          <div className="flex items-start mt-8">
            <p className="bg-[#1C63D5] text-white rounded-lg rounded-tr-none shadow-md p-2 text-[14px] ml-16">
              Connect with fellow travelers, share the ride and save money
              Connect with fellow travelers, share the ride and save money
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message