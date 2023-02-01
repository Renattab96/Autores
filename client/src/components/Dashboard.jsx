import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard=()=>{
    return(
        <div style={{'background':'red'}} >
            <h2>Componente Dashboard</h2>
            
            <Link to={'detalle'}>detalle</Link>
            <br />
            <Link to={'/masdetalle'}>Mas Detalles</Link>
            <Outlet />
        </div>
    )
}

export default Dashboard;