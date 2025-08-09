import React from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom';
export default function HostVanDetails() {

    const [van, setVan] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const { id } = useParams();

    React.useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setVan(data.vans);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [id])
    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!van) {
        return <div>No van found</div>;
    }
    const { imageUrl, name, price, type } = van;
    const btnStyle = {
      backgroundColor: type === 'simple' ? '#E17654' 
      : type === 'luxury' ? '#161616'
      : type === 'rugged' ? '#115E59' : '#ccc', 
     
      color: "#fff",
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontWeight: 'bold',
    
    }
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  return (
    <div className='host-van-details'>
        <div className='host-van-details-container'>
            <img src={imageUrl} alt={`Photo of ${name}`} />
            <div className='host-van-details-info'>
                <button style={btnStyle}>{type}</button>
                <h2>{name}</h2>
                <p>${price}/day</p>
            </div>
        </div>
        <div className="host-van-details-navlink">
            <NavLink 
            to="."
            end
            style={({ isActive }) => isActive ? activeStyles : null}
            >Details</NavLink>
            <NavLink 
            to="pricing"
            style={({ isActive }) => isActive ? activeStyles : null}
            >Pricing</NavLink>
            <NavLink 
            to="photos"
            style={({ isActive }) => isActive ? activeStyles : null}
            >Photos</NavLink>
        </div>
        <Outlet context={van}/>
    </div>
  )
}
