const totalest = document.getElementById("boxes");
const object = document.getElementById("tabularData");
const jumboResult = document.getElementById("status");
let key = 1;

const getData = async () => {
  fetch("https://api.covid19india.org/data.json")
    .then(res => res.json())
    .then(data => {
      totalest.innerHTML += `
                <div class="small">
                    <div class="title" style="font-size: 4vw;font-weight:800">
                        Stats
                    </div>
                    <div class="est" style="display: flex; flex-direction: column;">
                      <span><span style="font-weight:700;font-size:2.5vw;color: #337ab7">Confirmed</span>: ${data.statewise[0].confirmed}</span>
                      <span><span style="font-weight:700;font-size:2.5vw;color: #f0ad4e">Active</span>: ${data.statewise[0].active}</span>
                      <span><span style="font-weight:700;font-size:2.5vw;color: #5cb85c">Recovered</span>: ${data.statewise[0].recovered}</span>
                      <span><span style="font-weight:700;font-size:2.5vw;color: #d9534f">Deaths</span>: ${data.statewise[0].deaths}</span>
                    </div>
                </div>`;

      data.statewise.forEach(tableData => {
        if (tableData.state === "Total") {
          return;
        } else {
          object.innerHTML += `
                    <tr style="display:flex; flex-direction:column; margin-top:10px;">
                        <td class="tablecontent">${tableData.state}</td>
                        <div class="est" style="display: flex; flex-direction: row; justify-content:space-evenly; background-color:#202020; padding:10px;">
                            <span class="label label-primary ">${tableData.confirmed}</span>
                            <span class="label label-warning">${tableData.active}</span>
                            <span class="label label-success">${tableData.recovered}</span>
                            <span class="label label-danger">${tableData.deaths}</span>
                        </div>
                    </tr>`;
        }
      });
    });
};

getData().then(() => null);
