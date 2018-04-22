function getFirstSelector(selectors){
  return document.querySelector(selectors)
}

function nestedTarget(){
  return document.querySelector('#nested div .target')
}

function increaseRankBy(n){
  var ranked = document.getElementByID('app').querySelectorAll('ul.ranked-list li')
  for(var i = 0; i < ranked.length; i++){
    console.log(ranked[i])
  }
}

function deepestChild(){

}
