function Button({ children, onClick, style }) {
  return (
    <button
      className={`w-full bg-orange p-3 text-black font-bold rounded-lg flex items-center justify-center md:hover:opacity-70`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}

export default Button;
