const JobModel = require('../models/JobModel')

module.exports.getJob = async (req, res) => {
    const jobs = await JobModel.find()
    res.send(jobs)
}

module.exports.saveJob = async (req, res) => {
   const { position, location, minSalary, maxSalary, experience } = req.body

   JobModel
     .create({ position, location, minSalary, maxSalary, experience})
     .then((data) => {
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
     })
     .catch((err)=> console.log(err))
}

module.exports.updateJob = async (req, res) => {
    const {_id, text} = req.body
    JobModel
     .findByIdAndUpdate(_id, {text})
     .then(()=> res.send("Updated Successfully..."))
     .catch((err)=> console.log(err))
}

module.exports.deleteJob = async (req, res) => {
    const {_id, text} = req.body
    JobModel
     .findByIdAndDelete(_id)
     .then(()=> res.send("Deleted Successfully..."))
     .catch((err)=> console.log(err))
}