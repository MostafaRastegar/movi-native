const envConfig = (MY_ENVIRONMENT) => {
  if (MY_ENVIRONMENT === "production") {
    return {
      /* your production config */
      HOSTURL: "https://data-imdb1.p.rapidapi.com/",
    };
  }
  return {
    HOSTURL: "https://data-imdb1.p.rapidapi.com/",
  };
};

module.exports = () => ({
  name: "test",
  displayName: "test",
  expo: {
    name: "test",
    slug: "test",
    version: "1.0.0",
    assetBundlePatterns: ["**/*"],
    extra: envConfig(process.env.BUILD_ENV),
  },
});
