$(document).ready(function () {

  //詳細検索ボックス
  $(".seachDetailBox dt").click(function () {
    $(this).toggleClass("on");
    $(this).next().toggleClass("show");
    $(".menuDetailBox dd").removeClass("show");
  })
  $(".seachDetailBox .btnClose,.seachDetailBox dd").click(function () {
    $(".seachDetailBox dt").removeClass("on");
    $(".seachDetailBox dd").removeClass("show");
  })
  $(".seachDetailBox dd .in").click(function (event) {
      event.stopPropagation();
    });
  //メニュー
  $(".menuDetailBox dt").click(function () {
    $(this).toggleClass("on");
    $(this).next().toggleClass("show");
    $(".seachDetailBox dd").removeClass("show");
  })
  $("body, .menuDetailBox .btnClose,.menuInner").click(function () {
    $(".menuDetailBox dt").removeClass("on");
    $(".menuDetailBox dd").removeClass("show");
  })
  $(".menuDetailBox dt, .menuInner .in").click(function (event) {
      event.stopPropagation();
    });

  //SPトジル
  $(".menuDetailBox .title .btnCloseSp").click(function () {
    $(".menuInner").removeClass("show");
  })


  $(".btnCollection").click(function () {
    $(".l-menu").addClass("show");
    $(".l-menuBg").fadeIn("fast");
  })
  $(".l-menuBg").click(function () {
    $(".l-menu").removeClass("show");
    $(this).fadeOut("fast");
    $
  })

  //お知らせを消す
  $(".u-close").click(function () {
    $(".u-notice,.u-noticeSpace").hide();
  })
  $(".u-noticeSpace").height($(".u-notice").height()+20);

  //画面切り替え
  $(".sceneChange").click(function () {
    var sceneName = $(this).attr("href");
    $(".l-sceneBlock").removeClass("show");
    $(sceneName).addClass("show");
    return false;
  })

  //selectで表示切り替え
  $(".dispSwitch").change(function () {
    var sceneName = $(this).val();
    $(".l-sceneBlock").removeClass("show");
    $(sceneName).addClass("show");

    $.ajax({
      url: '/folder/changeselect',
      type: 'POST',
      data: {
        selected: sceneName
      }
    }).done(function () {
    }).fail(function () {
      //
    });
    return false;
  });

  //タイトル横の操作ボタン
  $(".u-ttlBlock .sosa button").click(function () {
    $(this).next().toggleClass("show");
    return false;
  });
  $(".choise .btnClose").click(function () {
    $(".choise").removeClass("show");
    return false;
  });
  if ($(window).width() < 767) {
    $(".choise").click(function () {
      $(".choise").removeClass("show");
    })
    $('.choise .in').click(function (event) {
      event.stopPropagation();
    });
  }


  //モーダル
  $(".js-showModal").click(function () {
    $(".choise").removeClass("show");
    var modalName = $(this).attr("href");
    $(".u-modals").addClass("show");
    $(".u-modals .menuBox").removeClass("show");
    $(modalName).addClass("show");

    // コレクションへアセット追加・削除用のIDを保持
    var assetId = $(this).data('assetid');
    $(modalName).find(modalName + 'Confirm').attr("data-assetid", assetId);

    return false;
  })
  $(".u-modals .closeModal, .cancel.btn").click(function () {
    $(".u-modals, .u-modals .menuBox").removeClass("show");
    return false;
  })
  //ダイアログ外をclickでモーダルを非表示
  $("body").click(function(){
    $(".u-modals, .u-modals .menuBox").removeClass("show");
  });
  //イベント伝播を阻止
  $('.u-modals .menuBox').click(function (event) {
    event.stopPropagation();
  });



  //アセット群の「･･･」ボタン
  $(".btnCollectAddRem").click(function () {
    $(this).next().toggleClass("show");
    return false;
  });


  //詳細ページメニュー表示
  $(".u-detailBtns .showModal").click(function () {
    var modalName = $(this).attr("href");
    $(".menus .menuBox,.u-detailBtns .in").removeClass("show");
    $(modalName).addClass("show");
    return false;
  });
  $(".u-menus .closeModal").click(function () {
    $(".u-menus .menuBox").removeClass("show");
    $(".u-detailBtns").removeClass("show");
    return false;
  });

  //ダイアログ外をclickでモーダルを非表示
  $("body").click(function(){
    $(".u-menus .menuBox, .u-detailBtns, .u-detailBtns .in").removeClass("show");
  });

  //SP詳細ページメニュー表示
  $(".showDetailMenu").click(function () {
    $(".u-detailBtns,.u-detailBtns .in").addClass("show");
    return false;
  })
  $(".u-detailBtns,.u-detailBtns .closeDetailMenu").click(function () {
    $(".u-detailBtns").removeClass("show");
    $(".u-detailBtns .menuBox").removeClass("show");
    return false;
  })
  //
  $('.u-detailBtns .in,.u-menus .menuBox').click(function (event) {
    event.stopPropagation();
  });

  //チェックでダウンロード可能に
  $("#dlCheck").change(function () {
    if ($(this).prop('checked')) {
      $(".dlBtn").prop('disabled', false);
    } else {
      $(".dlBtn").prop('disabled', true);
    }
  })

  //チェックでダウンロード可能に
  $("#downloadRange").change(function () {
    if ($(this).prop('checked')) {
      $(".u-controls .download").prop('disabled', false);
      $(".rangeDay").val("")
    } else {
      $(".u-controls .download").prop('disabled', true);
    }
  })

  $(".rangeDay").ready(function () {
    $("#downloadRange").prop('checked', false)
    if ($("#rangeStart").val() || $("#rangeEnd").val()) {
      $(".u-controls .download").prop('disabled', false);
    } else {
      $(".u-controls .download").prop('disabled', true);
    }
  })

  //テキストが空欄かどうかでボタンを活性非活性
  $(".js-txtJdg").on("keyup blur", function () {
    var no = $(this).attr("data-jsno");
    if ($(this).val() != "") {
      $(".js-btnActive.is_no" + no).prop('disabled', false);
    } else {
      $(".js-btnActive.is_no" + no).prop('disabled', true);
    }
  })

  //ADDボタンで入力フィールドを表示
  $(".addBtn").click(function () {
    $(this).addClass("hide");
    $(this).next().addClass("show")
    return false;
  })
  $(".delBtn").click(function () {
    $(".addBtn").removeClass("hide");
    $(".delBox").removeClass("show")
    return false;
  })

  //サイドバー：ADDボタンで入力フィールドを表示
  $(".addBtn2").click(function () {
    $(this).addClass("hide");
    $(this).next().addClass("show");
    return false;
  })
  $(".delBtn2").click(function () {
    $(".addBtn2").removeClass("hide");
    $(".delBox2").removeClass("show");
    return false;
  })

  //TOTOPボタン
  $(".l-totop a").click(function () {
    $(".l-spScrollArea").animate({
      scrollTop: 0
    }, 100, "swing");
    return false;
  })
  $(".l-spScrollArea").scroll(function () {
    var dlSpace = 0;
    if($(this).hasClass("downloads")){
      dlSpace = 200;
    }
    var sclH = $(".u-list", this).height() - $(window).height() + 240 +dlSpace;
    if ($(this).scrollTop() > 0) {
      $(".l-totop").addClass("show");
    } else {
      $(".l-totop").removeClass("show");
    }
    if ($(this).scrollTop() > sclH) {
      $(".l-totop").addClass("bottom");
    } else {
      $(".l-totop").removeClass("bottom");
    }
    
    if($(this).hasClass("downloads")){
      var contorolH = $(".u-controls").height() + $(".u-ttlBlock").height() + 20;
      if ($(this).scrollTop() > contorolH) {
      $(".thd").addClass("fixed");
        $(".tbd").addClass("fixed");
    }else{
      $(".thd").removeClass("fixed");
        $(".tbd").removeClass("fixed");
    }
    }

  })

  //条件検索
  $('[name=bookTitle]').change(function () {

    // 選択されているvalue属性値を取り出す
    var val = $('[name=bookTitle]').val();

    if (val === "") {
      $('input[class=num]').prop('disabled', true);
    } else {
      $('input[class=num]').prop('disabled', false);
    }
  });
}); //DocRdyFncEnd
