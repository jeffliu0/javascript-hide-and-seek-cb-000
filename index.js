function getFirstSelector(selectors){
  return document.querySelector(selectors)
}

function nestedTarget(){
  return document.querySelector('#nested div .target')
}

function increaseRankBy(n){
  const ranked = document.getElementsByClassName('ranked-list').querySelectorAll('li')
  for(var i = 0; i < ranked.length; i++){
    console.log(ranked[i])
  }
}

function deepestChild(){

}
