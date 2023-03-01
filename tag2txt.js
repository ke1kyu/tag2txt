// ページから指定したタグのテキストを取得する関数
function get_text() {
    const extract_tags = ['h1', 'h2', 'h3', 'p']; // 入手したいタグ
    let text = '';
    for (let tag of extract_tags) {
        const tags = document.getElementsByTagName(tag);
        for (let i = 0; i < tags.length; i++) {
            text += tags[i].textContent.trim() + '\n';
        }
    }
    return text;
}

// ページから取得したテキストをファイルに出力する関数
function saveTextToFile(text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'output.txt';
    anchor.href = URL.createObjectURL(blob);
    anchor.click();
}

// メイン処理
const text = get_text();
saveTextToFile(text);
