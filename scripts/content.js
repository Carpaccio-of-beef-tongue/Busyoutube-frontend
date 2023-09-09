// コンテキストメニューを作成
const parent = chrome.contextMenus.create({
  id: "share",
  title: "BusyouTube",
  contexts: ["link"],
});

// コンテキストメニューのクリックイベントを処理
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "share" && info.linkUrl) {
      console.log("リンク: " + info.linkUrl);
  }
});