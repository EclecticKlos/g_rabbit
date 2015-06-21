var insertListener = function(event){

  if (event.animationName == "nodeInserted") {
    // Thanks to David Walsh (http://davidwalsh.name/detect-node-insertion) for this animation listener trick

    var makeCharCounterSpan = function() {
      // span.textContent = charCount;
      span.setAttribute('class', 'count');
      span.setAttribute('style', 'color: red');
      span.style.fontSize = "77%";
      $("tr.n1tfz td:nth-child(5) div")[0].appendChild(span)
    }

    var updateCharCounter = function(charCount) {
      $("tr.n1tfz td:nth-child(5) div span:nth-child(3)")[0].innerText = (charCount + "" + charLimit);
    }

    var findSignatureLength = function(){
      if ($(".gmail_signature").text().length !== 0) {
          return signature = ($(".gmail_signature").text().length + signatureExtraChars);
      }
      else if ($(".Ap div:nth-child(2) div:nth-child(1)")[0].hasChildNodes()) {
        firstNodeTier = $(".Ap div:nth-child(2) div:nth-child(1)")[0];
        for (i = 0; i < firstNodeTier.children.length; i++) {
          if ($(".Ap div:nth-child(2) div:nth-child(1)")[0].children[i].children.length > 0) {
            secondNodeTier = $(".Ap div:nth-child(2) div:nth-child(1)")[0].children[i];
            for (j = 0; j < secondNodeTier.children.length; j++) {
              if ($(".Ap div:nth-child(2) div:nth-child(1)")[0].children[i].children[j].children.length > 0) {
                if ($(".Ap div:nth-child(2) div:nth-child(1)")[0].children[i].children[j].children[0].children.length > 0) {
                  console.log($(".Ap div:nth-child(2) div:nth-child(1)")[0].children[i].children[j].innerText)
                  return signature = $(".Ap div:nth-child(2) div:nth-child(1)")[0].children[i].children[j].innerText.length;
                }
                else {
                  signature = 0;
                }
              }
              else {
                signature = 0;
              }
            }
          }
          else {
                signature = 0;
          }
        }
      }
    }

    var keyupListener = function() {
      $('.Am').keyup(function(event) {
        console.log("Keyup detected")
        charactersInCompose = $(".Am").text();
        // debugger;
        // console.log($(".gmail_signature") + " << sig")
        // if ($(".gmail_signature").text().length !== 0) {
        //   signature = ($(".gmail_signature").text().length + signatureExtraChars);
        // } else if ($(".Ap div:nth-child(2) div div:nth-child(4)").text().length !== 0) {
        //   signature = ($(".Ap div:nth-child(2) div div:nth-child(4)").text().length + signatureExtraChars);
        // } else {
        //   signature = 0;
        // }
        debugger;
        charCount = (charactersInCompose.length - findSignatureLength() - signatureExtraChars);
        console.log(charactersInCompose);
        updateCharCounter(charCount);
      })
    }

    var charLimit = "/640"
    var signature = 0;
    var signatureExtraChars = 1;
    var span = document.createElement('span');
    var charactersInCompose = $(".Am").text();
    var charCount = undefined;
    var checkForCharactersInCompose = window.setInterval(function() {
      if (charactersInCompose != undefined || charactersInCompose != '') {
        console.log("Inside the interval");
        console.log(charactersInCompose);
        console.log(charactersInCompose.length);
        window.clearInterval(checkForCharactersInCompose);
      makeCharCounterSpan();
      keyupListener();
      }

    }, 1000);


  }
};

document.addEventListener("webkitAnimationStart", insertListener, false);








// $(".Ap div:nth-child(2) div:nth-child(1)")[0].hasChildNodes()
// = true
// THIS IS ALWAYS TRUE

// $(".Ap div:nth-child(2) div:nth-child(1)")[0].children[0].innerText
// Yields sig

















// var insertListener = function(event){

//   if (event.animationName == "nodeInserted") {
//     // Thanks to David Walsh (http://davidwalsh.name/detect-node-insertion) for this animation listener trick

//     var makeCharCounterSpan = function() {
//       // span.textContent = charCount;
//       span.setAttribute('class', 'count');
//       span.setAttribute('style', 'color: red');
//       span.style.fontSize = "77%";
//       $("tr.n1tfz td:nth-child(5) div")[0].appendChild(span)
//     }

//     var updateCharCounter = function(charCount) {
//       $("tr.n1tfz td:nth-child(5) div span:nth-child(3)")[0].innerText = (charCount + "" + charLimit);
//     }

//     var keyupListener = function() {
//       $('.Am').keyup(function(event) {
//         console.log("Keyup detected")
//         charactersInCompose = $(".Am").text();
//         debugger;
//         console.log($(".gmail_signature") + " << sig")
//         if ($(".gmail_signature").text().length !== 0) {
//           signature = ($(".gmail_signature").text().length + signatureExtraChars);
//         } else if ($(".Ap div:nth-child(2) div div:nth-child(4)").text().length !== 0) {
//           signature = ($(".Ap div:nth-child(2) div div:nth-child(4)").text().length + signatureExtraChars);
//         } else {
//           signature = 0;
//         }

//         charCount = (charactersInCompose.length - signature);
//         console.log(charactersInCompose);
//         updateCharCounter(charCount);
//       })
//     }

//     var charLimit = "/640"
//     var signature = 0;
//     var signatureExtraChars = 4;
//     var span = document.createElement('span');
//     var charactersInCompose = $(".Am").text();
//     var charCount = undefined;
//     var checkForCharactersInCompose = window.setInterval(function() {
//       if (charactersInCompose != undefined || charactersInCompose != '') {
//         console.log("Inside the interval");
//         console.log(charactersInCompose);
//         console.log(charactersInCompose.length);
//         window.clearInterval(checkForCharactersInCompose);
//       makeCharCounterSpan();
//       keyupListener();
//       }

//     }, 1000);


//   }
// };

// document.addEventListener("webkitAnimationStart", insertListener, false);





