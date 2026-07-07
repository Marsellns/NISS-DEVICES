module.exports = {
  apps: [
    {
      name: "niss-camera",
      script: "mqtt_server.py",
      cwd: __dirname,
      interpreter: "./venv/bin/python",
      restart_delay: 5000,
      max_restarts: 10,
      watch: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
    {
      name: "niss-tunnel",
      script: "cloudflared",
      interpreter: "none",
      args: "tunnel --url http://localhost:3000",
      restart_delay: 5000,
      max_restarts: 10,
      watch: false,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
    },
  ],
};
