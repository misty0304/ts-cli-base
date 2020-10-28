const hostName = location.hostname
module.exports = {
  env: '本地环境',
  apiHost: 'http://' + hostName + ':8000'
}
