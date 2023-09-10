// コンテキストメニューを作成
chrome.contextMenus.create({
    id: "share",
    title: "BusyouTube",
    contexts: ["link"],
});

// コンテキストメニューのクリックイベントを処理
chrome.contextMenus.onClicked.addListener(function (info, tab) {
    const requestData = {
        youtube_link: info.linkUrl,
    };
    fetch("http://localhost:5001/process_youtube_link", {
        method: "POST", // HTTPメソッドを指定
        headers: {
            "Content-Type": "application/json", // リクエストヘッダーを指定
        },
        body: JSON.stringify(requestData), // リクエストボディにデータをJSON形式で設定
    })
        .then((response) => {
            return response.text(); // レスポンスをテキスト形式で取得
        })
        .then((data) => {
            // レスポンスデータを取得
            // console.log(data); // ここでデータを処理
            chrome.tabs.create({ url: data }, function (tab) {
                console.log("新しいタブが開かれました。");
            });
        });
});
