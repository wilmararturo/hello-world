module.exports = {
  apps : [
    {
      name: 'hello-world',
      script: './server.js',
      exec_mode: 'cluster',
      instances: 3,
      watch: true,
      increment_var: 'PORT',
      env: {
        PORT: 3001,
        NODE_ENV: 'development'
      },
    }
  ]
};
