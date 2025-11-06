import { defineType } from 'sanity'

import homepage from './homepage'
import testimonial from './testimonial'
import service from './service'
import pricingPlan from './pricingPlan'
import contactInfo from './contactInfo'
import blogPost from './blogPost'
import schedule from './schedule'

export const schemaTypes = [
  homepage,
  testimonial,
  service,
  pricingPlan,
  contactInfo,
  blogPost,
  schedule,
]

export const schema = {
  types: schemaTypes,
}
