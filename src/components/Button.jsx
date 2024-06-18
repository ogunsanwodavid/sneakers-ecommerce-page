function Button({ children, onClick }) {
  return (
    <button
      className={`w-full bg-orange p-3 text-black font-bold rounded-lg flex items-center justify-center md:hover:opacity-70`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
