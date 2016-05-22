const React = require('react')

const VideoDetail = (props) => {
  if (!props.video) {
    return <div>Loading...</div>
  }

  let video = props.video
  let videoID = video.id.videoId
  let url = `https://www.youtube.com/embed/${videoID}`

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed=responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

module.exports = VideoDetail
