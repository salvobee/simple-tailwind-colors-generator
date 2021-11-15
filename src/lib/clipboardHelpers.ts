function fallbackCopyTextToClipboard(textArea: HTMLTextAreaElement): boolean {
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    textArea.focus();
    textArea.select();

    let successful = document.execCommand('copy');
    document.body.removeChild(textArea);

    return successful
}

export async function copyTextToClipboard(textArea: HTMLTextAreaElement): Promise<boolean> {
    if (!navigator.clipboard) {
        return fallbackCopyTextToClipboard(textArea);
    }
    await navigator.clipboard.writeText(textArea.value).then(function() {
        return true
    }, function() {
        return false
    });

    return false
}