import ListTlt from '../template/listTemplate.hbs'
import fetchCountries from './fetchCountries'
import * as notification from './notification'
import './styles.css';
import debounce from "lodash.debounce";

const refs = {
    list: document.querySelector('.list'),
    searchForm: document.querySelector('.js-search-form'),
}

refs.searchForm.addEventListener('input',debounce(redus, 500))

function redus (event){
    const form = event.target;
    const inputValue = form.value; 
    console.log(inputValue);
    fetchCountries(inputValue)
    .then(data => data.map(el => {
        if (data.length === 1) {
            updateItem(el)
            return
        }
        else if (data.length <= 10) {
            updateList(el)
            return
        } 
        else if (data.length >= 11) {
            notification.showNotification()
            return
        }
    }))
    .catch(error => error)
    refs.list.innerHTML = ''
}

function updateItem(item) {
    const markup = ListTlt(item)
    refs.list.insertAdjacentHTML('beforeend', markup)
}

function updateList(item) {
    refs.list.insertAdjacentHTML('beforeend', `<li class="item js-item">${item.name}</li>`)
}

