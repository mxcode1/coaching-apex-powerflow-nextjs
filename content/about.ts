import { type About } from '../lib/content/types'

export const aboutData: About = {
  hero: {
    title: 'About PowerFlow',
    subtitle: 'Your Journey to Strength Starts Here',
    backgroundImage: '/images/background/6.webp',
  },
  story: {
    subtitle: 'About Us',
    title: 'We Help You Build a Stronger, Healthier, and Fitter You',
    description: `Founded with a passion for fitness and community, our gym combines state-of-the-art facilities, 
expert trainers, and personalized programs to help you reach your full potential. 
Whether you're a beginner or an athlete, our goal is to make every workout enjoyable, safe, and effective.`,
    benefits: [
      'Modern Equipment & Facilities',
      'Certified Personal Trainers',
      'Customized Fitness Programs',
      'Friendly & Supportive Community',
    ],
    images: ['/images/misc/s2.webp', '/images/misc/s3.webp'],
    stats: [
      { value: '25+', label: 'Certified Trainers' },
      { value: '2300+', label: 'Active Members' },
    ],
  },
  mission: {
    title: 'Our Mission & Vision',
    backgroundImage: '/images/background/6.webp',
    mission: {
      title: 'Our Mission',
      description: `To empower individuals to live healthier, stronger, and more confident lives through expert coaching, 
motivating environments, and a supportive fitness community that keeps every workout exciting and sustainable.`,
    },
    vision: {
      title: 'Our Vision',
      description: `To become a global fitness destination that inspires people to pursue strength, wellness, and balance in all aspects of life, 
both physically and mentally.`,
    },
  },
  values: [
    {
      icon: 'fa-heartbeat',
      title: 'Passion',
      description: 'We live and breathe fitness, every rep, every session, every success.',
    },
    {
      icon: 'fa-users',
      title: 'Community',
      description: 'Together we grow stronger, motivation thrives when shared.',
    },
    {
      icon: 'fa-dumbbell',
      title: 'Discipline',
      description: 'Consistency is key, we push our members to stay committed.',
    },
    {
      icon: 'fa-star',
      title: 'Excellence',
      description: 'We strive for the highest quality in training, service, and results.',
    },
  ],
  cta: {
    title: 'Ready to take the first step towards your fitness goals?',
    buttonText: 'Join Now',
    buttonLink: '/join',
  },
}
