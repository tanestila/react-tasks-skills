export const Item = ({ complete, data }) => {
  return (
    <div className={data.isComplete ? "row complete" : "row"}>
      <div onClick={() => complete(data.id)}>{data.text}</div>
      <div className="icons">
        <div>X</div>
        <div>Edit</div>
      </div>
    </div>
  );
};
