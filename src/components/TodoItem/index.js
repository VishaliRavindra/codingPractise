import './index.css'

const TodoItem = props => {
  const {todoDetails, onDeleteList} = props
  const {title, id} = todoDetails

  const onClickDelete = () => {
    onDeleteList(id)
  }

  return (
    <div className="todo-item">
      <li className="item-title">
        <p>{title}</p>
      </li>
      <button className="button" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
