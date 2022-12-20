const getters = {
  currentPlayingFile: (state) => {
    return state.queue[state.queueIndex] || {
      hash: '',
      title: '',
      workTitle: '',
      mediaStreamUrl: '',
      mediaDownloadUrl: '',
      streamLowQualityUrl: '',
      samCoverUrl: '',
      thumbnailCoverUrl: '',
      mainCoverUrl: '',
    }
  },
}

export default getters
