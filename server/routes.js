const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/:gifname', (req, res) => {
  const gifname = req.params.gifname
  request.get('https://api.giphy.com/v1/gifs/search' + '?q=' + gifname + '&api_key=NihSzDWuMozHJhaq01FDhNnDQMlN0mU5&limit=20')
    .then(response => {
      res.status(200).json(response.body)
    })
})

module.exports = router
