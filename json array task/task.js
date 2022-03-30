var data;
    fetch("task.json")
        .then((res) => res.json())
        .then((data1) => {
            data = data1
        });
    var arr1 = []
    var arr = []
    var studentCount = 0;
   

    function maxStudentsInCol(cat) {
        data.colleges.filter((col, index) => {
            data.collegeDepartments.filter(dept => {
                if (col.c_id === dept.c_id) {
                    if (cat === "students") {
                        studentCount += dept.placements_done
                    } 
                }
            })
            if (cat === "students") {
                arr[index] = studentCount;
                arr1[index] = { colleges: col.name, placements_done: studentCount };
            }
            studentCount = 0
            
        })
     
        console.log(arr1, 'hh');
        arr2 = arr1
        let id = arr.indexOf(Math.max(...arr))
        console.log(data.colleges[id].name)
        if (cat === "students") {
            document.getElementById("demo").innerHTML = "most placement done college name:-"+ data.colleges[id].name
        } 
        arr1.sort(function (x, y) {
    return x.colleges - y.colleges;
});

console.table(arr1);
arr1.sort(function (x, y) {
    return x.placements - y.placements;
});

console.table(arr1);
arr1.sort(function (x, y) {
    return x.studentCount - y.studentCount;
});

console.table(arr1);     



        console.log(arr2);
            var col = [];
            for (var i = 0; i < arr2.length; i++) {
                for (var key in arr2[i]) {
                    if (col.indexOf(key) === -1) {
                        col.push(key);
                    }
                }
            }

            var table = document.createElement("table");

            var tr = table.insertRow(-1);

            for (var i = 0; i < col.length; i++) {
                var th = document.createElement("th");
                th.innerHTML = col[i];
                tr.appendChild(th);
            }

            for (var i = 0; i < arr2.length; i++) {

                tr = table.insertRow(-1);

                for (var j = 0; j < col.length; j++) {
                    var tabCell = tr.insertCell(-1);
                    tabCell.innerHTML = arr2[i][col[j]];
                }
            }

            var divContainer = document.getElementById("showData");
            divContainer.innerHTML = "";
            divContainer.appendChild(table);
        }
