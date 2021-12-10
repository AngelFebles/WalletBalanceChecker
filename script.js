const walletAdress = "0x008062acA356B5F93F2F14b71Fd73db91A606d0C";

const shi3ldID = "0xf239e69ce434c7fb408b05a0da416b14917d934e";
var shi3ldToUSD = 0;

const kogeID = "0x13748d548D95D78a3c83fe3F32604B4796CFfa23";
var kogeToUSD = 0;

const pearID = "0xc8bcb58caEf1bE972C0B638B1dD8B0748Fdc8A44";
var pearToUSD = 0;

const singID = "0xCB898b0eFb084Df14dd8E018dA37B4d0f06aB26D";
var singToUSD = 0;

const usdID = "0x2791bca1f2de4661ed88a30c99a7a9449aa84174";

let tokenIDArr = [shi3ldID,kogeID,pearID,singID];
let tokenToUSDArr = [shi3ldToUSD,kogeToUSD,pearToUSD,singToUSD];

//var conversionx;

function readApi0 (token,conversion){
    fetch("https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=" + token +
    "&address=0x008062acA356B5F93F2F14b71Fd73db91A606d0C&tag=latest&apikey=YCN2DVKZYN88CBVX4AHAKGAA197NH4ZHNP", {
        "method": "GET"})

    .then(Response => Response.json())
    .then((data) => getFromWallet(data,conversion,token))

    function getFromWallet (data,conversion,token){

        conversion = data.result;
        getvalueToUSD(conversion,token)
       }
       
       function getvalueToUSD(conversion,token){
        fetch("https://api.1inch.exchange/v4.0/137/quote?fromTokenAddress="+token+
        "&toTokenAddress=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&amount="+conversion, {
            "method": "GET"})
            .then(Response => Response.json())
           .then((data) => valueToUSD(data,conversion))
       }
       
       function valueToUSD(data,conversion){
        conversion = data.toTokenAmount;
        document.querySelector(".shi3ld").innerText = "Shi3ld: " + conversion + " USD";
       shi3ldToUSD = conversion;
       }
}

function readApi1 (token,conversion){
    fetch("https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=" + token +
    "&address=0x008062acA356B5F93F2F14b71Fd73db91A606d0C&tag=latest&apikey=YCN2DVKZYN88CBVX4AHAKGAA197NH4ZHNP", {
        "method": "GET"})

    .then(Response => Response.json())
    .then((data) => getFromWallet(data,conversion,token))

    function getFromWallet (data,conversion,token){

        conversion = data.result;
        getvalueToUSD(conversion,token)
       }
       
       function getvalueToUSD(conversion,token){
        fetch("https://api.1inch.exchange/v4.0/137/quote?fromTokenAddress="+token+
        "&toTokenAddress=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&amount="+conversion, {
            "method": "GET"})
            .then(Response => Response.json())
           .then((data) => valueToUSD(data,conversion))
       }
       
       function valueToUSD(data,conversion){
        conversion = data.toTokenAmount;
        document.querySelector(".koge").innerText = "Koge: " + conversion + " USD";
       }
}

function readApi2 (token,conversion){
    fetch("https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=" + token +
    "&address=0x008062acA356B5F93F2F14b71Fd73db91A606d0C&tag=latest&apikey=YCN2DVKZYN88CBVX4AHAKGAA197NH4ZHNP", {
        "method": "GET"})

    .then(Response => Response.json())
    .then((data) => getFromWallet(data,conversion,token))

    function getFromWallet (data,conversion,token){

        conversion = data.result;
        getvalueToUSD(conversion,token)
       }
       
       function getvalueToUSD(conversion,token){
        fetch("https://api.1inch.exchange/v4.0/137/quote?fromTokenAddress="+token+
        "&toTokenAddress=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&amount="+conversion, {
            "method": "GET"})
            .then(Response => Response.json())
           .then((data) => valueToUSD(data,conversion))
       }
       
       function valueToUSD(data,conversion){
        conversion = data.toTokenAmount;
        document.querySelector(".pear").innerText = "Pear: " + conversion + " USD";
       }
}

function readApi3 (token,conversion){
    fetch("https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=" + token +
    "&address=0x008062acA356B5F93F2F14b71Fd73db91A606d0C&tag=latest&apikey=YCN2DVKZYN88CBVX4AHAKGAA197NH4ZHNP", {
        "method": "GET"})

    .then(Response => Response.json())
    .then((data) => getFromWallet(data,conversion,token))

    function getFromWallet (data,conversion,token){

        conversion = data.result;
        getvalueToUSD(conversion,token)
       }
       
       function getvalueToUSD(conversion,token){
        fetch("https://api.1inch.exchange/v4.0/137/quote?fromTokenAddress="+token+
        "&toTokenAddress=0x2791bca1f2de4661ed88a30c99a7a9449aa84174&amount="+conversion, {
            "method": "GET"})
            .then(Response => Response.json())
           .then((data) => valueToUSD(data,conversion))
       }
       
       function valueToUSD(data,conversion){
        conversion = data.toTokenAmount;
        document.querySelector(".sing").innerText = "Sing: " + conversion + " USD";
       shi3ldToUSD = conversion;
       }
}


readApi0(shi3ldID,shi3ldToUSD);
readApi1(kogeID,kogeToUSD);
readApi2(pearID,pearToUSD);
readApi3(singID,singToUSD);

