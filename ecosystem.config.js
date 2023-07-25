module.exports = {
  apps: [
    {
      name: "media-be",
      script: "./dist/bin/www.js",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "250M",
      out_file: "/dev/null",
      error_file: "/dev/null",
      env: {
        NODE_ENV: "production",
      },
      max_size: "3M",
      retain: "3",
      compress: true,
      dateFormat: "YYYY-MM-DD_HH-mm-ss",
      workerInterval: "30",
      rotateInterval: "0 0 * * *",
      rotateModule: true,
    },
  ],
};
