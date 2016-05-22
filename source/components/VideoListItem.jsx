const React = require('react')

const VideoListItem = (props) => {
  let video = props.video
  let videoSelect = props.onVideoSelect
  return (
    <li onClick={() => videoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='mediaLeft'>
          <img className='media-object' src={video.snippet.thumbnails.default.url}/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

module.exports = VideoListItem
