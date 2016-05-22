const React = require('react')
const VideoListItem = require('./VideoListItem')

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoSelect={props.onVideoSelect} 
        />
    )
  })
  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  )
}

module.exports = VideoList
