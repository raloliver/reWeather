var $xhrNew = new XMLHttpRequest();
$xhrNew.open('GET', 'https://randomuser.me/api/?results=20', true);
$xhrNew.responseType = 'text';
$xhrNew.send();

$xhrNew.onload = function () {
    if ($xhrNew.status === 200) {
        let externalData = JSON.parse($xhrNew.responseText);
        console.log(externalData);

        let loadingData = "";
        for (i = 0; i < externalData.results.length; i++) {
            let item = i+1;
            loadingData += + item + ": usuário <strong>"+ externalData.results[i].name.first + "</strong> nascido em <strong>" + externalData.results[i].location.city + "</strong> <br>";
        }//end loop
        document.querySelector(".msg").innerHTML = loadingData;
    }//end if
}//end function onload

/**
 * documentação completa: https://developer.mozilla.org/en/docs/Web/API/Document/readyState
 */
/*

var $xhr = new XMLHttpRequest();

//o método open recebe três parâmetros: 'tipo', 'caminho' e a forma (sync, [boolean])
$xhr.open('GET', 'sample.json', true);
$xhr.responseType = 'text';

*/
/*
$xhr.onreadystatechange = function () {
    console.log($xhr.readyState);
    console.log($xhr.status);
    console.log($xhr.statusText);
}// enf function onreadystatechange
*/

/*
$xhr.onload = function () {
    if ($xhr.status === 200) {
        let localData = JSON.parse($xhr.responseText);
        console.table(localData);
    }//end if
}//end function onload

//mais apropriado inserir esse método ao final
$xhr.send();

*/
/*

//dentro de um arquivo JS, o JSON deve estar sempre numa único linha.
var $userData = '{"Israel":{"userName":"raloliver", "userEmail":"eu@ral.ninja", "userSettings":{"userAdmin":true, "userBeta":true}},"Fernando":{"userName":"fernando", "userEmail":"fe@nando.me", "userSettings":{"userAdmin":false, "userBeta":true}}}';
var $userList = JSON.parse($userData);
console.log($userList);

document.querySelector('.msg').innerHTML = $userList.Israel.userEmail;
*/
/*
var $userData = '{"userName":"raloliver", "userEmail":"eu@ral.ninja"}';
var $userObject = JSON.parse($userData);
var $userString = JSON.stringify($userObject);

console.log($userObject);
console.log($userString);
*/