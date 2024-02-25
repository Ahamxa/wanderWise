import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth';

export default function Dashboard() {
    const [auth, setAuth] = useAuth();
  return (
    <div>
       <Layout title={"dasboard "}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
    </div>
  )
}
