import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onPressSuggestion} = props
  const {suggestion} = suggestionDetails
  const onPressArrow = () => {
    onPressSuggestion(suggestion)
  }

  return (
    <li className="destination-item">
      <p className="name">{suggestion}</p>
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
          onClick={onPressArrow}
        />
      </button>
    </li>
  )
}

export default SuggestionItem
