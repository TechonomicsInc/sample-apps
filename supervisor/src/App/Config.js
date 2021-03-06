let config;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  config = {
    app_client_id: '66dcaec190a03f9b8f0af165ba23f93d',
    api_url: "https://accounts.livechatinc.com/",
    server_url: 'https://us-central1-livechat-experiments.cloudfunctions.net/restApi',
  }
} else {
  // production code
  config = {
    app_client_id: '66dcaec190a03f9b8f0af165ba23f93d',
    api_url: "https://accounts.livechatinc.com/",
    server_url: 'https://us-central1-livechat-experiments.cloudfunctions.net/restApi',
  }
}

export default config;
