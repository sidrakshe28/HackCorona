const object = document.getElementById("tabularData");

const getData = async () => {
  fetch("https://api.covid19india.org/data.json")
    .then(res => res.json())
    .then(data => {
      data.statewise.forEach(tableData => {
        if (tableData.state === "Total") {
          return;
        } else {
          object.innerHTML += `
            <tr>
                <td class="">${tableData.state}</td>
                <td><span class="label label-primary">${tableData.confirmed}</span></td>
                <td><span class="label label-warning">${tableData.active}</span></td>
                <td><span class="label label-success">${tableData.recovered}</span></td>
                <td><span class="label label-danger">${tableData.deaths}</span></td>
              </tr>`;
        }
      });
    });
};
getData().then(() => null);
