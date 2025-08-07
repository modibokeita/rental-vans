import React from 'react'

export default function Vans() {
  const [vans, setVans] = React.useState([])

  React.useEffect(() => {
    fetch('/api/vans')
      .then(response => response.json())
      .then(data => setVans(data.vans))
      .catch(error => console.error('Error fetching vans:', error))
  }, [])
  const vanElements = vans.map(van => {
    if (!van) return null 
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
      <div key={van.id} className="van-card">
        <img src={van.imageUrl} alt={`photo of ${van.name}`} />
        <h2>{van.name}</h2>
        <p><strong>${van.price}</strong>/day</p>
        <button style={btnStyle}>{van.type}</button>
      </div>
    )
  })
  return (
    <div>
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  )
}
