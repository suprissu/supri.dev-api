module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f14d5ba7071bdb304a8ea558341d0d6a'),
  },
});
