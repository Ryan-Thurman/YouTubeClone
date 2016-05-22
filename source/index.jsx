const _ = require('lodash')
const React = require('react')
const ReactDOM = require('react-dom')
const YouTubeApiKey = 'AIzaSyBxB61CBdtGd6-fG3bgZQbS2A6mvbAAvCI'
const YTsearch = require('youtube-api-search')
const SearchBar = require('./components/SearchBar')
const VideoList = require('./components/VideoList')
const VideoDetail = require('./components/VideoDetail')

const App = React.createClass({
  getInitialState() {
    this.videoSearch('recent')
    return {videos: [], selectedVideo: null}
  },
  videoSearch(term) {
    YTsearch({
      key: YouTubeApiKey,
      term: term
    }, (data) => {
      this.setState({videos: data, selectedVideo: data[0]})
    })
  },
  render() {
    const delaySearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={delaySearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={(selectedVideo) => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    )
  }
})

ReactDOM.render(
  <App/>, document.getElementById('app'))
