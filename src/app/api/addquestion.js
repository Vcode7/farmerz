import Quizdata from '../../models/Quiz'
import connectDB from '../../middelwear/dbconnect';


const handler = async (req, res) => {
  if (req.method === 'POST') {
    let q = new Quizdata({
      Catagrey: req.body.catagrey,
      Question: req.body.question,
      Options: [
        {
          op: req.body.options[0].op,
          correct: req.body.options[0].correct
        },
        {
          op: req.body.options[1].op,
          correct: req.body.options[1].correct
        },
        {
          op: req.body.options[2].op,
          correct: req.body.options[2].correct
        },
        {
          op: req.body.options[3].op,
          correct: req.body.options[3].correct
        }
      ],
    })
    await q.save();
    res.status(200).json({ qusetionadded: true, data: q })
  }
  else {
    res.status(400).json({ error: 'invalid method' })
  }
}


export default connectDB(handler)