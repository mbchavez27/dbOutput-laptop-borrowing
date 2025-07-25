import * as laptopsService from '../services/laptops.services.js'

export const getLaptops = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.pageSize) || 10

  try {
    const laptops = await laptopsService.getLaptops(page, pageSize)

    if (laptops.length === 0) {
      res.status(404).json({ message: 'No laptops found' })
    }

    return res
      .status(200)
      .json({ message: 'Fetched laptops', data: laptops, page, pageSize })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const getLaptopByID = async (req, res) => {
  const laptop_id = req.params.id
  try {
    const laptop = await laptopsService.getLaptopByID(laptop_id)

    if (!laptop) {
      return res.status(404).json({ mesage: 'No laptop found' })
    }

    return res.status(200).json({ message: 'Fetched laptop', data: laptop })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const getAvailableLaptops = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.pageSize) || 10
  try {
    const laptops = await laptopsService.getAvailableLaptops(page, pageSize)

    if (laptops.length == 0) {
      res.status(404).json({ message: 'No laptops found' })
    }

    return res
      .status(200)
      .json({ message: 'Fetched laptops', data: laptops, page, pageSize })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const getUsedLaptops = async (req, res) => {
  const page = parseInt(req.query.page) || 1
  const pageSize = parseInt(req.query.pageSize) || 10
  try {
    const laptops = await laptopsService.getUsedLaptops(page, pageSize)

    if (laptops.length == 0) {
      res.status(404).json({ message: 'No laptops found' })
    }

    return res
      .status(200)
      .json({ message: 'Fetched laptops', data: laptops, page, pageSize })
  } catch (error) {
    console.error('Error: ', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

export const addLaptops = async (req, res) => {
  const { product_name, product_os, battery_health } = req.body

  try {
    const newLaptop = await laptopsService.addLaptops(
      product_name,
      product_os,
      battery_health
    )

    res.status(201).json(newLaptop)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteLaptops = async (req, res) => {
  const { laptop_id } = req.body

  try {
    const success = await laptopsService.deleteLaptops(laptop_id)

    if (success) {
      res.status(200).json({ message: 'Laptop deleted successfully' })
    } else {
      res.status(404).json({ message: 'Laptop not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
