// window.addEventListener('scroll', () => {
//     //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
//     console.log(window.scrollX, window.scrollY);
// });
//
//
// $(document).ready(function () {
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();
//         if (scroll <= 700) {
//             $("#d1").css("color", "#FFFFFF");
//         } else {
//             $("#d1").css("color", "#000000");
//         }
//         if (scroll > 700 && scroll < 2300) {
//             $("#d2").css("color", "#FFFFFF");
//
//         } else {
//             $("#d2").css("color", "#000000");
//
//         }
//         if (scroll > 2300 && scroll < 4400) {
//             $("#d2").css("color", "#000000");
//             $("#d3").css("color", "#FFFFFF");
//         } else {
//             $("#d3").css("color", "#000000");
//         }
//         if (scroll > 4400 && scroll < 6300) {
//             $("#d3").css("color", "#000000");
//             $("#d4").css("color", "#FFFFFF");
//         } else {
//             $("#d4").css("color", "#000000");
//         }
//         if (scroll > 6300) {
//             $("#d4").css("color", "#000000");
//             $("#d5").css("color", "#FFFFFF");
//         } else {
//             $("#d5").css("color", "#000000");
//         }
//         if (scroll > 6300) {
//             $("#d5").css("color", "#FFFFFF");
//         }
//     })
// })
//
// $(document).ready(function () {
//     $('#d1').click(function () {
//         var offset = $('#Home').offset();
//         $('html').animate({scrollTop: offset.top}, 400);
//     });
// });
//
// $(document).ready(function () {
//     $('#d2').click(function () {
//         var offset = $('#About').offset();
//         $('html').animate({scrollTop: offset.top}, 400);
//     });
// });
//
// $(document).ready(function () {
//     $('#d3').click(function () {
//         var offset = $('#Skills').offset();
//         $('html').animate({scrollTop: offset.top}, 400);
//     });
// });
//
// $(document).ready(function () {
//     $('#d4').click(function () {
//         var offset = $('#Project').offset();
//         $('html').animate({scrollTop: offset.top}, 400);
//     });
// });
//
// $(document).ready(function () {
//     $('#d5').click(function () {
//         var offset = $('#Contacts').offset();
//         $('html').animate({scrollTop: offset.top}, 400);
//     });
// });
//
// $(document).ready(function () {
//     $('#javacard').hover(function () {
//         if ($('#javacard').hover) {
//             $('#java').css('display', 'inline-block');
//             $("#java").insertAfter('#javacradimg');
//         }
//     }, function () {
//         $('#java').css('display', 'none');
//
//     });
//     $('#htmlcard').hover(function () {
//         if ($('#htmlcard').hover) {
//             $('#html').css('display', 'inline-block');
//             $("#html").insertAfter('#htmlcardimg');
//         }
//     }, function () {
//         $('#html').css('display', 'none');
//
//     });
//
//     $('#csscard').hover(function () {
//         if ($('#csscard').hover) {
//             $('#css1').css('display', 'inline-block');
//             $("#css1").insertAfter('#csscardimg');
//         }
//     }, function () {
//         $('#css1').css('display', 'none');
//
//     });
//
//     $('#jscard').hover(function () {
//         if ($('#jscard').hover) {
//             $('#js').css('display', 'inline-block');
//             $("#js").insertAfter('#jscardimg');
//         }
//     }, function () {
//         $('#js').css('display', 'none');
//
//     });
//
//     $('#springcard').hover(function () {
//         if ($('#springcard').hover) {
//             $('#spring').css('display', 'inline-block');
//             $("#spring").insertAfter('#springcardimg');
//         }
//     }, function () {
//         $('#spring').css('display', 'none');
//
//     });
//     $('#jspcard').hover(function () {
//         if ($('#jspcard').hover) {
//             $('#jsp').css('display', 'inline-block');
//             $("#jsp").insertAfter('#jspcardimg');
//         }
//     }, function () {
//         $('#jsp').css('display', 'none');
//
//     });
//
//     $('#githubcard').hover(function () {
//         if ($('#githubcard').hover) {
//             $('#github').css('display', 'inline-block');
//             $("#github").insertAfter('#githubcardimg');
//         }
//     }, function () {
//         $('#github').css('display', 'none');
//
//     });
//
//     $('#sqlcard').hover(function () {
//         if ($('#sqlcard').hover) {
//             $('#sql').css('display', 'inline-block');
//             $("#sql").insertAfter('#sqlcardimg');
//         }
//     }, function () {
//         $('#sql').css('display', 'none');
//
//     });
//
//
// });
