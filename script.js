let f1 = document.forms['f1'];
let f2 = document.forms['f2'];
let f3 = document.forms['f3'];
let colorsList = ["crimson", "blue", "green", "black", "yellow",
    "pink", "white", "blueviolet", "cyan"];
let flag = 0;

let getSel = x => document.querySelector(x);
f1.edit.addEventListener('click', function () {

    f2.area.style.display = 'block';
    f2.area.value = getSel('.box1').innerHTML;
    f2.add.style.display = 'block';
    f2.save.style.display = 'block';
    f3.style.display = 'none';
})

f2.save.addEventListener('click', function () {
    getSel('.box1').innerHTML = f2.area.value;
    f2.area.style.display = 'none';
    f2.add.style.display = 'none';
    f2.save.style.display = 'none';
})

f1.style.addEventListener('click', function () {
    f3.style.display = 'block';
    f2.area.style.display = 'none';
    f2.add.style.display = 'none';
    f2.save.style.display = 'none';
})


for (let i = 0; i < f3.elements.length - 5; i++) {
    f3.elements[i].addEventListener('click', function () {
        getSel('.box1').style.fontSize = this.value;
    })
}

for (let i = 5; i < f3.elements.length - 1; i++) {
    f3.elements[i].addEventListener('click', function () {
        getSel('.box1').style.fontFamily = this.value;
    })
}

f3.bold.addEventListener('click', function () {
    if (this.checked) {
        getSel('.box1').style.fontWeight = 'bold';
    }
    else {
        getSel('.box1').style.fontWeight = 'normal';
    }

})

f3.cursive.addEventListener('click', function () {
    if (this.checked) {
        getSel('.box1').style.fontStyle = 'italic';
    }
    else {
        getSel('.box1').style.fontStyle = 'normal';
    }

})

for (let i = 0; i < colorsList.length; i++) {
    getSel(`.div${i + 1}`).addEventListener('click', (event) => {
        if (flag === 0) {
            getSel('.box1').style.color = colorsList[i];
            for (let i = 0; i < 9; i++) {
                getSel(`.div${i + 1}`).style.display = 'none';
            }

        }
        if (flag === 1) {
            getSel('.boxText').style.backgroundColor = colorsList[i];
            for (let i = 0; i < 9; i++) {
                getSel(`.div${i + 1}`).style.display = 'none';
            }
        }
    });
}
f3.color.addEventListener('click', () => {
    flag = 0;
    setColors();
});
f3.background.addEventListener('click', () => {
    flag = 1;
    setBackground();
})
let setColors = () => {
    for (let i = 0; i < 9; i++) {
        getSel(`.div${i + 1}`).style.display = 'block';
        getSel(`.div${i + 1}`).style.backgroundColor = colorsList[i];
        getSel(`.div${i + 1}`).style.border = '1px solid black';
    }
};
let setBackground = () => {
    for (let i = 0; i < 9; i++) {
        getSel(`.div${i + 1}`).style.display = 'block';
        getSel(`.div${i + 1}`).style.backgroundColor = colorsList[i];
        getSel(`.div${i + 1}`).style.border = '1px solid black';
    }
};




f2.add.addEventListener('click', function () {
    getSel('.boxText').style.display = 'none';
    f1.edit.style.opacity = 0;
    f1.style.style.opacity = 0;
    getSel('.box2').style.display = 'none';
    getSel('.boxChoose').style.display = 'block';
})
getSel('.radt').addEventListener('click', function () {
    f5.style.display = 'block';
    f6.style.display = 'none';
})



getSel('.radl').addEventListener('click', function () {
    f5.style.display = 'none';
    f6.style.display = 'block';
})



f6.createL.addEventListener('click', function () {
    f2.area.value += `<ul type="${f6.elements[1].value}">`;
    for (let i = 1; i <= f6.countLi.value; i++) {
        f2.area.value += `<li>text item${i}</li>`;
    }
    f2.area.value += `</ul>`;

    f5.style.display = 'none';
    f6.style.display = 'block';
    getSel('.boxText').style.display = 'block';
    getSel('.box2').style.display = 'block';
    getSel('.boxChoose').style.display = 'none';
    f1.edit.style.opacity = 1;
    f1.style.style.opacity = 1;


})


f5.createT.addEventListener('click', function () {
    f2.area.value += '<table>';
    for (let i = 0; i < f5.countTR.value; i++) {
        f2.area.value += '<tr>';
        for (let j = 0; j < f5.countTD.value; j++) {
            f2.area.value += `<td style="width:${f5.widthTD.value + 'px'}; 
            height:${f5.heightTD.value + 'px'}; 
            border:${f5.borderW.value + 'px'} ${f5.elements[5].value} ${f5.elements[6].value}">TD</td>`;
        }
        f2.area.value += '</tr>';
    }
    f2.area.value += '</table>';
    f5.style.display = 'block';
    f6.style.display = 'none';
    getSel('.boxText').style.display = 'block';
    getSel('.box2').style.display = 'block';
    getSel('.boxChoose').style.display = 'none';
    f1.edit.style.opacity = 1;
    f1.style.style.opacity = 1;

})







