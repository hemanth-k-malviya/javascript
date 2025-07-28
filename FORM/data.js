// let alldata=[];
//     let userForm = (e) => {
//         e.preventDefault()
//         console.log(e.target.uname.value)

//        let userobj = {
//             name: e.target.uname.value,
//             email: e.target.uemail.value,
//             number: e.target.unumber.value,
//             password: e.target.upassword.value,
//             Gender: e.target.Gender.value,
//             address: e.target.uadd.value,
//         }

//         alldata.push(userobj)
//         console.log(userobj)
//     }

let states = [
    { id: 1, name: 'Maharashtra', country_name: 'India' },
    { id: 2, name: 'Karnataka', country_name: 'India' },
    { id: 3, name: 'Tamil Nadu', country_name: 'India' },
    { id: 4, name: 'West Bengal', country_name: 'India' },
    { id: 5, name: 'Gujarat', country_name: 'India' },
    { id: 6, name: 'Ontario', country_name: 'Canada' },
    { id: 7, name: 'Quebec', country_name: 'Canada' },
    { id: 8, name: 'British Columbia', country_name: 'Canada' },
    { id: 9, name: 'Alberta', country_name: 'Canada' },
    { id: 10, name: 'Manitoba', country_name: 'Canada' },
    { id: 11, name: 'New South Wales', country_name: 'Austraila' },
    { id: 12, name: 'Victoria', country_name: 'Austraila' },
    { id: 13, name: 'Queensland', country_name: 'Austraila' },
    { id: 14, name: 'Western Australia', country_name: 'Austraila' },
    { id: 15, name: 'South Australia', country_name: 'Austraila' }
];

document.getElementById("country").addEventListener("change", (country_name) => {
    console.log(country_name.target.value);

    let filterState = states.filter((value) => {
        if (country_name.target.value == value.country_name) {
            return value;
        }
    })
    let statesName = ' <option value="">Select State</option>'
    filterState.forEach((value) => {
        statesName += ' <option value="'+ value.name +'">'+ value.name + '</option>'
    })
    document.getElementById("state").innerHTML = statesName;

});

let allData = [];

function displayData(allData) {
    if (allData.length > 0) {
        userdisplay = '';
        allData.forEach((v, i) => {
            console.log(v)
            userdisplay += ` <tr>
                                <td>${i + 1}</td>
                                <td>${v.name}</td>
                                <td>${v.email}</td>
                                <td>${v.number}</td> 
                                <td>${v.Gender}</td>
                                <td>${v.address}</td>
                                <td>${v.country_name}</td>
                                <td>${v.state_name}</td>
                                <td><button onclick="deleteUser(${i})" > Delete </button></td>
                            </tr>`
        })
        document.getElementById('fetch-data').innerHTML = userdisplay;
    } else {
        var userData = `
                        <tr>
                            <td colspan="10">No Record Found!</td>
                       </tr>
                       `;
        document.getElementById('fetch-data').innerHTML = userData;
    }

}
displayData(allData);

document.getElementById("userform").addEventListener("submit", (e) => {
    e.preventDefault();
    const user = {
        name: e.target.uname.value,
        email: e.target.uemail.value,
        number: e.target.unumber.value,
        // password: e.target.upassword.value,
        Gender: e.target.querySelector('input[name="Gender"]:checked').value,
        address: e.target.uadd.value,
        country_name: e.target.country.value,
        state_name: e.target.state.value
    }
    allData = [user, ...allData];
    displayData(allData);
    e.target.reset();
    let statesName = ' <option value="">Select State</option>'
    document.getElementById("state").innerHTML = statesName;

});

function deleteUser(i){
console.log(i);
allData.splice(i,1);
displayData(allData);
}