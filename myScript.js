const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value; //guarda o valor posto no input
  input.value = ''; // mete o input vazio

  const listItem = document.createElement('li'); //crio o elemento li e alojamento
  const listText = document.createElement('span'); //crio o elemento span e alojamento
  const listBtn = document.createElement('button'); //crio o elemento button e alojamento

  listItem.appendChild(listText);  //no click adiciona o listtext e aparece uma lista para o utilizador -> neste momento vazia
  listText.textContent = myItem; //listtext e' igual ao myitem q e' o valor inicialmente alojado la em cima q e' aquilo q o utilizador escreve -> aparece entao aquilo q escrevemos no input

  listItem.appendChild(listBtn);//no click adiciona outro listitem mas este vai ser um botao
  listBtn.textContent = 'Delete';//o botao diz delete

  list.appendChild(listItem); //isto adiciona os lis de cima com o conteudo para a div ul

  listBtn.addEventListener('click', () => { //onclick do botao de delete q remove o item selecionado
    list.removeChild(listItem);
  });

  input.focus(); //faz com q depois de introduzirmos algo seja o input a ficar 'focused' ou seja fica com aquela barrinha

  //https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html ver resultado!
});