import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ParallaxWrapper from "./ParallaxWrapper";
import Button from "./Button";

const ScrollLogo = ({ logo, rotateStart, rotateEnd, headText, list }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <div onClick={togglePopup} className="cursor-pointer">
          <ParallaxWrapper rotateStart={rotateStart} rotateEnd={rotateEnd}>
            <img src={logo} alt="Logo" className="w-16 h-16" />
          </ParallaxWrapper>
        </div>
        {isOpen && (
          <div className="absolute bg-white bg-opacity-10 p-3 rounded-lg shadow-md bottom-16 right-0 text-black">
            <p className="text-xl font-bold mb-3">{headText}</p>
            <ul className="list-disc pl-5">
              {list.map((list, index) => (
                <li key={index}>
                  <Button
                    onClick={() => navigate(list.path)}
                    className="text-lg focus:outline-none"
                  >
                    {list.label}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollLogo;