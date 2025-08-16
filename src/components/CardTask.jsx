export function CardTask({ title, date, complete, id, onComplete, onDelete }) {
  const _id = id;
  const completeTask = () => {
    onComplete(_id);
  };
  const deleteTask = () => {
    onDelete(_id);
  };

  return (
    <>
      <div
        className={
          (complete === 0 ? "task-no-complete" : "task-complete") + " task"
        }
      >
        <span>
          {date} - {title}
        </span>
        <div>
          {complete === 0 ? (
            <input
              type="button"
              className="btn-complete-task"
              onClick={completeTask}
              value={"✔"}
            />
          ) : (
            <></>
          )}
          <input
            type="button"
            className="btn-delete-task"
            onClick={deleteTask}
            value={"X"}
          />
        </div>
      </div>
    </>
  );
}
