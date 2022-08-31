function handleSideBar(){
    let main = document.getElementById('main');
    let menu = document.getElementById('menu-open');
    let imgBurguerOpened = document.getElementById('burguer-open');
    let imgBurguerClosed = document.getElementById('burguer-close');
    if(menu.style.display == 'none' || menu.style.display == ''){
        menu.style.display = 'unset';
        main.style.display = 'none';
        imgBurguerOpened.style.display = 'none';
        imgBurguerClosed.style.display = 'inline-block';
        menu.style.animationName = 'sidebar-open';
    }else {
        menu.style.animationName = 'sidebar-close';
        setTimeout(() => {
            menu.style.display = 'none';
            main.style.display = 'block';
        }, (1000))
        imgBurguerOpened.style.display = 'inline-block'
        imgBurguerClosed.style.display = 'none';
    }
}