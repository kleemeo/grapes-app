export const capitalizeSentence = (string) => {
  const sentence = string;

  let finalSentence = sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  return finalSentence;
}