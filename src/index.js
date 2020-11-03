import ListTlt from '../template/listTemplate.hbs'
import fetchCountries from './fetchCountries'
import './notification'
import './styles.css';
import debounce from "lodash.debounce";
import { alert, notice, info, success, error } from '@pnotify/core';


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
    .then(data => {
        if (data.length === 1) {
            updateItem(data[0])
            return
        }
        else if (data.length <= 10) {
            data.forEach(el => updateList(el))
            return
        } 
        else if (data.length >= 11) {
            error('Too many mach found. Pleace enter a more specific query!')
            return
        }
    })
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

