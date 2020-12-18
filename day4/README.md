<h2>js-array的使用</h2>

<h3>filter()</h3>
<p>保留原始資料，再抽出條件指定的資料，做新的陣列</p>
<p>filter() 會回傳一個陣列，其條件是 return 後方為 true 的物件，很適合用在搜尋符合條件的資料。</p>

<h3>find()</h3>
<p>find() 與 filter() 很像，但 find() 只會回傳一個值(第一個為 true 的值)。</p>

<h3>forEach()</h3>
<p>forEach 是這幾個陣列函式最單純的一個(功能類似for，不過寫法更容易)，不會額外回傳值，只單純執行每個陣列內的物件或值。</p>

<h3>map()</h3>
<p>使用 map() 時他需要回傳一個值，他會透過函式內所回傳的值組合成一個陣列。</p>

<h3>every()</h3>
<p>every() 可以檢查所有的陣列是否符合條件，這僅會回傳一個值 true or false，可以用來檢查陣列中的內容是否符合特定條件。</p>

<h3>some()</h3>
<p>some() 與 every() 非常接近，都是回傳 true or false，差異僅在 every() 需完全符合，some() 僅需要部分符合。</p>

<h3>sort()</h3>
<p>排序(小到大)</p>

<h3>reduce()</h3>
<p>reduce() 和其他幾個差異很大，他可以與前一個回傳的值再次作運算</p>

```bash
var reducePlus = people.reduce(function(accumulator, currentValue, currentIndex, array){
  // 分別為前一個回傳值, 目前值, 當前索引值
  console.log(accumulator, currentValue, currentIndex);
  return accumulator + currentValue.age;  // 與前一個值相加
}, 0);                                    // 傳入初始化值為 0
console.log(reducePlus);
```

文章參考：[連結](https://wcc723.github.io/javascript/2017/06/29/es6-native-array/)
