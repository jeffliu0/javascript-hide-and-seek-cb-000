function getFirstSelector(selectors){
  if(selectors.length == 0){
    return console.error("Selectors is empty")
  }
  return document.getElementsByTagName('div')[0]
}
