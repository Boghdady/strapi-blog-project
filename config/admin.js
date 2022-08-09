module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '091b584da35ad65f5a3a6a97631e1d7c'),
  },
});
