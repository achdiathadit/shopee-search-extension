chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		title: "Search on Shopee",
		id: "contextMenu1",
		contexts: ["selection"],
	});

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId === "contextMenu1" && info.selectionText) {
			let query = encodeURIComponent(info.selectionText.trim());
			let url = `https://shopee.co.id/search?keyword=${query}&is_from_login=true`;
			chrome.tabs.create({ url: url });
		}
	});
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if (message.action === "updateContextMenu" && message.selectionText) {
		chrome.contextMenus.update("contextMenu1", {
			title: `Search "${message.selectionText}" on Shopee`,
		});
	}
});