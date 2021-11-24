import React from 'react'

const Classesdisplay = (props) => {
   return (
      <section className="py-5 text-center container-fluid" style={ { backgroundColor: '#ced4da' } }>
         <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
               <h1 className="fw-dark">{ props.classTitle }</h1>
               <p className="lead text-dark">{ props.classDesc }</p>
               <p>
                  <a href="#" className="btn btn-primary my-2">Join Class</a>
               </p>
            </div>
         </div>
      </section>
   )
}

export default Classesdisplay
