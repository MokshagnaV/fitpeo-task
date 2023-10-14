function Card({ className, children }) {
  return (
    <div className={`bg-white shadow-lg p-6 rounded-xl ${className}`}>
      {children}
    </div>
  );
}

export default Card;
