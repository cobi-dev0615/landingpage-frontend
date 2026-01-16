import axios from 'axios'

// Use Vercel backend URL by default, or override with VITE_API_URL env variable
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://landingpage-service.vercel.app/api'

/**
 * Subscribe user email and trigger e-book delivery
 * @param {Object} data - User data containing name, email, phone and consent
 * @param {string} data.name - User's name or how they want to be called
 * @param {string} data.email - User's email address
 * @param {string} data.phone - User's WhatsApp/Phone number
 * @param {boolean} data.consent - User's consent to receive content
 * @returns {Promise} API response
 */
export const subscribeForEbook = async ({ name, email, phone, consent }) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/subscribe`, {
      name,
      email,
      phone,
      consent
    })
    return response.data
  } catch (error) {
    console.error('Error subscribing for ebook:', error)
    throw error
  }
}

/**
 * Submit a story/testimonial
 * @param {Object} storyData - Story submission data
 * @returns {Promise} API response
 */
export const submitStory = async (storyData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/stories`, storyData)
    return response.data
  } catch (error) {
    console.error('Error submitting story:', error)
    throw error
  }
}
