import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Mock blog post - TODO: Replace with CMS data
  const post = {
    slug: params.slug,
    title: '5 Benefits of Strength Training You Should Know',
    content: `
      <p>Strength training is one of the most effective ways to improve your overall health and fitness. Whether you're looking to build muscle, lose weight, or simply feel stronger in your daily life, incorporating strength training into your routine can provide incredible benefits.</p>
      
      <h3>1. Builds Lean Muscle Mass</h3>
      <p>Regular strength training helps you develop lean muscle tissue, which not only improves your appearance but also boosts your metabolism. More muscle means your body burns more calories, even at rest.</p>
      
      <h3>2. Strengthens Bones and Joints</h3>
      <p>Weight-bearing exercises increase bone density and strengthen the connective tissues around your joints, reducing the risk of osteoporosis and injury as you age.</p>
      
      <h3>3. Improves Mental Health</h3>
      <p>Strength training releases endorphins, reduces anxiety and depression, and improves self-confidence. Many people find that regular lifting sessions become their favorite form of stress relief.</p>
      
      <h3>4. Enhances Athletic Performance</h3>
      <p>Whether you're a runner, cyclist, or weekend warrior, strength training improves power, speed, and endurance across all activities.</p>
      
      <h3>5. Supports Healthy Aging</h3>
      <p>Maintaining muscle mass and strength as you age is crucial for independence and quality of life. Strength training helps you stay active and mobile well into your golden years.</p>
      
      <h3>Getting Started</h3>
      <p>If you're new to strength training, start with bodyweight exercises and gradually progress to weighted movements. Consider working with a certified trainer to learn proper form and create a personalized program.</p>
      
      <p>Ready to experience these benefits for yourself? Join us at PowerFlow and let our expert trainers guide you on your strength training journey!</p>
    `,
    image: '/images/news/1.webp',
    category: 'Training Tips',
    date: 'Nov 1, 2025',
    author: 'Sarah Johnson',
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative text-light jarallax"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 0 80px',
        }}
      >
        <div className="de-gradient-edge-top"></div>
        <div className="de-gradient-edge-bottom"></div>
        <div className="sw-overlay op-9"></div>
        <div className="container relative z-2">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <span className="badge bg-color mb-3">{post.category}</span>
              <h1 className="fw-bold mb-3">{post.title}</h1>
              <div className="d-flex justify-content-center align-items-center gap-3 text-gray">
                <span><i className="icofont-user me-2"></i>{post.author}</span>
                <span>•</span>
                <span><i className="icofont-calendar me-2"></i>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="text-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Back to Blog */}
              <div className="mt-5 pt-4 border-top border-dark">
                <Link href="/blog" className="btn-main">
                  <span>← Back to Blog</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-color text-light pt-50 pb-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-9">
              <h3 className="mb-0 fs-32">Ready to start your fitness journey?</h3>
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
