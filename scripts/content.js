/*log*/
console.log("hello")

/* コンテキストメニューを作成 */
const parent = chrome.contextMenus.create({
    id: "share",
    title: "BusyouTubeにURLを貼り付ける",
    contexts: ["all"],
  });