import Layout from '@/components/layout/Layout'

export default function TestPage() {
  return (
    <Layout>
      <div className="container-custom py-20">
        <h1 className="text-4xl font-display font-bold text-secondary-900 dark:text-white mb-6">
          Test Page
        </h1>
        <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
          This is a simple test page to verify that the Header and Footer components are working correctly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
              Header Component
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300">
              The header should be visible at the top with navigation, theme toggle, and logo.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
              Footer Component
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300">
              The footer should be visible at the bottom with company information and links.
            </p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
              Theme System
            </h3>
            <p className="text-secondary-600 dark:text-secondary-300">
              Try toggling between light and dark themes using the theme button in the header.
            </p>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
          <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
            Current Status
          </h3>
          <ul className="space-y-2 text-primary-800 dark:text-primary-200">
            <li>✅ Header component loaded</li>
            <li>✅ Footer component loaded</li>
            <li>✅ Theme context working</li>
            <li>✅ Tailwind CSS styles applied</li>
            <li>✅ Responsive design functional</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
