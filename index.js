const userID = "testuser";
const password = "mypassword";

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputID = document.querySelector('#id').value;
    const inputPass = document.querySelector('#pass').value;
    
    if((inputID.includes(' ')) || (inputPass.includes(' '))){
        document.querySelector('p').innerText = 'One or both of the text boxes contains spaces';
    }else{
        document.querySelector('p').innerText = '';

        if(inputID === ""){
            document.querySelector('#id').style.backgroundColor = '#f0e78b';
        }else{
            document.querySelector('#id').style.backgroundColor = '#fff';
            if(inputID !== userID){
                document.querySelector('#id').style.backgroundColor = '#f66';
            }else{
                document.querySelector('#id').style.backgroundColor = '#fff';
            }
        }
        if(inputPass === ""){
            document.querySelector('#pass').style.backgroundColor = '#f0e78b';
        }else{
            document.querySelector('#pass').style.backgroundColor = '#fff';
            if(inputPass !== password){
                document.querySelector('#pass').style.backgroundColor = '#f66';
            }else{
                document.querySelector('#pass').style.backgroundColor = '#fff';
            }
        }
    }
});

document.querySelector('#cancel').addEventListener('click', (e) => {
    document.querySelector('#id').value = '';
    document.querySelector('#id').style.backgroundColor = '#fff';

    document.querySelector('#pass').value = '';
    document.querySelector('#pass').style.backgroundColor = '#fff';

    document.querySelector('p').innerText = '';
});