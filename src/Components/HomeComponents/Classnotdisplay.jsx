import React from 'react'
import { Link } from 'react-router-dom'

const Classnotdisplay = () => {
   return (
      <section className="py-5 text-center container-fluid" style={ { backgroundColor: '#ced4da' } }>
         <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
               <h1 className="fw-light">No Upcoming Classes</h1>
               <p className="lead text-muted">You don't Have any upcoming classes. Please schedule some now</p>
               <p>
                  <Link to="/classes" className="btn btn-primary my-2">Schedule Classes</Link>
               </p>
            </div>
         </div>
      </section>
   )
}

export default Classnotdisplay
