var vueload = new Vue({
	el: '#app',
	data: {
		image: 'static/img/slide_1.jpg',
		currentNumber: 0,
		showit: true,
		show2: false,
		timer: null,
		griditem: [
			{col: 'one' , icon: ' chevron right',},
			{col: 'three' , h2control:'ok', icon:'write' , content:'專案規劃' , subheader:'完善的專案評估，以達風險最小化，利益最大化。'},
			{col: 'one' , icon: ' plus',},
			{col: 'three' , h2control:'ok', icon:'code' , content:'程式撰寫' , subheader:'採用適用於您的案例的解決方案以進行專案研發。'},
			{col: 'one' , icon: ' plus',},
			{col: 'three' , h2control:'ok', icon:'cube' , content:'CI/CD' , subheader:'持續整合/持續交付，為您提供系統高整合性。'},
			{col: 'one' , icon: ' arrow right',},
			{col: 'three' , h2control:'ok', icon:'flag' , content:'您的專案' , subheader:'最後建置出專屬於貴司的專案。'}
		],
		solution: [
			{img: 'static/img/python.png' , text: '我們採用 Python 作為我們的研發主要語言，並且充分利用 Python 在後端處理/資料處理的易用優勢。<br/><br/>> 在全端以及跨平臺的應用上，我們依照每一個專案的特性選擇採用 Flask 框架或基於 Flask 自行研發的 mu_Flask 框架，在跨平臺的領域上使用 RESTful API 的形態進行多種平臺應用的後端結合，而在 ORM 的部分依照專案規模會選擇採用傳統式的 SQLAlchemy 或是 NoSQL 的 MongoEngine 。<br/><br/>> 在資料採集，數據統計的應用上，我們會利用 numpy/pandas 設計相關的統計或是運算單元程式，並且利用 OpenMP / Dask 等分散式運算模塊完成大量數據統計運算的需求。最後在搭配相關的前後端框架，以及 matplotlib 進行可視覺化數據的呈現。' },
			{img: 'static/img/travis.png' , text: '我們採用 Travis CI ，這個在開源界許多大型專案使用的 CI/CD 工具。<br/><br/>Travis CI 能夠幫助我們在異環境多版本快速的進行部屬測試，傳統模式中每個錯誤都是要開發者自己知道錯誤在哪，常常發生修好了一部份卻沒發現有另一部分的錯誤，而在自動化的測試還境內因為是全面性的測試，因此能夠減少此種狀況。<br/><br/>並且在專案研發時我們能透過 Travis CI 保障異常事件發生時能夠讓跟此專案有關的開發者在第一時間知道，能夠讓我們快速且安全的持續交付無 Bug 的軟體。' },     
			{img: 'static/img/docker.png' , text: '我們採用 Docker 此虛擬化容器技術作為我們的研發/測試環境以及發行伺服器的自動化部屬。<br/><br/>容器技術能有效增加研發測試以及環境部屬的速度以及減少環境錯誤發生，而容器技術目前以 Docker 為最為主流以及資源最廣擴的領頭技術。<br/><br/>傳統架構中研發或是部屬常常會使用虛擬機器，但是虛擬機器的肥大常常導致研發/部屬的難度增加，因此本工作室採用容器技術，此技術在於建置一開始的研發環境，以及進行 CI/CD 的一體式偵錯環境，以及最後將專案部屬至 Production Server ，皆可在十分輕量的容器下完成' },
			{img: 'static/img/vue.png' , text: '我們採用 Vue.js 此 MVVM (Model-View-ViewModel) 風格的雙向數據綁定 JavaScript 函式庫 。<br/><br/>MVVM 技術能解決傳統 MVC 架構中大量的 Dom 元素造成的效能低落，也能解決掉許多繁瑣的前端問題。傳統架構中會發生的繁複的手動對 Dom 元素做修改，而因為 MVVM 架構中的 View 與 Model 利用了 VeiwModel 進行了雙向綁定，因此我們只要對一方進行修改另一方就會自動同步幾乎減少了所有的手動元素修改。<br/><br/> 而 Vue.js 可以算是 MVVM 最佳的實踐函式庫，不但輕量也完整支援數據雙向綁定，並且 API 使用上簡潔，因此配合純 JavaScript 進行研發能夠研發出高效能且易於維護的前端架構。' }
		]
	},
	methods: {
		area: function (event) {
			window.scrollTo(0,0); 
			u = document.getElementById("d-" + event.target.id).getBoundingClientRect().top;	   
			baru = document.getElementById("menubar").clientHeight;
			window.scrollTo(0,u - baru);	   
		},
		toggle: function (event) {
			window.setInterval(function () {
			setTimeout(function() {
				vueload.showit = !vueload.showit;
				if (vueload.image == "static/img/slide_1.jpg")
				{
				vueload.image = "static/img/python.png";
				}
				else if (vueload.image == "static/img/python.png") 
				{
				vueload.image = "static/img/docker.png"
				}
				else 
				{
				vueload.image = "static/img/slide_1.jpg"
				}
			}, 3000)
			setTimeout(function() {
				vueload.showit = !vueload.showit;
			}, 3500)
			}, 3500);

		}

	}
})

vueload.toggle();
