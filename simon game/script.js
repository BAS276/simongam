
let color = document.getElementsByClassName('colors');
const score = document.getElementById("score");
const button = document.getElementById("button");

const colorObj1 = {
    color1: "#00ff00",
    color2: "#ff0000",
    color3: "#0000ff",
    color4: "#ffff00"
};

const colorObj2 = {
    color1: "#006400",
    color2: "#800000",
    color3: "#00008b",
    color4: "#808000"
};

let list1 = [];

button.onclick = function () {
    document.body.style.background = ''
    button.style.cssText= 'opacity: 0%;'
    score.textContent = 0
    for (let i = 0; i < 1; i++) {
        let Rn = Math.floor(Math.random() * 4) + 1;
        list1.push(Rn);
        color[list1[i] - 1].style.background = colorObj1['color' + list1[i]];
        setTimeout(() => {
            color[list1[i] - 1].style.background = colorObj2['color' + list1[i]];
        }, 1000);
    }

    console.log('Generated list:', list1);
}

let list2 = [];
let Index = 0;
y = 0
function val(value) {
    let x = value + 1
    list2.push(x);
    console.log('User input:', list2);
    if (x !== list1[Index]) {
        document.body.style.background = 'red'
        setTimeout(() => {
            window.location.reload();
        }, 1000);
        
        
        return;
    }
    Index++;
    if (Index === list1.length) {
        console.log('Correct sequence!');
        y = y + 1
        score.textContent = y
        Index = 0;
        list2 = [];
        setTimeout(() => {
            for (let i = 0; i < 1; i++) {
                let Rn = Math.floor(Math.random() * 4) + 1;
                list1.push(Rn);
            }
            console.log('Generated new list:', list1);
            for (let i = 0; i < list1.length; i++) {
                setTimeout(() => {
                    console.log(list1[i]);
                    color[list1[i] - 1].style.background = colorObj1['color' + list1[i]];
                    setTimeout(() => {
                        color[list1[i] - 1].style.background = colorObj2['color' + list1[i]];
                    }, 500);
                }, i * 1000);
            }
        }, 1000);
    }
}