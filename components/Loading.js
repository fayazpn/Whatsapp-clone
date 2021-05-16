import { Circle } from 'better-react-spinkit'

function Loading() {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div>
        <Circle color='#3CBC38' size={60} />
      </div>
    </center>
  )
}

export default Loading
