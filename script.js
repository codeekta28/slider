console.log('image slider')
let imgs = ['1', '2', '3', '4', '5', '6', '7', '8']
let image = document.querySelector('.image')
let btns = document.querySelectorAll('.btn')
let counter = 0
for (const btn of btns) {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('leftBtn')) {
      console.log('left')
      counter--
      if (counter < 0) {
        counter = imgs.length - 1
      }
      insertImgs(counter)
    } else {
      console.log('right')
      counter++
      if (counter > imgs.length - 1) {
        counter = 0
      }
      insertImgs(counter)
    }
  })
}
function insertImgs (counter) {
  console.log('insertimage function')
  image.src = `imgs/${imgs[counter]}.jfif`
}
