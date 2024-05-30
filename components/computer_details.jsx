const ComputerDetails = (computer) => {
  console.log("computer: ", computer);
  return (
    <div>
      <div className="p-2 border border-gray-600 rounded-md m-2">
        {computer.computer.name}
      </div>
    </div>
  );
};

export default ComputerDetails;
