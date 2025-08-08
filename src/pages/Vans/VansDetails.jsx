import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function VansDetails() {
    const { id } = useParams()
    const [vans, setVans] = React.useState(null)
     
    React.useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(response => response.json())
            .then(data => setVans(data.vans))
            .catch(error => console.error('Error fetching van details:', error))
    }, [id])
    if (!vans) {
        return <h2>Loading...</h2>
    }
   
    const vansDetailsbtnStyle = {
            backgroundColor: vans.type === 'simple' ? '#E17654'
                : vans.type === 'luxury' ? '#161616'
                    : vans.type === 'rugged' ? '#115E59' : '#ccc',
            color: "#fff",
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
        }

    return (
        <>
            <Link to="/vans" className="back-button">&larr; <span>Back to all vans</span></Link>
            <div className="van-detail-card">
                <img src={vans.imageUrl} alt={`photo of ${vans.name}`} />
                <button style={vansDetailsbtnStyle}>{vans.type}</button>
                <h2>{vans.name}</h2>
                <p><strong>${vans.price}</strong>/day</p>
                <p>{vans.description}</p>
                <button className="primary-button">Rent this van</button>
            </div>
        </>
        )
}
