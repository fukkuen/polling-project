const fs = require('fs');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json())

app.get('/api/polling-list', async (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    res.send(data)
  })
})

app.post('/api/submit-polling', (req, res) => {
  // fs.writeFile('./data.json', 'abc')
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err
    const id = req.body.id
    const answerIds = req.body.answerIds
    if (!id || !answerIds) return
    const list = [...JSON.parse(data)]
    const item = list.find(item => item.id === id)
    item.counts++
    answerIds.forEach(ans => {
      const _answer = item.answer.options.find(opt => opt.id === ans)
      _answer.counts++
    })
    fs.writeFile('data.json', JSON.stringify(list))
    res.send('done')
  })
})

app.listen(5000, () => console.log('Polling app listening on port 5000!'))
