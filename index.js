let chekd = 1;
function togglePopular() {
    var checkBox = document.getElementById("showhide");
    var object = document.getElementById("featured-builds");

    if (chekd === 1) {
        chekd = 0;
        object.style.display = 'none';
        checkBox.innerHTML = 'Show';
    }
    else{
        chekd = 1;
        object.style.display = 'grid';
        checkBox.innerHTML = 'Hide';
    }
  } 