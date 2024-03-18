export {}

const replaceThaiNumerals = (text: string) =>
  text
    .replace(/๐/gi, "0")
    .replace(/๑/gi, "1")
    .replace(/๒/gi, "2")
    .replace(/๓/gi, "3")
    .replace(/๔/gi, "4")
    .replace(/๕/gi, "5")
    .replace(/๖/gi, "6")
    .replace(/๗/gi, "7")
    .replace(/๘/gi, "8")
    .replace(/๙/gi, "9")

document.onmouseup = (e) => {
  const selectedText = replaceThaiNumerals(
    document.getSelection().toString().trim()
  )

  const number = Number(selectedText)
  if (selectedText.length && !Number.isNaN(number)) {
    console.log(number - 543)
  }
}
