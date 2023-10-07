const tasks = require("../Model/task.schema");



exports.postTask= async(req, res) => {

try {
    const taskData = new tasks({
        title:req.body.title,
        desc:req.body.desc,
        price:req.body.price,


    })
    await taskData.save()
    res.status(200).json(taskData);

} catch (error) {
    console.log(error); 
}
}

exports.getFunction = async(req, res) => {
   try {
    const taskData= await tasks.find()
    res.status(200).json(taskData);
   } catch (error) {
    console.log(error);
   }
}

exports.getSingleFunction = async(req, res) => {
    const {id} = req.params
    try {
        const taskData = await tasks.findById({_id:id})
        res.status(200).json(taskData)
    } catch (error) {
        console.log(error);
    }
}

exports.updateFunction  = async(req, res) => {
    const {id} = req.params
    // console.log(id);
    try {
        // const taskData = await tasks.findByIdAndUpdate({_id:id})
        // await taskData.save()
        const {title,desc,price} = req.body;
        const taskData = await tasks.findByIdAndUpdate(id, {title,desc,price} ,{new:true})
        await taskData.save()
        res.status(200).json(taskData)
    } catch (error) {
        console.log(error);
        
    }
}

exports.deleteFunction = async(req, res) =>{
    const {id} = req.params
    try {
        const taskData = await tasks.findByIdAndDelete(id)
        // await taskData.save()
        res.status(200).json(taskData)
        
    } catch (error) {
        console.log(error);
    }
}   
