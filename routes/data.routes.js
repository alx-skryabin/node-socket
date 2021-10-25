const {Router} = require('express')
const router = Router()

const LIST = {
  '98': 'Санкт-Петербург',
  '77': 'Москва',
  '23': 'Краснодарский край',
  '26': 'Ставропольский край',
  '13': 'Республика мордовия'
}
const DATA = {name: 'Alex', age: 26}

const error = e => {
  return {
    message: 'Error query',
    desc: e.message
  }
}

router.get('/get/:code', (req, res) => {
  try {
    const {code} = req.params

    if (!LIST[code]) {
      throw new Error(`Region not found: ${code}`)
    }

    res.status(201).json({message: 'Success query', data: LIST[code]})
  } catch (e) {
    res.status(500).json(error(e))
  }
})

router.post('/set', (req, res) => {
  try {
    if (!req.body.city) {
      return res.status(500).send('Not exist param: `city`')
    }

    res.status(200).json({
      message: 'Success query',
      data: {...DATA, ...req.body}
    })
  } catch (e) {
    res.status(500).json(error(e))
  }
})

module.exports = router
