// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {tabDetails, updateState, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = tabDetails

  const onClickUpdate = () => {
    updateState(id)
  }

  const ActiveClassName = isActive ? 'activated_thumbnail_btn' : 'thumbnail_btn'

  return (
    <>
      <li className="Thumbnail_container">
        <button className="button" type="button" onClick={onClickUpdate}>
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={ActiveClassName}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
