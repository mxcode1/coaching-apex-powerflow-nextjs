'use client'

import { useState } from 'react'

interface JoinFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  gender: string
  birthDate: string
  plan: string
  message: string
  terms: boolean
}

export default function JoinForm() {
  const [formData, setFormData] = useState<JoinFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    birthDate: '',
    plan: '',
    message: '',
    terms: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [userName, setUserName] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (!formData.terms) {
      setStatus('error')
      setErrorMessage('You must agree to the Terms and Conditions')
      return
    }

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit registration')
      }

      setStatus('success')
      setUserName(`${formData.firstName} ${formData.lastName}`)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        birthDate: '',
        plan: '',
        message: '',
        terms: false,
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value
    const name = target.name

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  if (status === 'success') {
    return (
      <div id="success_message" className="bg-color mt-4 p-40 rounded-3 shadow-sm">
        <h4 className="mb-2">Registration Successful!</h4>
        <p className="mb-0">
          Thank you <strong>{userName}</strong> for joining our fitness community! Your
          registration has been received, our team will contact you soon to confirm your membership
          plan.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="position-relative z1000">
      <div className="row g-4 gy-2">
        {/* First Name */}
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            <h5>First Name</h5>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            required
            disabled={status === 'loading'}
          />
        </div>

        {/* Last Name */}
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            <h5>Last Name</h5>
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            required
            disabled={status === 'loading'}
          />
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            <h5>Email</h5>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            required
            disabled={status === 'loading'}
          />
        </div>

        {/* Phone */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            <h5>Phone</h5>
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
            required
            disabled={status === 'loading'}
          />
        </div>

        {/* Gender */}
        <div className="col-md-6">
          <label htmlFor="gender" className="form-label">
            <h5>Gender</h5>
          </label>
          <div className="relative">
            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-control"
              required
              disabled={status === 'loading'}
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down"></i>
          </div>
        </div>

        {/* Birth Date */}
        <div className="col-md-6">
          <label htmlFor="birthDate" className="form-label">
            <h5>Birth Date</h5>
          </label>
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="form-control"
            required
            disabled={status === 'loading'}
          />
        </div>

        {/* Plan */}
        <div className="col-md-12">
          <label htmlFor="plan" className="form-label">
            <h5>Select Plan</h5>
          </label>
          <div className="relative">
            <select
              name="plan"
              id="plan"
              value={formData.plan}
              onChange={handleChange}
              className="form-control"
              required
              disabled={status === 'loading'}
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="3 Months Plan $120/3 months">
                3 Months Plan $120 / 3 months
              </option>
              <option value="6 Months Plan $210/6 months">
                6 Months Plan $210 / 6 months
              </option>
              <option value="12 Months Plan $360/year">12 Months Plan $360 / year</option>
            </select>
            <i className="absolute top-0 end-0 id-color pt-3 pe-3 icofont-simple-down"></i>
          </div>
        </div>

        {/* Message */}
        <div className="col-md-12 mb-4">
          <label htmlFor="message" className="form-label">
            <h5>Have Any Message?</h5>
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder="Your Message"
            disabled={status === 'loading'}
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="col-md-12 mb-4">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="terms"
            id="terms"
            checked={formData.terms}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the <a href="#">Terms and Conditions</a>.
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div id="submit" className="mt-3">
        <button type="submit" className="btn-main" disabled={status === 'loading'}>
          {status === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="error mt-2 p-3 bg-danger text-white rounded">
          {errorMessage || 'Sorry, there was an error sending your form.'}
        </div>
      )}
    </form>
  )
}
