window.onload = () => {
   let input = document.querySelector('#input');
   input.oninput = function() {
      let value = this.value.trim();
      let list = document.querySelectorAll('.ul li');
      
      

      if (value) {
         list.forEach(el => {
            if (el.innerText.toLowerCase().search(value.toLowerCase()) == -1) {
               el.classList.add('hide');
            };
         });
      } else {
         list.forEach(el => {
            el.classList.remove('hide')
         })
      }
   }
}