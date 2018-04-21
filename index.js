function getFirstSelector(selectors){
  return document.querySelector(selectors)
}

function nestedTarget(){
  return document.querySelector('#nested div .target')
}

function increaseRankBy(n){
  const ranked = document.getElementsByClassName('ranked-list')
  ranked.forEach( element => parseInt(element, 10) + 1)
}

function deepestChild(){

}
