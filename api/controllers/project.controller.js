const mongoose = require("mongoose");
const Project = require("../db/models/Project");

module.exports = (connectDB) => {
  var gfs;
  connectDB.once("open", () => {
    gfs = new mongoose.mongo.GridFSBucket(connectDB.db, {
      bucketName: "uploads",
    });
    console.log("GFS Connected");
  });
  return {
    async getAllProjects(req, res) {
      try {
        const projects = await Project.find();
        if (projects) res.send(projects);
      } catch (err) {
        res.status(500).send(err);
      }
    },
  };
};
