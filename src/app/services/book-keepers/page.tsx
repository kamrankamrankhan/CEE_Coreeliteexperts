import Layout from '@/components/layout/Layout'

export default function BookKeepersPage() {
  return (
    <Layout>
      <section className="section-padding bg-white dark:bg-[#242424]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-black dark:text-white">
              Book Keepers
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Professional bookkeeping services to keep your finances accurate, compliant, and ready for growth.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

