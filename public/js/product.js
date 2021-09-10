const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
let pid = parseInt(params['pid']);
if(pid){
    let productItem = products.filter((item) => {
        return item.id === pid
    })
    if(productItem.length){
        productItem[0].listProduct.forEach((item) => {
            console.log(item, "------")
            let template = `
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${item.thumbnail}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                    </div>
                </div>
            `
            $("#list-product .row").append(template)
        })
    }else{
        $("#list-product .row").append("<p> Không tìm thấy sản phẩm vui lòng thử lại </p>")
    }
}else{
    for (let index = 0; index < products[0].listProduct.length; index++) {
        const element = products[0].listProduct[index];
        let template = `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${element.thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.name}</h5>
                </div>
            </div>
        `
        $("#list-product .row").append(template)
    }
}
for (let index = 0; index < products.length; index++) {
    const item = products[index];
    let template = `
        <a href="/san-pham?name=${item.nameEng}&pid=${item.id}" title="${item.name}">
            <li>
                ${item.name}
            </li>
        </a>
    `
    $("#list-name-product ul").append(template)
}

