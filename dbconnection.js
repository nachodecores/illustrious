const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://oco:12101988@cluster0.cofy8gr.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database - Illustrious -");
});
