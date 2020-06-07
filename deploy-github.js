const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/iravitejakumar/iravitejakumar.github.io.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)