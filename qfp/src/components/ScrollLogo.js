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
              {/* Responsive logo size */}
              <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" />
            </ParallaxWrapper>
          </div>
          {isOpen && (
              <div className="absolute bg-white bg-opacity-90 p-4 rounded-lg shadow-lg bottom-16 right-0 text-black w-48 md:w-60">
                <p className="text-xl font-bold mb-2 text-center">{headText}</p>
                <ul className="list-disc pl-5 space-y-1">
                  {list.map((item, index) => (
                      <li key={index}>
                        <Button
                            onClick={() => navigate(item.path)}
                            className="text-lg focus:outline-none hover:underline"
                        >
                          {item.label}
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