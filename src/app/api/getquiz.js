import Quizdata from '../../models/Quiz'
import connectDB from '../../middelwear/dbconnect';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let Quizs = await Quizdata.find({ "Catagrey": req.body.catagrey })
    res.status(200).json({allQuiz: Quizs})
}
}


export default connectDB(handler)