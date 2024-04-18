let isLyricShown = false; // Khai báo biến flag
function clock() {
  const months = document.querySelector(".months");
  const days = document.querySelector(".days");
  const hours = document.querySelector(".hours");
  const minutes = document.querySelector(".minutes");
  const seconds = document.querySelector(".seconds");

  const now = new Date();
  const startDate = new Date("2023-10-19");

  const timeDiff = Math.abs(now - startDate);
  const elapsedDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const elapsedMonths = Math.floor(elapsedDays / 30.44);

  months.innerHTML = elapsedMonths;
  days.innerHTML = elapsedDays;

  hours.innerHTML = now.getHours();
  minutes.innerHTML = now.getMinutes();
  seconds.innerHTML = now.getSeconds();

  if (days.innerHTML.length === 1) {
    days.innerHTML = "0" + days.innerHTML;
  }

  if (hours.innerHTML.length === 1) {
    hours.innerHTML = "0" + hours.innerHTML;
  }

  if (minutes.innerHTML.length === 1) {
    minutes.innerHTML = "0" + minutes.innerHTML;
  }

  if (seconds.innerHTML.length === 1) {
    seconds.innerHTML = "0" + seconds.innerHTML;
  }
  let isLyricShown = false; 
  // Hiển thị phần content khi đồng hồ đếm đến tháng thứ 6
  if (elapsedMonths >= 6 && isLyricShown == false) {
 
    showLyricHTML();
    isLyricShown = true; // Đánh dấu rằng hàm đã được gọi
  }
}
const interval = setInterval(clock, 1000);

// Lấy năm hiện tại
const currentYear = new Date().getFullYear();
// Gán năm hiện tại vào phần tử có id là "currentYear"
document.getElementById("currentYear").textContent = currentYear;

// ========================================================= END - ĐỒNG HỒ ĐẾM THỜI GIAN =========================================================//
// Hàm để chạy nhạc
function playMusic() {
    var audio = $("#backgroundMusic")[0];
    audio.play();
    setTimeout(function() {
        audio.pause();
        $("#modalLyrics").modal('hide');
    }, 24000);
}

function showLyrics() {
    lyricsElement.text(lyricsText.substr(0, index + 1));
    index++;
    if (index <= lyricsText.length) {
        setTimeout(function() {
            showLyrics(); // Gọi lại hàm sau mỗi khoảng thời gian
        }, 90); // Thay đổi thời gian ở đây (ví dụ: 200ms)
    }
}

var lyricsElement = $("#lyricsText");
    var lyricsText =
      "My baby I love you so much forever you and I I love you oh I love you so much forever you and I My baby I love you so much forever you and I I love you oh I love you so much forever you and I";
    let index = 0;

function showLyricHTML() {
    $("#modalLyrics").modal();
    playMusic();
    showLyrics();
    isLyricShown = true;
    // Đóng modal sau 5 phút (300,000 miliseconds)
    setTimeout(function() {
        // Áp dụng hiệu ứng mờ dần
        $("#modalLyrics").addClass("fade-out");
        setTimeout(function() {
            $("#modalLyrics").modal("hide");
        }, 500); // Chờ 0.5 giây để kết thúc hiệu ứng
    }, 24000); // 5 phút
     
}

// $(document).ready(function() {
//     showLyricHTML(); 
// });
