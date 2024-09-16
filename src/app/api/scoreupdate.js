import Score from '../../models/Score'
import connectDB from '../../../middelwear/dbconnect';

const handler = async (req, res) => {
    if (req.method === 'POST') {

        let p = new Score({
          "Userid": req.body.id,
          "FriendName": req.body.name,
          "FriendScore": req.body.score
        })
        await p.save();
        res.status(200).json({ scoreadded : true , id : p._id })    
      }
      else {
      res.status(400).json({scoreadded : false, error : 'invalmethod' })
      }
    
}


export default connectDB(handler)