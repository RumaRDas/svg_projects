// const item = document.querySelector('#shape')

// console.log(item.getTotalLength())

//console.log(window.screen)
const circle = document.querySelector('.circle')
const lines = document.querySelector('.lines')
const list = document.querySelector('.list')
// const line1 = document.querySelector('.line-1')
// const line2 = document.querySelector('.line-2')
// const line3 = document.querySelector('.line-3')

const lineAll = document.querySelectorAll('.line')

console.log(circle)
console.log('new day')
lines.addEventListener('click', () => {
  circle.classList.toggle('active')
  list.classList.toggle('active')

  //   line1.classList.toggle('active')
  //   line2.classList.toggle('active')
  //   line3.classList.toggle('active')
  for (const line of lineAll) {
    line.classList.toggle('active')
  }
})
