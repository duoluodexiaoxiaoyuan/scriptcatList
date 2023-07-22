// ==UserScript==
// @name         时区转换
// @namespace    https://bbs.tampermonkey.net.cn/
// @version      0.1.0
// @description  try to take over the world!
// @author       xiaolaji
// @match        https://www.bejson.com/jsonviewernew/
// ==/UserScript==
// 存储所有的时区和时差
let timeZones = {};

// 从本地存储中读取时区和时差
const storedTimeZones = JSON.parse(localStorage.getItem("timeZones"));
if (storedTimeZones) {
  timeZones = storedTimeZones;
}

// 获取当前时间
function getCurrentTime() {
  const date = new Date();
  return date.toLocaleString();
}

// 在页面中添加时间元素
function addTimeElement() {
  const timeElement = document.createElement("div");
  timeElement.id = "time";
  timeElement.style.position = "fixed";
  timeElement.style.top = "10px";
  timeElement.style.right = "10px";
  timeElement.style.fontSize = "20px";
  timeElement.style.fontWeight = "bold";
  timeElement.textContent = getCurrentTime();
  document.body.appendChild(timeElement);
}

// 更新时间元素的内容
function updateTimeElement() {
  const timeElement = document.getElementById("time");
  timeElement.textContent = getCurrentTime();
}

// 每秒钟更新一次时间
setInterval(updateTimeElement, 1000);

// 添加表单元素
function addFormElement() {
  const formElement = document.createElement("form");
  formElement.id = "time-zone-form";
  formElement.style.position = "fixed";
  formElement.style.bottom = "10px";
  formElement.style.right = "10px";
  formElement.style.fontSize = "16px";

  // 添加时区输入框
  const timeZoneLabel = document.createElement("label");
  timeZoneLabel.textContent = "时区：";
  timeZoneLabel.for = "time-zone-input";
  formElement.appendChild(timeZoneLabel);

  const timeZoneInput = document.createElement("input");
  timeZoneInput.type = "text";
  timeZoneInput.id = "time-zone-input";
  timeZoneInput.name = "time-zone-input";
  timeZoneInput.required = true;
  formElement.appendChild(timeZoneInput);

  // 添加时差输入框
  const offsetLabel = document.createElement("label");
  offsetLabel.textContent = "时差：";
  offsetLabel.for = "offset-input";
  formElement.appendChild(offsetLabel);

  const offsetInput = document.createElement("input");
  offsetInput.type = "number";
  offsetInput.id = "offset-input";
  offsetInput.name = "offset-input";
  offsetInput.required = true;
  formElement.appendChild(offsetInput);

  // 添加提交按钮
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "添加";
  formElement.appendChild(submitButton);

  // 提交表单时触发
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const timeZone = timeZoneInput.value;
    const offset = offsetInput.value;

    // 添加新的时区
    addTimeZone(timeZone, offset);

    // 清空输入框
    timeZoneInput.value = "";
    offsetInput.value = "";

    // 将时区和时差存储到本地存储中
    localStorage.setItem("timeZones", JSON.stringify(timeZones));
  });

  document.body.appendChild(formElement);
}

// 添加新的时区
function addTimeZone(timeZone, offset) {
  const timeElement = document.createElement("div");
  timeElement.id = `time-${timeZone}`;
  timeElement.style.position = "fixed";
  timeElement.style.top = `${30 * (Object.keys(timeZones).length + 1)}px`;
  timeElement.style.right = "10px";
  timeElement.style.fontSize = "18px";
  document.body.appendChild(timeElement);

  timeZones[timeZone] = offset;
  updateTimeZoneElement(timeZone);

  // 将时区和时差存储到本地存储中
  localStorage.setItem("timeZones", JSON.stringify(timeZones));
}

// 更新时区元素的内容
function updateTimeZoneElement(timeZone) {
  const timeElement = document.getElementById(`time-${timeZone}`);
  const offset = timeZones[timeZone];
  const date = new Date();
  const time = date.getTime() + offset * 3600 * 1000;
  const timeString = new Date(time).toLocaleString();
  timeElement.textContent = `${timeZone}: ${timeString}`;
}

// 每秒钟更新一次时区
setInterval(() => {
  for (const timeZone in timeZones) {
    updateTimeZoneElement(timeZone);
  }
}, 1000);

// 在页面加载完成后添加时间元素和表单元素
window.addEventListener("load", () => {
  addTimeElement();
  addFormElement();
  // 更新所有时区的元素
  for (const timeZone in timeZones) {
    updateTimeZoneElement(timeZone);
  }
});