/* eslint-disable linebreak-style */
export default `<div class="container">
<div class="row"> 
    <div class="col-5">
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search Pokemon" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="search" id="search">Search</button>
        </form>
      </nav>              
     <div class="list-group overflow-auto" id="pokemon-list">

     </div>
     <div class="btn-group" role="group" aria-label="Basic example">
      <a href="#" class="btn btn-danger" id="previous">Previous Page</a>
      <a href="#" class="btn btn-danger" id="next">Next Page</a>
    </div>
     
    </div>

    <div class="col-7">
        <div class="card mb-3 hidden" style="max-width: 100%;" id="info-pokemon">
            <div class="row no-gutters">
              <div class="col-md-4" >
                <img class="card-img" alt="pokemon image" id="pokemon-image">
                <p>Stats:</p>
                <ul id="stats-List">

                </ul>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" id="pokemon-name">Card title</h5>
                  <p class="card-text" id="pokemon-weight"></p>
                  <p class="card-text" id="pokemon-height"></p>
                  <p>Types:</p>
                  <ul id="pokemon-type">
                    
                  </ul>
                  <p id="pokemon-skills">Skills:</p>
                   <ul id="skill-list">

                   </ul>
                </div>
              </div>
            </div>
          </div>
    </div>
</div>
</div>`;
