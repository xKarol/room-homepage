module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'de222db672fb44378bc9e926a1df10cb'),
  },
});
