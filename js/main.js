


/*  
===============================================
===============================================
*/

/* start port 1 */


const   filterContainer = document.querySelector(".port-1 .filter"),
        filterBtns = filterContainer.children,
        totalFilterBtn = filterBtns.length,
        portfolioItems = document.querySelectorAll(".port-1 .items .item"),
        totalPortfolioItem = portfolioItems.length;

for (let i = 0; i < totalFilterBtn; i++ ) {
    filterBtns[i].addEventListener("click", function() {

        filterContainer.querySelector(".active").classList.remove("active");

        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");

        for (let k = 0; k < totalPortfolioItem; k++) {

            if (filterValue === portfolioItems[k].getAttribute("data-category")) {

                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            } else {

                portfolioItems[k].classList.remove("show");
                portfolioItems[k].classList.add("hide");
            }

            if (filterValue === "all") {

                portfolioItems[k].classList.remove("hide");
                portfolioItems[k].classList.add("show");
            }
        }

    })

}


const lightbox = document.querySelector(".port-1 .lightbox"),
        lightboxImg = lightbox.querySelector(".lightbox-img"),
        lightboxClose = lightbox.querySelector(".lightbox-close"),
        lightboxCloseI = lightbox.querySelector(".lightbox-close i"),
        lightboxText = lightbox.querySelector(".caption-text"),
        lightboxCounter = lightbox.querySelector(".caption-counter");

let itemIndex = 0;

for(let i = 0; i < totalPortfolioItem; i++) {
    portfolioItems[i].addEventListener("click", function() {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    })
}

function nextItem () {
    if (itemIndex === totalPortfolioItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }
    changeItem();
}

function prevItem () {
    if (itemIndex == 0) {
        itemIndex = totalPortfolioItem - 1;
    } else {
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox ( ) {
    lightbox.classList.toggle("open");
}

function changeItem () {
    imgSrc = portfolioItems[itemIndex].querySelector(".img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalPortfolioItem;
}



// close lightbox
lightbox.addEventListener("click", function(event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    } else if (event.target === lightboxCloseI) {
        toggleLightbox();
    }
});


/* end port 1 */

/*  
===============================================
===============================================
*/

/* start port 2 */

let switcherLis = document.querySelectorAll(".port-2 .filters .item");
let imgs = Array.from(document.querySelectorAll(".port-2 .cards .card"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});

// remove active calss from all lis an add to current 
function removeActive() {
    switcherLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

// manage imgs 
function manageImgs() {
    imgs.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block";
    });
}

let linkWork = document.querySelectorAll(".port-2 .filters .item");
function activeWork() {
    linkWork.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
}
linkWork.forEach(l => l.addEventListener("click", activeWork));


/* end port 2 */

/*  
===============================================
===============================================
*/

/* start port 3 */




/* end port 3 */

/*  
===============================================
===============================================
*/

/* start port 4 */



/* end port 4 */

/*  
===============================================
===============================================
*/

/* start port 5 */



/* end port 5 */

/*  
===============================================
===============================================
*/

/* start port 6 */



/* end port 6 */

/*  
===============================================
===============================================
*/

/* start port 7 */



/* end port 7 */

/*  
===============================================
===============================================
*/

/* start port 8 */



/* end port 8 */

/*  
===============================================
===============================================
*/

/* start port 9 */



/* end port 9 */

/*  
===============================================
===============================================
*/

/* start port 10 */



/* end port 10 */


/*  
===============================================
===============================================
*/

/* start port 11 */



/* end port 11 */

/*  
===============================================
===============================================
*/

/* start port 12 */



/* end port 12 * /

/*  
===============================================
===============================================
*/

/* start port 13 */



/* end port 13 */

/*  
===============================================
===============================================
*/

/* start port 14 */



/* end port 14 */

/*  
===============================================
===============================================
*/

/* start port 15 */



/* end port 15 */

/*  
===============================================
===============================================
*/

