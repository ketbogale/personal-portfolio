const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="section-container">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Ketema Bogale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
