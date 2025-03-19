import React from "react";

function Letstalk() {
  return (
    <section className="free">
      <div className="container">

        <div className="mission-title text-center">
          <h2>Let's Talk</h2>
        </div>

         <div className="d-flex justify-content-center">
         <div className="form-table">
          <div className="row">
            <div className="col-lg-6">
              <div className="inpt-grp">
                <input className="form-control" placeholder="First Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inpt-grp">
                <input className="form-control" placeholder="Second Name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inpt-grp">
                <input className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="inpt-grp">
                <input className="form-control" placeholder="Mobile Number" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="inpt-grp">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12">
                <div className="inpt-grp">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>
            </div>
            <div className="submit-btn  text-center">
                <button className="btn bg-light text-dark" >SUBMIT</button>
            </div>
          </div>
        </div>
         </div>
      </div>
    </section>
  );
}

export default Letstalk;
