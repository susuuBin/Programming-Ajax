var msg = '<div class=\"header\"><a id=\"close\" href="#"> 닫기 X </a></div>';
msg += '<div class=\"message\"><h2> 정기 점검 중입니다. </h2>';
msg += '오전 3시에서 네 시 사이에는 서버 점검이 있습니다. <br>';
msg += '이 시간 동안에는 서비스 이용이 불가능합니다. </div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote(){
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);