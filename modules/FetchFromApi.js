import Common from './Common.js';
import Data from './data.js';

class FetchFromApi {

  constructor() {
    this.listApiData();
    this.FetchApiElement = document.querySelector(".showMe");
  }

  async listApiData() {
    let ApiData = await Data.getApiData();
    const data = [ApiData];



    let show = document.querySelector(".info-here");
    let showEverything = document.querySelector('.card');
    this.FetchApiElement.addEventListener("click", () => {
      this.FetchApiElement.innerHTML = "Time:  "+ApiData.time;
      for (let x of Object.keys(ApiData.rates)) {
        let listElement = Common.toDom(`
      <div class="col-md-5 p-2 m-1">
      

      <div class="card-body">
    <h3 class="card-title">${x}</h3> 
    <p >Rate for USD: ${ApiData.rates[x].rate}</p>
    <p >Name: ${ApiData.rates[x].name}</p>
    
      <!--<p>Time: ${ApiData.time}</p>-->
    
      </div>
      </div>
    `);
        show.appendChild(listElement);
      }
    });
  }

}
export default FetchFromApi;