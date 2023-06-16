import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Home: React.FC<{}> = (props: Props) => {
  const navigate = useNavigate();
  const [chats, setChats] = useState<Chat[]>([]);
  const [userIds, setUserIds] = useState<string[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = () => {
    fetch("https://qa.corider.in/assignment/chat?page=0")
      .then((response) => response.json())
      .then((data: ChatData) => {
        const uniqueUserIds = Array.from(
          new Set(data.chats.map((chat) => chat.sender.user_id))
        );
        setUserIds(uniqueUserIds);
        setChats(data.chats);
      })
      .catch((error) => {
        console.error("Error fetching chat data:", error);
      });
  };

  const handleUserSelection = (userId: string) => {
    navigate(`/chat/${userId}`);
  };

  const getChatByUserId = (userId: string) => {
    return chats.find((chat) => chat.sender.user_id === userId);
  };

  //sorting based on the comparison between the corresponding chats
  const sortedUserIds = userIds.sort((idA, idB) => {
    const chatA = getChatByUserId(idA);
    const chatB = getChatByUserId(idB);

    if (chatA && chatB) {
      return chatA.sender.user_id.localeCompare(chatB.sender.user_id);
    } else if (chatA) {
      return -1;
    } else if (chatB) {
      return 1;
    }

    return 0;
  });
  return (
    <div className="w-full text-left font-Mulish h-[100vh] bg-[#FAF9F4] p-4 pt-4 flex flex-col justify-between scrollbar-none">
      <div className="scrollbar-none">
        <h1 className="text-2xl font-extrabold">Messages</h1>
        <div className="flex flex-col overflow-scroll scrollbar-none justify-center ">
          {sortedUserIds.map((userId) => {
            const chat = getChatByUserId(userId);
            if (!chat) return null;
            return (
              <div
                key={userId}
                className="bg-white text-black p-4 rounded-xl shadow-md  items-center w-auto gap-2 m-2 flex cursor-pointer"
                onClick={() => handleUserSelection(userId)}
              >
                <img
                  src={chat.sender.image}
                  alt="User"
                  className="w-16 h-16 rounded-full"
                />
                <p className="hover:underline font-medium text-xs">
                  {chat.sender.user_id}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;