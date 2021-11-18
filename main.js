const collapsibleItemTitle = document.querySelectorAll(".collapsible-item-title");

collapsibleItemTitle.forEach(itemTitle => {
    itemTitle.addEventListener("click", event => {
    
   
    itemTitle.classList.toggle("active");
    const collapsibleItemDetail = itemTitle.nextElementSibling;
    if(itemTitle.classList.contains("active")) {
        collapsibleItemDetail.style.maxHeight = collapsibleItemDetail.scrollHeight + "px";
    }
    else {
        collapsibleItemDetail.style.maxHeight = 0;
    }
    
  });
});