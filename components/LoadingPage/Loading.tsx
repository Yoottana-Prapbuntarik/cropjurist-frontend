import './styles.scss'
const Loading = () => {
  return (
    <div>
      <div className="container-loading">
        <div className="spinner-border-container">
          <div className="spinner-border spinner-grow-lg text-primary" style={{ width: '4rem', height: '4rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
