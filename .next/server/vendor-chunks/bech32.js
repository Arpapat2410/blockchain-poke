"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/bech32";
exports.ids = ["vendor-chunks/bech32"];
exports.modules = {

/***/ "(ssr)/./node_modules/bech32/index.js":
/*!**************************************!*\
  !*** ./node_modules/bech32/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\nvar ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'\n\n// pre-compute lookup table\nvar ALPHABET_MAP = {}\nfor (var z = 0; z < ALPHABET.length; z++) {\n  var x = ALPHABET.charAt(z)\n\n  if (ALPHABET_MAP[x] !== undefined) throw new TypeError(x + ' is ambiguous')\n  ALPHABET_MAP[x] = z\n}\n\nfunction polymodStep (pre) {\n  var b = pre >> 25\n  return ((pre & 0x1FFFFFF) << 5) ^\n    (-((b >> 0) & 1) & 0x3b6a57b2) ^\n    (-((b >> 1) & 1) & 0x26508e6d) ^\n    (-((b >> 2) & 1) & 0x1ea119fa) ^\n    (-((b >> 3) & 1) & 0x3d4233dd) ^\n    (-((b >> 4) & 1) & 0x2a1462b3)\n}\n\nfunction prefixChk (prefix) {\n  var chk = 1\n  for (var i = 0; i < prefix.length; ++i) {\n    var c = prefix.charCodeAt(i)\n    if (c < 33 || c > 126) return 'Invalid prefix (' + prefix + ')'\n\n    chk = polymodStep(chk) ^ (c >> 5)\n  }\n  chk = polymodStep(chk)\n\n  for (i = 0; i < prefix.length; ++i) {\n    var v = prefix.charCodeAt(i)\n    chk = polymodStep(chk) ^ (v & 0x1f)\n  }\n  return chk\n}\n\nfunction encode (prefix, words, LIMIT) {\n  LIMIT = LIMIT || 90\n  if ((prefix.length + 7 + words.length) > LIMIT) throw new TypeError('Exceeds length limit')\n\n  prefix = prefix.toLowerCase()\n\n  // determine chk mod\n  var chk = prefixChk(prefix)\n  if (typeof chk === 'string') throw new Error(chk)\n\n  var result = prefix + '1'\n  for (var i = 0; i < words.length; ++i) {\n    var x = words[i]\n    if ((x >> 5) !== 0) throw new Error('Non 5-bit word')\n\n    chk = polymodStep(chk) ^ x\n    result += ALPHABET.charAt(x)\n  }\n\n  for (i = 0; i < 6; ++i) {\n    chk = polymodStep(chk)\n  }\n  chk ^= 1\n\n  for (i = 0; i < 6; ++i) {\n    var v = (chk >> ((5 - i) * 5)) & 0x1f\n    result += ALPHABET.charAt(v)\n  }\n\n  return result\n}\n\nfunction __decode (str, LIMIT) {\n  LIMIT = LIMIT || 90\n  if (str.length < 8) return str + ' too short'\n  if (str.length > LIMIT) return 'Exceeds length limit'\n\n  // don't allow mixed case\n  var lowered = str.toLowerCase()\n  var uppered = str.toUpperCase()\n  if (str !== lowered && str !== uppered) return 'Mixed-case string ' + str\n  str = lowered\n\n  var split = str.lastIndexOf('1')\n  if (split === -1) return 'No separator character for ' + str\n  if (split === 0) return 'Missing prefix for ' + str\n\n  var prefix = str.slice(0, split)\n  var wordChars = str.slice(split + 1)\n  if (wordChars.length < 6) return 'Data too short'\n\n  var chk = prefixChk(prefix)\n  if (typeof chk === 'string') return chk\n\n  var words = []\n  for (var i = 0; i < wordChars.length; ++i) {\n    var c = wordChars.charAt(i)\n    var v = ALPHABET_MAP[c]\n    if (v === undefined) return 'Unknown character ' + c\n    chk = polymodStep(chk) ^ v\n\n    // not in the checksum?\n    if (i + 6 >= wordChars.length) continue\n    words.push(v)\n  }\n\n  if (chk !== 1) return 'Invalid checksum for ' + str\n  return { prefix: prefix, words: words }\n}\n\nfunction decodeUnsafe () {\n  var res = __decode.apply(null, arguments)\n  if (typeof res === 'object') return res\n}\n\nfunction decode (str) {\n  var res = __decode.apply(null, arguments)\n  if (typeof res === 'object') return res\n\n  throw new Error(res)\n}\n\nfunction convert (data, inBits, outBits, pad) {\n  var value = 0\n  var bits = 0\n  var maxV = (1 << outBits) - 1\n\n  var result = []\n  for (var i = 0; i < data.length; ++i) {\n    value = (value << inBits) | data[i]\n    bits += inBits\n\n    while (bits >= outBits) {\n      bits -= outBits\n      result.push((value >> bits) & maxV)\n    }\n  }\n\n  if (pad) {\n    if (bits > 0) {\n      result.push((value << (outBits - bits)) & maxV)\n    }\n  } else {\n    if (bits >= inBits) return 'Excess padding'\n    if ((value << (outBits - bits)) & maxV) return 'Non-zero padding'\n  }\n\n  return result\n}\n\nfunction toWordsUnsafe (bytes) {\n  var res = convert(bytes, 8, 5, true)\n  if (Array.isArray(res)) return res\n}\n\nfunction toWords (bytes) {\n  var res = convert(bytes, 8, 5, true)\n  if (Array.isArray(res)) return res\n\n  throw new Error(res)\n}\n\nfunction fromWordsUnsafe (words) {\n  var res = convert(words, 5, 8, false)\n  if (Array.isArray(res)) return res\n}\n\nfunction fromWords (words) {\n  var res = convert(words, 5, 8, false)\n  if (Array.isArray(res)) return res\n\n  throw new Error(res)\n}\n\nmodule.exports = {\n  decodeUnsafe: decodeUnsafe,\n  decode: decode,\n  encode: encode,\n  toWordsUnsafe: toWordsUnsafe,\n  toWords: toWords,\n  fromWordsUnsafe: fromWordsUnsafe,\n  fromWords: fromWords\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYmVjaDMyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixxQkFBcUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1CQUFtQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2NrY2hhaW4tcG9rZS8uL25vZGVfbW9kdWxlcy9iZWNoMzIvaW5kZXguanM/NDViMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbnZhciBBTFBIQUJFVCA9ICdxcHpyeTl4OGdmMnR2ZHcwczNqbjU0a2hjZTZtdWE3bCdcblxuLy8gcHJlLWNvbXB1dGUgbG9va3VwIHRhYmxlXG52YXIgQUxQSEFCRVRfTUFQID0ge31cbmZvciAodmFyIHogPSAwOyB6IDwgQUxQSEFCRVQubGVuZ3RoOyB6KyspIHtcbiAgdmFyIHggPSBBTFBIQUJFVC5jaGFyQXQoeilcblxuICBpZiAoQUxQSEFCRVRfTUFQW3hdICE9PSB1bmRlZmluZWQpIHRocm93IG5ldyBUeXBlRXJyb3IoeCArICcgaXMgYW1iaWd1b3VzJylcbiAgQUxQSEFCRVRfTUFQW3hdID0gelxufVxuXG5mdW5jdGlvbiBwb2x5bW9kU3RlcCAocHJlKSB7XG4gIHZhciBiID0gcHJlID4+IDI1XG4gIHJldHVybiAoKHByZSAmIDB4MUZGRkZGRikgPDwgNSkgXlxuICAgICgtKChiID4+IDApICYgMSkgJiAweDNiNmE1N2IyKSBeXG4gICAgKC0oKGIgPj4gMSkgJiAxKSAmIDB4MjY1MDhlNmQpIF5cbiAgICAoLSgoYiA+PiAyKSAmIDEpICYgMHgxZWExMTlmYSkgXlxuICAgICgtKChiID4+IDMpICYgMSkgJiAweDNkNDIzM2RkKSBeXG4gICAgKC0oKGIgPj4gNCkgJiAxKSAmIDB4MmExNDYyYjMpXG59XG5cbmZ1bmN0aW9uIHByZWZpeENoayAocHJlZml4KSB7XG4gIHZhciBjaGsgPSAxXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGMgPSBwcmVmaXguY2hhckNvZGVBdChpKVxuICAgIGlmIChjIDwgMzMgfHwgYyA+IDEyNikgcmV0dXJuICdJbnZhbGlkIHByZWZpeCAoJyArIHByZWZpeCArICcpJ1xuXG4gICAgY2hrID0gcG9seW1vZFN0ZXAoY2hrKSBeIChjID4+IDUpXG4gIH1cbiAgY2hrID0gcG9seW1vZFN0ZXAoY2hrKVxuXG4gIGZvciAoaSA9IDA7IGkgPCBwcmVmaXgubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgdiA9IHByZWZpeC5jaGFyQ29kZUF0KGkpXG4gICAgY2hrID0gcG9seW1vZFN0ZXAoY2hrKSBeICh2ICYgMHgxZilcbiAgfVxuICByZXR1cm4gY2hrXG59XG5cbmZ1bmN0aW9uIGVuY29kZSAocHJlZml4LCB3b3JkcywgTElNSVQpIHtcbiAgTElNSVQgPSBMSU1JVCB8fCA5MFxuICBpZiAoKHByZWZpeC5sZW5ndGggKyA3ICsgd29yZHMubGVuZ3RoKSA+IExJTUlUKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeGNlZWRzIGxlbmd0aCBsaW1pdCcpXG5cbiAgcHJlZml4ID0gcHJlZml4LnRvTG93ZXJDYXNlKClcblxuICAvLyBkZXRlcm1pbmUgY2hrIG1vZFxuICB2YXIgY2hrID0gcHJlZml4Q2hrKHByZWZpeClcbiAgaWYgKHR5cGVvZiBjaGsgPT09ICdzdHJpbmcnKSB0aHJvdyBuZXcgRXJyb3IoY2hrKVxuXG4gIHZhciByZXN1bHQgPSBwcmVmaXggKyAnMSdcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7ICsraSkge1xuICAgIHZhciB4ID0gd29yZHNbaV1cbiAgICBpZiAoKHggPj4gNSkgIT09IDApIHRocm93IG5ldyBFcnJvcignTm9uIDUtYml0IHdvcmQnKVxuXG4gICAgY2hrID0gcG9seW1vZFN0ZXAoY2hrKSBeIHhcbiAgICByZXN1bHQgKz0gQUxQSEFCRVQuY2hhckF0KHgpXG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgNjsgKytpKSB7XG4gICAgY2hrID0gcG9seW1vZFN0ZXAoY2hrKVxuICB9XG4gIGNoayBePSAxXG5cbiAgZm9yIChpID0gMDsgaSA8IDY7ICsraSkge1xuICAgIHZhciB2ID0gKGNoayA+PiAoKDUgLSBpKSAqIDUpKSAmIDB4MWZcbiAgICByZXN1bHQgKz0gQUxQSEFCRVQuY2hhckF0KHYpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIF9fZGVjb2RlIChzdHIsIExJTUlUKSB7XG4gIExJTUlUID0gTElNSVQgfHwgOTBcbiAgaWYgKHN0ci5sZW5ndGggPCA4KSByZXR1cm4gc3RyICsgJyB0b28gc2hvcnQnXG4gIGlmIChzdHIubGVuZ3RoID4gTElNSVQpIHJldHVybiAnRXhjZWVkcyBsZW5ndGggbGltaXQnXG5cbiAgLy8gZG9uJ3QgYWxsb3cgbWl4ZWQgY2FzZVxuICB2YXIgbG93ZXJlZCA9IHN0ci50b0xvd2VyQ2FzZSgpXG4gIHZhciB1cHBlcmVkID0gc3RyLnRvVXBwZXJDYXNlKClcbiAgaWYgKHN0ciAhPT0gbG93ZXJlZCAmJiBzdHIgIT09IHVwcGVyZWQpIHJldHVybiAnTWl4ZWQtY2FzZSBzdHJpbmcgJyArIHN0clxuICBzdHIgPSBsb3dlcmVkXG5cbiAgdmFyIHNwbGl0ID0gc3RyLmxhc3RJbmRleE9mKCcxJylcbiAgaWYgKHNwbGl0ID09PSAtMSkgcmV0dXJuICdObyBzZXBhcmF0b3IgY2hhcmFjdGVyIGZvciAnICsgc3RyXG4gIGlmIChzcGxpdCA9PT0gMCkgcmV0dXJuICdNaXNzaW5nIHByZWZpeCBmb3IgJyArIHN0clxuXG4gIHZhciBwcmVmaXggPSBzdHIuc2xpY2UoMCwgc3BsaXQpXG4gIHZhciB3b3JkQ2hhcnMgPSBzdHIuc2xpY2Uoc3BsaXQgKyAxKVxuICBpZiAod29yZENoYXJzLmxlbmd0aCA8IDYpIHJldHVybiAnRGF0YSB0b28gc2hvcnQnXG5cbiAgdmFyIGNoayA9IHByZWZpeENoayhwcmVmaXgpXG4gIGlmICh0eXBlb2YgY2hrID09PSAnc3RyaW5nJykgcmV0dXJuIGNoa1xuXG4gIHZhciB3b3JkcyA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZENoYXJzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGMgPSB3b3JkQ2hhcnMuY2hhckF0KGkpXG4gICAgdmFyIHYgPSBBTFBIQUJFVF9NQVBbY11cbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ1Vua25vd24gY2hhcmFjdGVyICcgKyBjXG4gICAgY2hrID0gcG9seW1vZFN0ZXAoY2hrKSBeIHZcblxuICAgIC8vIG5vdCBpbiB0aGUgY2hlY2tzdW0/XG4gICAgaWYgKGkgKyA2ID49IHdvcmRDaGFycy5sZW5ndGgpIGNvbnRpbnVlXG4gICAgd29yZHMucHVzaCh2KVxuICB9XG5cbiAgaWYgKGNoayAhPT0gMSkgcmV0dXJuICdJbnZhbGlkIGNoZWNrc3VtIGZvciAnICsgc3RyXG4gIHJldHVybiB7IHByZWZpeDogcHJlZml4LCB3b3Jkczogd29yZHMgfVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVbnNhZmUgKCkge1xuICB2YXIgcmVzID0gX19kZWNvZGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICBpZiAodHlwZW9mIHJlcyA9PT0gJ29iamVjdCcpIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZGVjb2RlIChzdHIpIHtcbiAgdmFyIHJlcyA9IF9fZGVjb2RlLmFwcGx5KG51bGwsIGFyZ3VtZW50cylcbiAgaWYgKHR5cGVvZiByZXMgPT09ICdvYmplY3QnKSByZXR1cm4gcmVzXG5cbiAgdGhyb3cgbmV3IEVycm9yKHJlcylcbn1cblxuZnVuY3Rpb24gY29udmVydCAoZGF0YSwgaW5CaXRzLCBvdXRCaXRzLCBwYWQpIHtcbiAgdmFyIHZhbHVlID0gMFxuICB2YXIgYml0cyA9IDBcbiAgdmFyIG1heFYgPSAoMSA8PCBvdXRCaXRzKSAtIDFcblxuICB2YXIgcmVzdWx0ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgKytpKSB7XG4gICAgdmFsdWUgPSAodmFsdWUgPDwgaW5CaXRzKSB8IGRhdGFbaV1cbiAgICBiaXRzICs9IGluQml0c1xuXG4gICAgd2hpbGUgKGJpdHMgPj0gb3V0Qml0cykge1xuICAgICAgYml0cyAtPSBvdXRCaXRzXG4gICAgICByZXN1bHQucHVzaCgodmFsdWUgPj4gYml0cykgJiBtYXhWKVxuICAgIH1cbiAgfVxuXG4gIGlmIChwYWQpIHtcbiAgICBpZiAoYml0cyA+IDApIHtcbiAgICAgIHJlc3VsdC5wdXNoKCh2YWx1ZSA8PCAob3V0Qml0cyAtIGJpdHMpKSAmIG1heFYpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChiaXRzID49IGluQml0cykgcmV0dXJuICdFeGNlc3MgcGFkZGluZydcbiAgICBpZiAoKHZhbHVlIDw8IChvdXRCaXRzIC0gYml0cykpICYgbWF4VikgcmV0dXJuICdOb24temVybyBwYWRkaW5nJ1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiB0b1dvcmRzVW5zYWZlIChieXRlcykge1xuICB2YXIgcmVzID0gY29udmVydChieXRlcywgOCwgNSwgdHJ1ZSlcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkgcmV0dXJuIHJlc1xufVxuXG5mdW5jdGlvbiB0b1dvcmRzIChieXRlcykge1xuICB2YXIgcmVzID0gY29udmVydChieXRlcywgOCwgNSwgdHJ1ZSlcbiAgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkgcmV0dXJuIHJlc1xuXG4gIHRocm93IG5ldyBFcnJvcihyZXMpXG59XG5cbmZ1bmN0aW9uIGZyb21Xb3Jkc1Vuc2FmZSAod29yZHMpIHtcbiAgdmFyIHJlcyA9IGNvbnZlcnQod29yZHMsIDUsIDgsIGZhbHNlKVxuICBpZiAoQXJyYXkuaXNBcnJheShyZXMpKSByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGZyb21Xb3JkcyAod29yZHMpIHtcbiAgdmFyIHJlcyA9IGNvbnZlcnQod29yZHMsIDUsIDgsIGZhbHNlKVxuICBpZiAoQXJyYXkuaXNBcnJheShyZXMpKSByZXR1cm4gcmVzXG5cbiAgdGhyb3cgbmV3IEVycm9yKHJlcylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRlY29kZVVuc2FmZTogZGVjb2RlVW5zYWZlLFxuICBkZWNvZGU6IGRlY29kZSxcbiAgZW5jb2RlOiBlbmNvZGUsXG4gIHRvV29yZHNVbnNhZmU6IHRvV29yZHNVbnNhZmUsXG4gIHRvV29yZHM6IHRvV29yZHMsXG4gIGZyb21Xb3Jkc1Vuc2FmZTogZnJvbVdvcmRzVW5zYWZlLFxuICBmcm9tV29yZHM6IGZyb21Xb3Jkc1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/bech32/index.js\n");

/***/ })

};
;