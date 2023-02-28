export const ListTodosComponent = () => {
  const currentDate = new Date();
  const todos = [{
    id: 1,
    description: 'Java',
    done: false.toString(),
    targetDate: new Date(currentDate.getDate() + 30).toISOString().substring(0, 10)
  }, {
    id: 2,
    description: 'Docker',
    done: false.toString(),
    targetDate: new Date(currentDate.getDate() + 30).toISOString().substring(0, 10)
  }, {
    id: 3,
    description: 'Kubernetes',
    done: false.toString(),
    targetDate: new Date(currentDate.getDate() + 30).toISOString().substring(0, 10)
  }]
  return (
    <div className="container">
      <h1>Todos</h1>
      <table className='table'>
        <thead>
        <tr>
          <td>Id</td>
          <td>Description</td>
          <td>IsDone?</td>
          <td>TargetDate</td>
        </tr>
        </thead>
        <tbody>
        {todos.map(todos => (<tr key={todos.id}>
          <td>{todos.id}</td>
          <td>{todos.description}</td>
          <td>{todos.done}</td>
          <td>{todos.targetDate}</td>
        </tr>))}
        </tbody>
      </table>
    </div>)
}