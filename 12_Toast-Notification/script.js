
let toastBox = document.querySelector(".toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please fix the error!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(massage){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = massage;
    toastBox.appendChild(toast);

    if(massage.includes('error')){
        toast.classList.add('error');
    }
    if(massage.icludes('invalid')){
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove(),5000;
    })

}