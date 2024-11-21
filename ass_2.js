
function sendNotification(email) {
    if (!email.includes('@')){
        return "Invalid Email";
    }
    else {
          const name = email.split('');
          let username = [];
          const domainNameIndex = email.indexOf('@');
          const domainName = email.slice(domainNameIndex + 1);

          for(const item of name){
             if(item === '@'){
                break;
             } else {
                username.push(item);
             } 
          }
          return username.join('') + ' sent you an email from ' + domainName;
    }

}

const result = sendNotification('fahim234.hotmail.com');

