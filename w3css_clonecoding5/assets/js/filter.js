const imgWrapper = document.querySelector('.img-wrapper');
const imageItem = document.querySelectorAll('.img-wrapper > div');
const filterBtn = document.querySelectorAll('.filter-wrapper > span');

filterBtn.forEach((v) => {
  v.addEventListener('click', e => {
    imageItem.forEach((v4) => {
      v4.style.display = 'block';
    })
    const filterArr = Array.from(imageItem).filter((v2) => v2.dataset.filter !== e.currentTarget.textContent);
    filterArr.forEach((v3) => v3.style.display = 'none');
    filterBtn.forEach((v1) => {
      v1.classList.remove('checked');
    })
    e.currentTarget.classList.add('checked');
    e.currentTarget.textContent === 'All' ? imageItem.forEach((v5) => v5.style.display = 'block') : false;
    })
  })

console.log(imageItem);
