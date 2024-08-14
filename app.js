let posts = document.getElementById('posts')
let coments = document.getElementById('coments')
let albums = document.getElementById('albums')
let photos = document.getElementById('photos')
let todos = document.getElementById('todos')
let users = document.getElementById('users')


document.addEventListener("DOMContentLoaded", () => {
  posts.addEventListener("click", () => {
    getPosts()
  })
  coments.addEventListener('click', () => {
    getComents()
  })
  albums.addEventListener('click', () => {
    getAlbums()
  })
  photos.addEventListener('click', () => {
    getPhotos()
  })
  todos.addEventListener('click', () => {
    getTodos()
  })
  users.addEventListener('click', () => {
    getUsers()
  })
})

async function getPosts() {
  let reques = await fetch("https://jsonplaceholder.typicode.com/posts")
  let users = await reques.json()
  displayPosts(users)
}
function displayPosts(users) {
  let result = document.getElementById('result')
  result.innerHTML = `<h2 class="text-4xl">Posts</h2>`
  users.forEach((item, i) => {
    let div = document.createElement('div')
    div.className = "flex gap-2 text-xl"
    div.innerHTML = `
      <span>${i + 1}.</span>
      <div>
        <p>${item.title[0].toUpperCase() + item.title.slice(1)}</p>
        <div>${item.body[0].toUpperCase() + item.body.slice(1)}</div>
      </div>
    `
    result.appendChild(div)
  })
}

async function getComents() {
  let reques = await fetch("https://jsonplaceholder.typicode.com/comments")
  let users = await reques.json()
  displayComments(users)
}
function displayComments(users) {
  let result = document.getElementById('result')
  result.innerHTML = `<h2 class="text-4xl">Comments</h2>`
  users.forEach((item, i) => {
    let div = document.createElement("div")
    div.className = "flex gap-2 text-xl"
    div.innerHTML = `
      <span>${i + 1}.</span>
      <div>
        <div class="">
          <span>${item.name[0].toUpperCase() + item.name.slice(1)}:</span>
          <a>${item.email}</a>
        </div>
        <p>${item.body[0].toUpperCase() + item.body.slice(1)}</p>
      </div>
    `
    result.appendChild(div)
  })
}


async function getAlbums() {
  let reques = await fetch("https://jsonplaceholder.typicode.com/albums")
  let users = await reques.json()
  displayAlbums(users)
}
function displayAlbums(users) {
  let result = document.getElementById('result')
  result.innerHTML = `<h2 class="text-4xl">Albums</h2>`
  users.forEach((item, i) => {
    let div = document.createElement("div")
    div.className = "flex gap-2 text-xl bg-gray-300 py-1 px-3 mb-1"
    div.innerHTML = `
      <span>${i + 1}.</span>
      <span>${item.title[0].toUpperCase() + item.title.slice(1)}</span>
    `
    result.appendChild(div)
  })
}

async function getPhotos() {
  let reques = await fetch("https://jsonplaceholder.typicode.com/photos")
  let users = await reques.json()
  displayPhotos(users)
}
function displayPhotos(users) {
  let result = document.getElementById('result')
  result.innerHTML = `<h2 class="text-4xl pb-2">Photos</h2>`
  users.forEach((item, i) => {
    let div = document.createElement("div")
    div.className = "flex gap-2 text-xl bg-gray-200 mb-0.5 py-1 px-3"
    div.innerHTML = `
      <span>${i + 1}.</span>
      <img src="${item.thumbnailUrl}" width="36" alt="">
      <p>${item.title[0].toUpperCase() + item.title.slice(1)}</p>
    `
    result.appendChild(div)
  })
}

async function getTodos() {
  let reques = await fetch("https://jsonplaceholder.typicode.com/todos")
  let users = await reques.json()
  displayTodos(users)
}
function displayTodos(users) {
  let result = document.getElementById('result')
  result.classList.add("px-[5%]")
  result.innerHTML = `<h2 class="text-4xl pb-2">Photos</h2>`
  users.forEach((item, i) => {
    let div = document.createElement("div")
    div.className = `flex gap-2 text-xl ${item.completed ? "bg-green-300" : "bg-gray-200"} mb-0.5 py-1 px-3`
    div.innerHTML = `
      <span>${i + 1}.</span>
      <p>${item.title[0].toUpperCase() + item.title.slice(1)}</p>
    `
    result.appendChild(div)
  })
}

async function getUsers() {
  let reques = await fetch("https://jsonplaceholder.typicode.com/users")
  let users = await reques.json()
  displayUsers(users)
}
function displayUsers(users) {
  let thead = document.getElementById('result')
  thead.classList.add("px-[5%]")
  thead.innerHTML = `
    <h1 class="text-4xl pb-5">Users</h1>
    <table class="w-full">
      <thead>
        <tr>
          <th class="border">T/H</th>
          <th class="border">Name</th>
          <th class="border">Username</th>
          <th class="border">Email</th>
          <th class="border">Address</th>
          <th class="border">Phone Number</th>
          <th class="border">Website</th>
          <th class="border">Company</th>
        </tr>
      </thead>
      <tbody id="tbody"></tbody>
    </table>
  `
  let result = document.getElementById('tbody')
  users.forEach((item, i) => {
    result.innerHTML += `
      <tr>
        <td class="border text-center">${i + 1}</td>
        <td class="border text-center">${item.name}</td>
        <td class="border text-center">${item.username}</td>
        <td class="border text-center">${item.email}</td>
        <td class="border text-center">${item.address.street}</td>
        <td class="border text-center">${item.phone}</td>
        <td class="border text-center">${item.website}</td>
        <td class="border text-center">${item.company.name}</td>
      </tr>
    `
  })
}