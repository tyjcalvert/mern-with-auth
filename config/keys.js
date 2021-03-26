const mongoURI = process.env.MONGODB_URI || "mongodb://localhost/waterchamps";

module.exports = {
  mongoURI: mongoURI,
  secretOrKey: "secret"
};
