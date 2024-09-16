import Score from '../../models/Score'
import connectDB from '../../middelwear/dbconnect';

const handler = async (req, res) => {
  if (req.method === 'POST') {

    let p = await Score.find({ "Userid" : req.body.id})
    res.status(200).json({response: true, score : p})
}
}


export default connectDB(handler)