

// 첫 번째 부분 : 호텔 객체를 생성하고 할인 행사에 대한 상세 정보를 출력한다.

// 축약형 표기법을 이용하여 호텔 객체를 생성한다.
var hotel = {
    name: 'Park',
    roomRate: 240, // 방의 가격
    discount: 15, // 할인율 (%)
    offerPrice: function(){
        var offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate;
    }
}

// 호텔의 이름, 방의 가격, 할인율 등을 출력한다. 
var hotelName, roomRate, specialRate;

hotelName = document.getElementById('hotelName');
roomRate = document.getElementById('roomRate');
specialRate = document.getElementById('specialRate');

hotelName.textContent = hotel.name;
roomRate.textContent = '$' + hotel.roomRate;
specialRate.textContent = '$' + hotel.offerPrice().toFixed(2);

// 두 번째 부분 : 할이 행사 상세 정보를 계산하여 출력한다. 
var expirtMsg;  // 사용자에게 보여 줄 메시지
var today;  // 오늘 날짜
var elEnds; // 메시지를 출력할 요소

function offerExpires(today){
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // 날짜에 7 을 더한다. (7 일에 해당하는 밀리 초를 더한다.)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // 요일과 월 이름을 저장하는 배열을 선언한다.
    dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

    // 페이지에 날짜를 출력하기 위해 날짜의각 부분 값을 가져온다.
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // 메시지를 생성한다.
    expirtMsg = '할인 행사는 ';
    expirtMsg += day + '에 마감됩니다. <br> (' + year + ' 년 ' + month + ' ' + date + ' 일)';
    return expirtMsg;
}

today = new Date(); // 오늘 날짜를 변수에 저장한다.
elEnds = document.getElementById('offerEnds'); // 요소를 찾는다.
elEnds.innerHTML = offerExpires(today); // 행사 마감 메시지를 출력한다.
