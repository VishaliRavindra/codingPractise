import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
  state = {todoDetailsList: initialTodosList}

  onDeleteList = id => {
    const {todoDetailsList} = this.state
    const filterTodoData = todoDetailsList.filter(
      eachTodo => eachTodo.id !== id,
    )
    this.setState({todoDetailsList: filterTodoData})
  }

  render() {
    const {todoDetailsList} = this.state

    return (
      <div className="simple-container">
        <div className="simple-container-card">
          <h1 className="title">Simple Todos</h1>
          <ul className="list-container">
            {todoDetailsList.map(eachlist => (
              <TodoItem
                onDeleteList={this.onDeleteList}
                todoDetails={eachlist}
                key={eachlist.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
