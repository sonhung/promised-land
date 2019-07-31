import { useState } from 'react'

import Layout from '../components/layout'
import Category from '../components/shared/category'

const Index = () => {
  const [showLogin, setShowLogin] = useState(false)

  const login = () => {
    setShowLogin(true)
  }

  return (
    <Layout >
      <Category />
    </Layout >
  )
}


export default Index