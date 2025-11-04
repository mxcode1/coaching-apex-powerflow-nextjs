'use client'

import { useState } from 'react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="relative wow fadeInUp" data-wow-delay=".6s">
      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="field-set mb-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Name"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className="field-set mb-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Email"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className="field-set mb-3">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Phone"
                required
                disabled={status === 'loading'}
              />
            </div>

            <div className="field-set mb-3">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control h-100px"
                placeholder="Your Message"
                required
                disabled={status === 'loading'}
              />
            </div>
          </div>
        </div>

        <div id="submit">
          <button
            type="submit"
            className="btn-main w-100"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>

      {status === 'success' && (
        <div className="success mt-3 p-3 bg-success text-white rounded">
          Your message has been sent successfully. We'll get back to you soon!
        </div>
      )}

      {status === 'error' && (
        <div className="error mt-3 p-3 bg-danger text-white rounded">
          {errorMessage || 'Sorry, there was an error sending your form. Please try again.'}
        </div>
      )}
    </div>
  )
}
