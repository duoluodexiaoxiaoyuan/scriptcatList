// type:0 =>2021-09-12 默认
// type:1 =>2021-09-12 10:34:12
// type:2 =>09-12 10:34:12
// type:3 =>09-12 
// type:4 =>2021/09/12 
// type:5 =>2021/09/12 10:34:12
// type:6 =>09/12 10:34:12
// type:7 =>09/12 
var filterTime = function(str,type = 0) {
	console.log('str',str)
	console.log('type',type)
	let date = new Date(str)
	let y = date.getFullYear();
	let m = (date.getMonth()+1 + '').padStart(2,'0');
	let d = (date.getDate() + '').padStart(2,'0');
	let hh = (date.getHours() + '').padStart(2,'0')
	let mm = (date.getMinutes() + '').padStart(2,'0')
	let ss = (date.getSeconds() + '').padStart(2,'0')
	let time;
	switch (type) {
	    case 0:
	        time = `${y}-${m}-${d}`;
	        break;
	    case 1:
			time = `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
	        break;
	    case 2:
	        time = `${m}-${d} ${hh}:${mm}:${ss}`;
	        break;
	    case 3:
	        time = `${m}-${d}`;
	        break;
	    case 4:
	        time = `${y}/${m}/${d}`;
	        break;
	    case 5:
	        time = `${y}/${m}/${d} ${hh}:${mm}:${ss}`;
	        break;
	    case 6:
	       time = `${m}/${d} ${hh}:${mm}:${ss}`;
	        break; 
		case 7:
	        time = `${m}/${d}`;
	        break;
	}
	return time;
}
const triggerInput = (dom) => {
  let myFocus = new Event('focus')
  let myInput = new Event('input')
  let myChange = new Event('change')
  let myBlur = new Event('blur')
  dom.dispatchEvent(myFocus)
  dom.dispatchEvent(myInput)
  dom.dispatchEvent(myChange)
  dom.dispatchEvent(myBlur)
}
let date = new Date()
let startDate = filterTime(date.setMinutes(date.getMinutes()+20),1)  ; //当前时间加20分钟
let endDate = filterTime(date.setDate(date.getDate()+2))+ " 12:00:00" // 当前时间加一天
let startDateDom = document.querySelector('.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange.el-range-editor--small > input:nth-child(2)')
let endDateDom = document.querySelector('.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange.el-range-editor--small > input:nth-child(4)')
startDateDom.value = startDate
endDateDom.value = endDate
triggerInput(startDateDom)

console.log(startDate, endDate)



triggerInput(startDateDom)
startDateDom.value = startDate
triggerInput(startDateDom)
endDateDom.value = endDate
triggerInput(endDateDom)
let buttonSubmit = document.querySelector('.el-button.el-picker-panel__link-btn.el-button--default.el-button--mini.is-plain')
setTimeout(() => {
  buttonSubmit.click()
}, 1000);