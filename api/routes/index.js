const projectController = require("../controllers").project;

module.exports = (app) => {
  app.get("/health", (req, res) => {
    res.status(200).send({ message: "API is working!" });
  });
  app.get("/", projectController.getAllProjects);
};
