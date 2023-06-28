export const GifItem = ({id,title, url}) => {
  return (
    <div className="card">
        <img src={ url } alt= { title } />
        <br />
        <p>{ title }</p>
    </div>
  )
}
