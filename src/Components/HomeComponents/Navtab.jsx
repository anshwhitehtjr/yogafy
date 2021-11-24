import React, { useState } from 'react'

const Navtab = () => {
   const [state, setState] = useState('active')

   const toggleBools = () => {
      setState('')
   }

   return (
      <>
         <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
               <button className="nav-link active" id="completedassignments-tab" data-bs-toggle="tab" data-bs-target="#completedassignments" type="button" role="tab" aria-controls="completedassignments" aria-selected="true">Completed Assignments</button>
            </li>
            <li className="nav-item" role="presentation">
               <button className="nav-link" id="incompleteassignments-tab" data-bs-toggle="tab" data-bs-target="#incompleteassignments" type="button" role="tab" aria-controls="incompleteassignments" aria-selected="false">Incompleted Assignments</button>
            </li>
         </ul>
         <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="completedassignments" role="tabpanel" aria-labelledby="completedassignments-tab">
               <div className="card-group">
                  <button className="btn btn-outline-primary">{ '<-' }</button>
                  <div className="card">
                     <img src="https://dummyimage.com/50x50/000/fff" className="card-img-top" alt="https://dummyimage.com/50x50/000/fff" style={ { height: "15rem" } } />
                     <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-primary">Complete Assignment Now</button>
                     </div>
                     <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div>
                  <div className="card">
                     <img src="https://dummyimage.com/50x50/000/fff" className="card-img-top" alt="https://dummyimage.com/50x50/000/fff" style={ { height: "15rem" } } />
                     <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-primary">Complete Assignment Now</button>
                     </div>
                     <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div>
                  <div className="card">
                     <img src="https://dummyimage.com/50x50/000/fff" className="card-img-top" alt="https://dummyimage.com/50x50/000/fff" style={ { height: "15rem" } } />
                     <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-primary">Complete Assignment Now</button>
                     </div>
                     <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div>
                  <button className="btn btn-outline-primary">{ '->' }</button>
               </div>
            </div>
            <div className="tab-pane fade" id="incompleteassignments" role="tabpanel" aria-labelledby="incompleteassignments-tab">
               <div className="card-group">
                  <button className="btn btn-outline-primary">{ '<-' }</button>
                  <div className="card">
                     <img src="https://dummyimage.com/50x50/000/fff" className="card-img-top" alt="https://dummyimage.com/50x50/000/fff" style={ { height: "15rem" } } />
                     <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-primary">Complete Assignment Now</button>
                     </div>
                     <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div>
                  <div className="card">
                     <img src="https://dummyimage.com/50x50/000/fff" className="card-img-top" alt="https://dummyimage.com/50x50/000/fff" style={ { height: "15rem" } } />
                     <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-primary">Complete Assignment Now</button>
                     </div>
                     <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div>
                  <div className="card">
                     <img src="https://dummyimage.com/50x50/000/fff" className="card-img-top" alt="https://dummyimage.com/50x50/000/fff" style={ { height: "15rem" } } />
                     <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <button className="btn btn-outline-primary">Complete Assignment Now</button>
                     </div>
                     <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div>
                  <button className="btn btn-outline-primary">{ '->' }</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Navtab
