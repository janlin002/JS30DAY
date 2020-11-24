const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function createList(plates = [], dom) {
    dom.innerHTML = data
    .map((plate, i) => {
      return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
  }


  createList(items,itemsList);

  function addItem(e){
    e.preventDefault();
    let input = this.querySelector('[name=item]');
    items.push({text:input.value,done:false});
    localsStorage.setItem('items',JSON.stringify(items));
    this.reset();
    createList(items,itemsList);
  }


  addItem.addEventListener('submit',addItem);
  itemsList.addEventListener('click');