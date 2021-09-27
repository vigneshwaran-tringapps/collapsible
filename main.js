const collapsibleItemTitle = document.querySelectorAll(".collapsible-item-title");

collapsibleItemTitle.forEach(collapsibleItemTitle => {
    collapsibleItemTitle.addEventListener("click", event => {
    
   
    collapsibleItemTitle.classList.toggle("active");
    const collapsibleItemDetail = collapsibleItemTitle.nextElementSibling;
    if(collapsibleItemTitle.classList.contains("active")) {
        collapsibleItemDetail.style.maxHeight = collapsibleItemDetail.scrollHeight + "px";
    }
    else {
        collapsibleItemDetail.style.maxHeight = 0;
    }
    
  });
});