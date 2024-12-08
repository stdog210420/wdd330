const country = document.getElementById("country");
const url = `https://restcountries.com/v3.1/all?fields=name`;
// 儲存日期和數量到本地存儲
// localStorage.setItem('dateValue', document.getElementById('date').value);
// localStorage.setItem('quantityValue', document.getElementById('quantity').value);

// 從本地存儲中讀取日期和數量
// const dateValue = localStorage.getItem('dateValue');
// const quantityValue = localStorage.getItem('quantityValue');

async function apiFetch(){
    try{
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        displayResults(data);           
      }
      else{
        throw Error (await response.text());
      }
    }
    catch (error){
      console.log(error);        
    }
  }
  apiFetch();

  function displayResults(data) {
    // Capitalize the first letter of each word in the country name
    if (data) {
      // 確保找到元素後再進行操作
      const countryNames = data.map(item => {
          const words = item.name.common.split(' ');
          const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
          return capitalizedWords.join(' ');
      });

      // 对国家名称进行排序
      countryNames.sort();

      // 清空下拉列表
      country.innerHTML = "";

      // 为每个国家创建一个选项并添加到下拉列表中
      countryNames.forEach(name => {
          const option = document.createElement('option');
          option.value = name;
          option.text = name;
          country.appendChild(option);
      });
    }
    else {
      console.error('Element with ID "country" not found.');
    }
}
// Get the hidden input field by its id
const timestampField = document.getElementById('timestamp');
// Get the current date/time in milliseconds
const currentTimestamp = Date.now();

// Set the value of the hidden input field to the current date/time
timestampField.value = currentTimestamp;



const phone = document.getElementById('phone');
phone.addEventListener("focusout", checkVaild);

function checkVaild(){
    // Get the field value
    const phone_value = phone.value.trim();
    // Define a regular expression pattern
    const phone_pattern = /\d/g;
    // Check if the value matches the pattern
    if (phone_pattern.test(phone_value)) {
        // If the value matches the pattern, it's valid
        phone.style.backgroundColor = "#fff";
        phone.style.color = "#000";
        console.log("vaild");
    } else {
        // If the value doesn't match the pattern, it's invalid
        phone.style.backgroundColor = "#fff0f3";
        phone.value = "";
        phone.focus();
        console.log("❗Please revise.");
    }
};


// const date2 = document.getElementById("date2");
// const quantity2 = document.getElementById("quantity2");
// date2.innerHTML = dateValue;
// quantity2.innerHTML = quantityValue;