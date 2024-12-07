import { Movie } from "../models/movies.js"

export const getData = async (req, res) => {
  try {
    const movie = await Movie.find()
    res.send(movie)
  } catch (error) {
    console.error(error)
  }
}

export const getOneData = async (req, res) => {
  const {id} = req.params

  try {
    const movie = await Movie.findById(id)
    res.send(movie)
  } catch (error) {
    console.error(error)
  }
}

export const postData = async (req, res) => {
  try {
    const movie = new Movie(req.body)
    await movie.save()
    res.json(movie)
  } catch (error) {
    console.error(error)
  }
}

export const putData = async (req, res) => {
  const {id} = req.params

  try {
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true })
    res.json(movie)
  } catch (error) {
    console.error(error)
  }
}

export const deleteData = async (req, res) => {
  const {id} = req.params

  try {
    const movie = await Movie.findByIdAndDelete(id)
    res.json(movie)
  } catch (error) {
    console.error(error)
  }
}