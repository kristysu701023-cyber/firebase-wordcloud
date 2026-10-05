# ☁️ 課堂即時互動文字雲 (Live Firebase Word Cloud)

由 **Firebase Cloud Firestore** 與 **純前端原生 Web 技術** 驅動的高效能即時課堂互動文字雲系統。適用於學校課程、教師研習、千人講座或線上工作坊！

---

## 🌟 核心特色

1. **零延遲即時同步 (Real-time Firestore)**：
   - 學生手機送出關鍵字，大螢幕文字雲透過 `onSnapshot` 毫秒級自動動態重繪。
   - 支援 Firebase Spark 免費方案百萬並發連線，千人研習不卡頓。
2. **大螢幕主控台 (`index.html`)**：
   - 動態詞頻文字雲（次數越多，字體越大、顏色越亮）。
   - 熱門關鍵字 Top 5 即時排行榜。
   - 內建一鍵生成 **學生手機填寫 QR Code**，投影展示方便台下一鍵掃描。
   - 內建 **一鍵清空重設** 與 **模擬測試數據** 工具。
3. **學生手機專用頁 (`submit.html`)**：
   - 專為手機端極致調校，支援多詞一次送出（空格/逗號分開）。
   - 保留座號/暱稱，支援連續快速送出。
   - 快捷詞彙標籤點選。
4. **零伺服器維護**：
   - 純靜態網頁（Vanilla JS + TailwindCSS + WordCloud2.js），支援 GitHub Pages 與 Firebase Hosting 部署。

---

## 🛠️ 技術架構

- **資料庫**：Google Firebase Cloud Firestore (`wordcloud_words` 集合)
- **視覺核心**：[WordCloud2.js](https://github.com/timdream/wordcloud2.js) + HTML5 Canvas
- **樣式**：Tailwind CSS (現代深色科技感主題)
- **QR Code**：QRCode.js
- **部署平台**：GitHub Pages / Firebase Hosting

---

## 🚀 部署與使用

- **大螢幕展示頁**：`index.html`
- **手機填寫頁**：`submit.html`
- **Firebase 設定檔**：`firebase-config.js`
