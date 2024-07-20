document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('searchQuery').value.trim();
    if (query) {
      const url = `https://shopee.co.id/search?keyword=${encodeURIComponent(
				query
			)}&is_from_login=true`;
      chrome.tabs.create({ url: url });
    }
  });
  