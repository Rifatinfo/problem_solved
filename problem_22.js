// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"

function domainName(url) {

    const hostname = new URL(url).hostname;  
    const parts = hostname.split('.');    
    console.log(parts.find((element) => element === 'google'));   
    
    if (parts[0] === 'www') {
        parts.shift();
    }

    return parts.length > 3 ? parts[parts.length - 3] : parts[0];
   }


const result = domainName('https://google.co.jp');
console.log(result); 

// function domainName(url) {
//     const hostname = new URL(url).hostname;  // Extract the hostname from the URL
//     const parts = hostname.split('.');       // Split the hostname by dots

//     // If the hostname starts with "www.", remove it
//     if (parts[0] === 'www') {
//         parts.shift();
//     }

//     // Handle cases with country-code TLDs
//     if (parts.length >= 3) {
//         return parts[parts.length - 2];
//     } else {
//         return parts[0];
//     }
// }

// const result = domainName('https://google.co.jp');
// console.log(result);  // Expected output: "google"


