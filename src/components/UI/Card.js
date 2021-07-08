const Card = (props) => {
  return (
    <div className=" mt-6 p-4 max-w-lg mx-auto bg-white rounded-xl shadow-md">
      {props.children}
    </div>
  );
};

export default Card;
