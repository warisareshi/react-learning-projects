
const TodoInput = (
  {
    todo,
    addTodo,
    setTodo,
  }
) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(todo);
        }}
        className="flex flex-row
           items-center justify-center"
      >
        <input
          type="text"
          placeholder="Add a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className=" p-2 border-l-2 border-y-2 w-96 border-gray-300 rounded-md rounded-r-none"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 hover:bg-blue-700 text-white border-y-2 border-r-2 rounded-l-none rounded-md border-gray-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;