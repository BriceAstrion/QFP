
const Button = ({ children, onClick, bgColor, hoverColor, className }) => {
    const baseClasses = `${bgColor} text-white font-bold py-2 px-4 rounded transition-colors duration-300`;
    const hoverClasses = `hover:${hoverColor}`;

    return (
        <button onClick={onClick} className={`${baseClasses} ${hoverClasses} ${className}`}>
            {children}
        </button>
    );
}


export default Button;
