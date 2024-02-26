import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useAuth } from '../../context/auth';
import GetItineraryForm from '../../components/user/GetItineraryForm';

export default function Dashboard() {
    const [auth, setAuth] = useAuth();
  return (
    <div>
      <Layout title={"dashboard-user"}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
      <GetItineraryForm/>
    </Layout>
    </div>
  )
}
