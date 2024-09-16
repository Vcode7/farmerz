import Friend from '../../models/Friends'
import connectDB from '../../middelwear/dbconnect';

const handler = async (req, res) => {
  
  if (req.method === 'POST') {

      let p = new Friend({
        "UserName": req.body.name,
        "Answer": req.body.answer
      })
      await p.save();
      res.status(200).json({ qusetionadded : true , id : p._id })    
    }
    else {
    res.status(400).json({qusetionadded : false, error : 'invalmethod' })
    }
  }
  
  
export default connectDB(handler)