const {Router} = require('express')
const router = Router()

router.get('/get/:code', async (req, res) => {
  try {
    const list = {
      '77': 'Москва',
      '98': 'Санкт-Петербург',
      '26': 'Ставропольский край',
    }
    const data = list[req.params.code]

    res.status(201).json({message: 'Success query!', data})
  } catch (e) {
    res.status(500).json({message: 'Error query!'})
  }
})

router.post('/set', async (req, res) => {
  try {
    // todo Не могу получить данные запроса
    console.log('body:', req.body)
    const data = {name: 'Alex', age: 26}

    res.status(200).json({message: 'Success query!', data: {...data, ...req.body}})
  } catch (e) {
    res.status(500).json({message: 'Error query!!'})
  }
})

module.exports = router
