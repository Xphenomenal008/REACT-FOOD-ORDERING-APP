const Card = (props) => {
  return (
    <div className="bg-red-950  shadow-md hover:shadow-2xl transition-all duration-300 rounded-lg p-6 mx-auto w-full sm:w-[90%] border border-gray-200 hover:border-blue-400">
      {props.children}
    </div>
  );
};

export default Card;
