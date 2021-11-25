function uniqueId(radix) {
  return Math.random().toString(16).slice(radix)
}

export default uniqueId;