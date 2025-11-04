import Link from 'next/link'

export default async function SchedulePage() {
  // Mock schedule data - TODO: Replace with CMS data
  const schedule = [
    { day: 'Monday', classes: [
      { time: '06:00 AM', name: 'Morning HIIT', instructor: 'Sarah Johnson', duration: '45 min' },
      { time: '09:00 AM', name: 'Yoga Flow', instructor: 'Mike Chen', duration: '60 min' },
      { time: '12:00 PM', name: 'Strength Training', instructor: 'David Martinez', duration: '60 min' },
      { time: '05:00 PM', name: 'Spin Class', instructor: 'Emily Davis', duration: '45 min' },
      { time: '07:00 PM', name: 'Boxing Fitness', instructor: 'James Wilson', duration: '60 min' },
    ]},
    { day: 'Tuesday', classes: [
      { time: '06:00 AM', name: 'Boot Camp', instructor: 'Sarah Johnson', duration: '60 min' },
      { time: '09:00 AM', name: 'Pilates', instructor: 'Lisa Anderson', duration: '45 min' },
      { time: '12:00 PM', name: 'CrossFit', instructor: 'David Martinez', duration: '60 min' },
      { time: '05:00 PM', name: 'Zumba', instructor: 'Maria Garcia', duration: '45 min' },
      { time: '07:00 PM', name: 'Strength & Conditioning', instructor: 'James Wilson', duration: '60 min' },
    ]},
    { day: 'Wednesday', classes: [
      { time: '06:00 AM', name: 'Morning HIIT', instructor: 'Sarah Johnson', duration: '45 min' },
      { time: '09:00 AM', name: 'Yoga Flow', instructor: 'Mike Chen', duration: '60 min' },
      { time: '12:00 PM', name: 'Functional Training', instructor: 'Emily Davis', duration: '45 min' },
      { time: '05:00 PM', name: 'Spin Class', instructor: 'Emily Davis', duration: '45 min' },
      { time: '07:00 PM', name: 'Boxing Fitness', instructor: 'James Wilson', duration: '60 min' },
    ]},
    { day: 'Thursday', classes: [
      { time: '06:00 AM', name: 'Boot Camp', instructor: 'Sarah Johnson', duration: '60 min' },
      { time: '09:00 AM', name: 'Pilates', instructor: 'Lisa Anderson', duration: '45 min' },
      { time: '12:00 PM', name: 'CrossFit', instructor: 'David Martinez', duration: '60 min' },
      { time: '05:00 PM', name: 'Zumba', instructor: 'Maria Garcia', duration: '45 min' },
      { time: '07:00 PM', name: 'Strength Training', instructor: 'David Martinez', duration: '60 min' },
    ]},
    { day: 'Friday', classes: [
      { time: '06:00 AM', name: 'Morning HIIT', instructor: 'Sarah Johnson', duration: '45 min' },
      { time: '09:00 AM', name: 'Yoga Flow', instructor: 'Mike Chen', duration: '60 min' },
      { time: '12:00 PM', name: 'Strength Training', instructor: 'David Martinez', duration: '60 min' },
      { time: '05:00 PM', name: 'Spin Class', instructor: 'Emily Davis', duration: '45 min' },
    ]},
    { day: 'Saturday', classes: [
      { time: '08:00 AM', name: 'Weekend Warrior HIIT', instructor: 'Sarah Johnson', duration: '60 min' },
      { time: '10:00 AM', name: 'Yoga & Meditation', instructor: 'Mike Chen', duration: '75 min' },
      { time: '12:00 PM', name: 'Open Gym', instructor: 'Staff Available', duration: '120 min' },
    ]},
    { day: 'Sunday', classes: [
      { time: '09:00 AM', name: 'Recovery Yoga', instructor: 'Mike Chen', duration: '60 min' },
      { time: '11:00 AM', name: 'Family Fitness', instructor: 'Maria Garcia', duration: '45 min' },
      { time: '02:00 PM', name: 'Open Gym', instructor: 'Staff Available', duration: '120 min' },
    ]},
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
          <h1 className="fw-bold mb-2">Class Schedule</h1>
          <p className="lead">Find your perfect workout time</p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="text-light">
        <div className="container">
          <div className="row g-4">
            {schedule.map((day, index) => (
              <div key={index} className="col-12">
                <div className="bg-dark-3 rounded-3 p-4">
                  <h3 className="mb-4 id-color">{day.day}</h3>
                  <div className="row g-3">
                    {day.classes.map((classItem, i) => (
                      <div key={i} className="col-md-6 col-lg-4">
                        <div className="bg-dark-2 rounded-1 p-3 h-100">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <span className="badge bg-color">{classItem.time}</span>
                            <span className="text-gray small">{classItem.duration}</span>
                          </div>
                          <h5 className="mb-1">{classItem.name}</h5>
                          <p className="text-gray mb-0 small">
                            <i className="icofont-user me-1"></i>
                            {classItem.instructor}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-dark-2 text-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-center p-3">
                <i className="icofont-clock-time fs-1 id-color mb-3"></i>
                <h5>Flexible Hours</h5>
                <p className="text-gray">Open 6 AM - 11 PM daily</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3">
                <i className="icofont-calendar fs-1 id-color mb-3"></i>
                <h5>Book Online</h5>
                <p className="text-gray">Reserve your spot in advance</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center p-3">
                <i className="icofont-users-alt-5 fs-1 id-color mb-3"></i>
                <h5>Small Classes</h5>
                <p className="text-gray">Maximum 15 people per class</p>
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
              <h3 className="mb-0 fs-32">Ready to join a class?</h3>
            </div>
            <div className="col-lg-3 text-lg-end">
              <Link className="btn-main fx-slide btn-line" href="/join">
                <span>Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
