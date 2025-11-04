import Link from 'next/link'

export default async function BlogPage() {
  // Mock blog posts - TODO: Replace with CMS data
  const posts = [
    {
      slug: '5-benefits-of-strength-training',
      title: '5 Benefits of Strength Training You Should Know',
      excerpt: 'Discover how strength training can transform your body and mind beyond just building muscle.',
      image: '/images/news/1.webp',
      category: 'Training Tips',
      date: 'Nov 1, 2025',
      author: 'Sarah Johnson',
    },
    {
      slug: 'nutrition-guide-for-beginners',
      title: 'Complete Nutrition Guide for Fitness Beginners',
      excerpt: 'Learn the basics of proper nutrition to fuel your workouts and achieve your fitness goals faster.',
      image: '/images/news/2.webp',
      category: 'Nutrition',
      date: 'Oct 28, 2025',
      author: 'Mike Chen',
    },
    {
      slug: 'hiit-vs-steady-state-cardio',
      title: 'HIIT vs Steady-State Cardio: Which is Better?',
      excerpt: 'Compare the benefits of high-intensity interval training versus traditional cardio workouts.',
      image: '/images/news/3.webp',
      category: 'Cardio',
      date: 'Oct 25, 2025',
      author: 'David Martinez',
    },
    {
      slug: 'recovery-tips-for-athletes',
      title: 'Essential Recovery Tips Every Athlete Needs',
      excerpt: 'Maximize your gains and prevent injuries with these proven recovery strategies.',
      image: '/images/news/4.webp',
      category: 'Recovery',
      date: 'Oct 22, 2025',
      author: 'Emily Davis',
    },
    {
      slug: 'building-workout-routine',
      title: 'How to Build Your Perfect Workout Routine',
      excerpt: 'Step-by-step guide to creating a personalized workout plan that fits your goals and lifestyle.',
      image: '/images/news/5.webp',
      category: 'Training Tips',
      date: 'Oct 19, 2025',
      author: 'James Wilson',
    },
    {
      slug: 'yoga-for-flexibility',
      title: "Yoga for Flexibility: A Beginner's Journey",
      excerpt: 'Start your yoga practice with these simple poses designed to improve flexibility and reduce stress.',
      image: '/images/news/6.webp',
      category: 'Yoga',
      date: 'Oct 16, 2025',
      author: 'Lisa Anderson',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-light jarallax"
        style={{
          backgroundImage: 'url(/images/background/6.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 0 80px',
        }}
      >
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <div className="sw-overlay op-8"></div>
        <div className="container relative z-2 text-center">
          <h1 className="fw-bold mb-2">Fitness Blog</h1>
          <p className="lead">Tips, guides, and inspiration for your fitness journey</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="text-light">
        <div className="container">
          <div className="row g-4">
            {posts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="relative overflow-hidden rounded-1 hover bg-dark-3 h-100">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      className="w-100 hover-scale-1-1"
                      alt={post.title}
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-color">{post.category}</span>
                        <span className="text-gray small">{post.date}</span>
                      </div>
                      <h4 className="mb-2">{post.title}</h4>
                      <p className="text-gray mb-3">{post.excerpt}</p>
                      <div className="d-flex align-items-center">
                        <i className="icofont-user me-2 id-color"></i>
                        <span className="text-gray small">{post.author}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-color text-light pt-50 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Ready to put these tips into action?</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <Link className="btn-main fx-slide btn-line" href="/join">
                <span>Join Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
