const verseChoose = document.querySelector("select");
const poemDisplay = document.querySelector("pre");

verseChoose.addEventListener("change", () => {
    const verse = verseChoose.value;
    const url = updateDisplay(verse);
    // Call `fetch()`, passing in the URL.
    fetch(url)
        // fetch() returns a promise. When we have received a response from the server,
        // the promise's `then()` handler is called with the response.
        .then((response) => {
            // Our handler throws an error if the request did not succeed.
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            // Otherwise (if the response succeeded), our handler fetches the response
            // as text by calling response.text(), and immediately returns the promise
            // returned by `response.text()`.
            return response.text();
        })
        // When response.text() has succeeded, the `then()` handler is called with
        // the text, and we copy it into the `poemDisplay` box.
        .then((text) => {
            poemDisplay.innerHTML = text;
        })
        // Catch any errors that might happen, and display a message
        // in the `poemDisplay` box.
        .catch((error) => {
            poemDisplay.innerHTML = `Could not fetch verse: ${error}`;
        });
});

// 更新顯示 URL 的函式
function updateDisplay(verse) {
    // 移除空格並轉為小寫，例如 "Verse 1" -> "verse1"
    const cleanedVerse = verse.replace(" ", "").toLowerCase();
    // 生成完整的 URL，例如 "scripts/verse1.txt"
    return `scripts/${cleanedVerse}`;
}

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";