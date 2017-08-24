var nameEl = document.getElementById('chose');

var first = []; /* 省，直辖市 */
var second = []; /* 市 */


var selectedIndex = [0, 0]; /* 默认选中的地区 */

var checked = [0, 0]; /* 已选选项 */

function creatList(obj, list){
  obj.forEach(function(item, index, arr){
  var temp = new Object();
  temp.text = item.name;
  temp.value = index;
  list.push(temp);
  })
}

creatList(city, first);

if (city[selectedIndex[0]].hasOwnProperty('sub')) {
  creatList(city[selectedIndex[0]].sub, second);
} else {
  second = [{text: '', value: 0}];
}


var picker = new Picker({
	data: [first, second],
  selectedIndex: selectedIndex,
	title: '地址选择'
});

picker.on('picker.select', function (selectedVal, selectedIndex) {
  var text1 = first[selectedIndex[0]].text;
  var text2 = second[selectedIndex[1]].text;
  // var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';

	nameEl.value = text1 + ' ' + text2;
});

picker.on('picker.change', function (index, selectedIndex) {
  if (index === 0){
    firstChange();
  }

  function firstChange() {
    second = [];
    // third = [];
    checked[0] = selectedIndex;
    var firstCity = city[selectedIndex];
    if (firstCity.hasOwnProperty('sub')) {
      creatList(firstCity.sub, second);
    
    } else {
      second = [{text: '', value: 0}];
      // third = [{text: '', value: 0}];
      checked[1] = 0;
      // checked[2] = 0;
    }

    picker.refillColumn(1, second);
    // picker.refillColumn(2, third);
    picker.scrollColumn(1, 0)
    // picker.scrollColumn(2, 0)
  }



});

picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
  console.log(selectedVal);
  console.log(selectedIndex);
});

nameEl.addEventListener('click', function () {
	picker.show();
});



