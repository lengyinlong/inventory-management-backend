module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6467e9b6d1244f26a1c45ff3194626dd'),
  },
});
