function backToStart()
{
    window.location.href = "../final/index.html";
}

function initialize() {
    let table = document.getElementById("table_clasament");

    let currentGroup = localStorage.getItem('CurrentGroup');

    let keysForCurrentGroup = [];

    // Get keys for current group
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).includes(currentGroup)) {
            keysForCurrentGroup.push(localStorage.key(i));
        }
    }

    console.log(keysForCurrentGroup);

    keysForCurrentGroup.forEach(key => {
        // RedStar
        if (key.includes("RedStar_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_RedStar_Name");
            let activity1 = localStorage.getItem(currentGroup + "_RedStar_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_RedStar_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_RedStar_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_RedStar_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_RedStar_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_RedStar_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_RedStar_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // YellowCircle
        if (key.includes("YellowCircle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_YellowCircle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_YellowCircle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_YellowCircle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_YellowCircle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_YellowCircle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_YellowCircle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_YellowCircle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_YellowCircle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // GreenCircle
        if (key.includes("GreenCircle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_GreenCircle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_GreenCircle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_GreenCircle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_GreenCircle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_GreenCircle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_GreenCircle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_GreenCircle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_GreenCircle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }


        // BlueWave
        if (key.includes("BlueWave_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_BlueWave_Name");
            let activity1 = localStorage.getItem(currentGroup + "_BlueWave_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_BlueWave_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_BlueWave_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_BlueWave_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_BlueWave_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_BlueWave_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_BlueWave_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // YellowWave
        if (key.includes("YellowWave_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_YellowWave_Name");
            let activity1 = localStorage.getItem(currentGroup + "_YellowWave_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_YellowWave_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_YellowWave_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_YellowWave_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_YellowWave_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_YellowWave_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_YellowWave_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // PurpleWave
        if (key.includes("PurpleWave_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_PurpleWave_Name");
            let activity1 = localStorage.getItem(currentGroup + "_PurpleWave_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_PurpleWave_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_PurpleWave_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_PurpleWave_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_PurpleWave_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_PurpleWave_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_PurpleWave_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // PurpleCircle
        if (key.includes("PurpleCircle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_PurpleCircle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_PurpleCircle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_PurpleCircle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_PurpleCircle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_PurpleCircle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_PurpleCircle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_PurpleCircle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_PurpleCircle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // BlueTriangle
        if (key.includes("BlueTriangle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_BlueTriangle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_BlueTriangle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_BlueTriangle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_BlueTriangle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_BlueTriangle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_BlueTriangle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_BlueTriangle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_BlueTriangle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // RedTriangle
        if (key.includes("RedTriangle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_RedTriangle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_RedTriangle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_RedTriangle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_RedTriangle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_RedTriangle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_RedTriangle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_RedTriangle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_RedTriangle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // YellowTriangle
        if (key.includes("YellowTriangle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_YellowTriangle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_YellowTriangle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_YellowTriangle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_YellowTriangle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_YellowTriangle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_YellowTriangle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_YellowTriangle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_YellowTriangle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // GreenWave
        if (key.includes("GreenWave_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_GreenWave_Name");
            let activity1 = localStorage.getItem(currentGroup + "_GreenWave_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_GreenWave_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_GreenWave_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_GreenWave_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_GreenWave_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_GreenWave_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_GreenWave_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // BlueRibbon
        if (key.includes("BlueRibbon_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_BlueRibbon_Name");
            let activity1 = localStorage.getItem(currentGroup + "_BlueRibbon_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_BlueRibbon_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_BlueRibbon_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_BlueRibbon_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_BlueRibbon_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_BlueRibbon_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_BlueRibbon_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // RedRibbon
        if (key.includes("RedRibbon_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_RedRibbon_Name");
            let activity1 = localStorage.getItem(currentGroup + "_RedRibbon_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_RedRibbon_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_RedRibbon_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_RedRibbon_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_RedRibbon_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_RedRibbon_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_RedRibbon_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // GreenTriangle
        if (key.includes("GreenTriangle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_GreenTriangle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_GreenTriangle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_GreenTriangle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_GreenTriangle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_GreenTriangle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_GreenTriangle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_GreenTriangle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_GreenTriangle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // PurpleTriangle
        if (key.includes("PurpleTriangle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_PurpleTriangle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_PurpleTriangle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_PurpleTriangle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_PurpleTriangle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_PurpleTriangle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_PurpleTriangle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_PurpleTriangle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_PurpleTriangle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // YellowStar
        if (key.includes("YellowStar_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_YellowStar_Name");
            let activity1 = localStorage.getItem(currentGroup + "_YellowStar_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_YellowStar_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_YellowStar_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_YellowStar_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_YellowStar_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_YellowStar_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_YellowStar_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // BlueStar
        if (key.includes("BlueStar_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_BlueStar_Name");
            let activity1 = localStorage.getItem(currentGroup + "_BlueStar_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_BlueStar_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_BlueStar_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_BlueStar_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_BlueStar_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_BlueStar_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_BlueStar_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // GreenRibbon
        if (key.includes("GreenRibbon_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_GreenRibbon_Name");
            let activity1 = localStorage.getItem(currentGroup + "_GreenRibbon_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_GreenRibbon_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_GreenRibbon_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_GreenRibbon_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_GreenRibbon_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_GreenRibbon_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_GreenRibbon_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // PurpleRibbon
        if (key.includes("PurpleRibbon_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_PurpleRibbon_Name");
            let activity1 = localStorage.getItem(currentGroup + "_PurpleRibbon_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_PurpleRibbon_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_PurpleRibbon_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_PurpleRibbon_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_PurpleRibbon_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_PurpleRibbon_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_PurpleRibbon_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // YellowRibbon
        if (key.includes("YellowRibbon_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_YellowRibbon_Name");
            let activity1 = localStorage.getItem(currentGroup + "_YellowRibbon_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_YellowRibbon_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_YellowRibbon_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_YellowRibbon_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_YellowRibbon_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_YellowRibbon_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_YellowRibbon_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // GreenStar
        if (key.includes("GreenStar_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_GreenStar_Name");
            let activity1 = localStorage.getItem(currentGroup + "_GreenStar_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_GreenStar_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_GreenStar_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_GreenStar_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_GreenStar_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_GreenStar_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_GreenStar_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // PurpleStar
        if (key.includes("PurpleStar_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_PurpleStar_Name");
            let activity1 = localStorage.getItem(currentGroup + "_PurpleStar_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_PurpleStar_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_PurpleStar_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_PurpleStar_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_PurpleStar_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_PurpleStar_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_PurpleStar_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // RedWave
        if (key.includes("RedWave_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_RedWave_Name");
            let activity1 = localStorage.getItem(currentGroup + "_RedWave_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_RedWave_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_RedWave_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_RedWave_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_RedWave_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_RedWave_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_RedWave_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // BlueCircle
        if (key.includes("BlueCircle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_BlueCircle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_BlueCircle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_BlueCircle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_BlueCircle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_BlueCircle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_BlueCircle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_BlueCircle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_BlueCircle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }

        // RedCircle
        if (key.includes("RedCircle_Name")) {
            console.log(localStorage.getItem(key));

            let name = localStorage.getItem(currentGroup + "_RedCircle_Name");
            let activity1 = localStorage.getItem(currentGroup + "_RedCircle_Activity1");
            let activity2 = localStorage.getItem(currentGroup + "_RedCircle_Activity2");
            let activity3 = localStorage.getItem(currentGroup + "_RedCircle_Activity3");
            let activity4 = localStorage.getItem(currentGroup + "_RedCircle_Activity4");
            let activity5 = localStorage.getItem(currentGroup + "_RedCircle_Activity5");
            let activity6 = localStorage.getItem(currentGroup + "_RedCircle_Activity6");
            let activity7 = localStorage.getItem(currentGroup + "_RedCircle_Activity7");

            var tr = document.createElement('tr');
            table.appendChild(tr);

            var td_Name = document.createElement('td');
            td_Name.innerHTML = name;
            var td_Activity1 = document.createElement('td');
            td_Activity1.innerHTML = activity1;
            var td_Activity2 = document.createElement('td');
            td_Activity2.innerHTML = activity2;
            var td_Activity3 = document.createElement('td');
            td_Activity3.innerHTML = activity3;
            var td_Activity4 = document.createElement('td');
            td_Activity4.innerHTML = activity4;
            var td_Activity5 = document.createElement('td');
            td_Activity5.innerHTML = activity5;
            var td_Activity6 = document.createElement('td');
            td_Activity6.innerHTML = activity6;
            var td_Activity7 = document.createElement('td');
            td_Activity7.innerHTML = activity7;

            tr.appendChild(td_Name);
            tr.appendChild(td_Activity1);
            tr.appendChild(td_Activity2);
            tr.appendChild(td_Activity3);
            tr.appendChild(td_Activity4);
            tr.appendChild(td_Activity5);
            tr.appendChild(td_Activity6);
            tr.appendChild(td_Activity7);
        }
    });
}