import React from 'react'
import { Link } from 'react-router-dom'
export default function HostVans() {
  const [vans, setVans] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch('/api/host/vans')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setVans(data.vans)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  if (vans.length === 0) {
    return <div>No vans available</div>
  }
  const vanElements = vans.map(van => {
        const btnStyle = {
      backgroundColor: van.type === 'simple' ? '#E17654' 
      : van.type === 'luxury' ? '#161616'
      : van.type === 'rugged' ? '#115E59' : '#ccc', 
     
      color: "#fff",
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    
    }
    return (
      <Link key={van.id} to={van.id}>
      <div  className="host-van-card">
        <img src={van.imageUrl} alt={van.name} />
        <div className="host-van-info">
          <button style={btnStyle}>{van.type}</button>
          <h2>{van.name}</h2>
          <p>${van.price}/day</p>
        </div>
 
      </div>
      </Link>
    )
  })
  return (
    <div className="host-layout-vans">
        {vanElements}
    </div>
  )
}
