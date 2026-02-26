if(function(t){t('[data-toggle="tooltip"]').tooltip(),t('[data-toggle="popover"]').popover()}(jQuery),$('a[data-toggle="tab"]').on("shown.bs.tab",function(t){$(this).parents(".nav-tabs").find(".active").removeClass("active"),$(this).parents(".nav-pills").find(".active").removeClass("active"),$(this).addClass("active").parent().addClass("active")}),$("html.simple-sticky-header-enabled").get(0)){var $window=$(window),distance=void 0!==$("html").data("sticky-header-distance")?$("html").data("sticky-header-distance"):100;$window.on("scroll",function(){$window.scrollTop()>distance?$("html").addClass("simple-sticky-header-active"):$("html").removeClass("simple-sticky-header-active")})}(function(t){"use strict";t.isFunction(t.fn.bootstrapDP)&&t(function(){t("[data-plugin-datepicker]").each(function(){var a=t(this),i={},e=a.data("plugin-options");e&&(i=e),a.infoPluginDatePicker(i)})})}).apply(this,[jQuery]),function(t){"use strict";t.isFunction(t.fn.mask)&&t(function(){t("[data-plugin-masked-input]").each(function(){var a=t(this),i={},e=a.data("plugin-options");e&&(i=e),a.infoPluginMaskedInput(i)})})}.apply(this,[jQuery]);

/* Date publication inputs (aff/cach) */
"Visible"==$("#status").val()?$("#pub_date").css("display","block"):$("#pub_date").css("display","none"),$("#status").change(function(){"Visible"==$("#status").val()?$("#pub_date").css("display","block"):($("#pub_date").css("display","none"),$("#pub_from").val(""),$("#pub_to").val(""))});
	
/* Navigation (active inactive) URLs */
$(function() {
    var a = location.pathname,
        s = a.substring(a.lastIndexOf("/") + 1);
    switch ($(".nav-pills li a").each(function() {
            var a = $(this); - 1 !== a.attr("href").indexOf(s) && a.addClass("active")
        }), s) {
        case "Tous-contact.html":
            $(".nav-contact").addClass("active");
            break;
        case "Tous-avis-client.html":
            $(".nav-avis").addClass("active");
            break;
        case "Details-de-contact.html":
            $(".nav-contact").addClass("active");
        break;
        case "Ajouter-actualite.html":
            $(".nav-actualite").addClass("active");
        break;
        case "Tous-actualites.html":
            $(".nav-actualite").addClass("active");
        break;
        case "Tous-actualites.html":
            $(".nav-actualite").addClass("active");
        break;
        case "Modifier-actualite.html":
            $(".nav-actualite").addClass("active");
        break;
        case "Ajouter-actualite-cat.html":
            $(".nav-actualite-cat").addClass("active");
        break;
        case "Tous-actualites-cat.html":
            $(".nav-actualite-cat").addClass("active");
        break;
        case "Modifier-actualite-cat.html":
            $(".nav-actualite-cat").addClass("active");
        break;
        case "Tous-partenariat.html":
            $(".nav-partenariat").addClass("active");
        break;
        case "ajouter-chatbot.html":
          $(".nav-chabot").addClass("active");
        break;
        case "tous-chatbot.html":
          $(".nav-chabot").addClass("active");
        break;
        case "modifier-chatbot.html":
          $(".nav-chabot").addClass("active");
        break;
        case "ajouter-chatbot-ext.html":
          $(".nav-chabot").addClass("active");
        break;
        case "tous-chatbot-ext.html":
          $(".nav-chabot").addClass("active");
        break;
        case "Pages.html":
          $(".nav-pages").addClass("active");
        break;
    }
    $(".print-btn").click(function() {
        window.print()
    })
});
/* popover */
$('[data-toggle="popover"]').popover(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&$('[data-toggle="popover"]').popover("disable"),$('[data-toggle="popover_i"]').popover();

/* Actualite changement statut (brouillon) */
$("body").on("click",".brouillon_btn",function(){var t=this,a=$(this).data("id");1==confirm("Confirmation de la changement du statut de l'avi N° : "+a+" à invisible")&&$.ajax({url:"../Actions/Con-Act/Status-avis.html",type:"POST",data:{id:a,status:"Invisible"},success:function(e){1==e?($(t).removeClass("brouillon_btn")&&$(t).addClass("publier_btn"),$(t).attr("data-content","<b>Changement du statut<br> de l'avi N° :</b> "+a+" <b>à invisible</b>"),$(t).html('<i class="fas fa-eye"></i>'),$(".alert-body").html('<div class="alert alert-success" role="alert">Vous avez changé le statut de l\'avi N° : <b>'+a+'</b> en <b>invisible</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')):$(".alert-body").html('<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')}})});
	

/* avi changement statut (publier) */
$("body").on("click",".publier_btn",function(){var t=this,a=$(this).data("id");1==confirm("Confirmation de la changement du statut de l'avi N° : "+a+" à visible")&&$.ajax({url:"../Actions/Con-Act/Status-avis.html",type:"POST",data:{id:a,status:"visible"},success:function(e){1==e?($(t).removeClass("publier_btn")&&$(t).addClass("brouillon_btn"),$(t).attr("data-content","<b>Changement du statut<br> de l'avi N° :</b> "+a+" <b>à visible</b>"),$(t).html('<i class="fas fa-eye-slash"></i>'),$(".alert-body").html('<div class="alert alert-success" role="alert">Vous avez changé le statut de Avi N° : <b>'+a+'</b> en <b>visible</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')):$(".alert-body").html('<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')}})});	

/* avi suppression */
$(".delete_btn").click(function(){var t=this,e=$(this).data("id");1==confirm("Confirmation de la suppression de l'avi N°: "+e)&&$.ajax({url:"../Actions/Con-Act/Supprimer-avis.html",type:"POST",data:{id:e},success:function(a){1==a?($(t).closest("tr").css("background","tomato"),$(t).closest("tr").fadeOut(800,function(){$(this).remove()&&$(".alert-body").html('<div class="alert alert-danger" role="alert">L\'avi N°: <b>'+e+'</b> a été <b>supprimé</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')})):$(".alert-body").html('<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')}})});

/* sidebar show */
$(".toggle-sidebar-left").click(function(){$(".sidebar-left").toggleClass("show-sidebar")});


$(document).ready(function () {
    $("#summernote").summernote({ height: 600 });
  
    if ($("#DESCRIPTION").length) {
      updateCountdown();
      $(".desc").change(updateCountdown);
      $(".desc").keyup(updateCountdown);
    }
});
  
function updateCountdown() {
  var remaining = 160 - $(".desc").val().length;
  $(".countdown").text(remaining + " caractères restants");
}

/* actualite changement statut (brouillon) */
$("body").on("click", ".brouillon_btn_act", function () {
    var t = this,
      a = $(this).data("id");
    1 ==
      confirm(
        "Confirmation de la changement du statut de l'actualité N° : " +
          a +
          " à brouillon"
      ) &&
      $.ajax({
        url: "../Actions/Con-Act/Status-actualite.html",
        type: "POST",
        data: { id: a, status: "Brouillon" },
        success: function (e) {
          1 == e
            ? ($(t).removeClass("brouillon_btn_act") &&
                $(t).addClass("publier_btn_act"),
              $(t).attr(
                "data-content",
                "<b>Changement du statut<br> de l'actualité N° :</b> " +
                  a +
                  " <b>à brouillon</b>"
              ),
              $(t).html('<i class="fa fa-check-circle"></i>'),
              $(".alert-body").html(
                '<div class="alert alert-success" role="alert">Vous avez changé le statut de l\'actualité N° : <b>' +
                  a +
                  '</b> en <b>brouillon</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              ),
              $(t).siblings(".show_actualite").empty())
            : $(".alert-body").html(
                '<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              );
        },
      });
});

/* actualite suppression */
$(".delete_btn_act").click(function () {
    var t = this,
      e = $(this).data("id");
    1 == confirm("Confirmation de la suppression de l'actualité N°: " + e) &&
      $.ajax({
        url: "../Actions/Con-Act/Supprimer-actualite.html",
        type: "POST",
        data: { id: e },
        success: function (a) {
          1 == a
            ? ($(t).closest("tr").css("background", "tomato"),
              $(t)
                .closest("tr")
                .fadeOut(800, function () {
                  $(this).remove() &&
                    $(".alert-body").html(
                      '<div class="alert alert-danger" role="alert">L\'actualité N°: <b>' +
                        e +
                        '</b> a été <b>supprimé</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
                    );
                }))
            : $(".alert-body").html(
                '<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              );
        },
      });
});

/* actualite changement statut (publier) */
$("body").on("click", ".publier_btn_act", function () {
    var t = this,
      a = $(this).data("id");
    1 ==
      confirm(
        "Confirmation de la changement du statut de l'actualité N° : " +
          a +
          " à publier"
      ) &&
      $.ajax({
        url: "../Actions/Con-Act/Status-actualite.html",
        type: "POST",
        data: { id: a, status: "Publier" },
        success: function (e) {
          1 == e
            ? ($(t).removeClass("publier_btn_act") &&
                $(t).addClass("brouillon_btn_act"),
              $(t).attr(
                "data-content",
                "<b>Changement du statut<br> de l'actualité N° :</b> " +
                  a +
                  " <b>à publier</b>"
              ),
              $(t).html('<i class="fa fa-times-circle"></i>'),
              $(".alert-body").html(
                '<div class="alert alert-success" role="alert">Vous avez changé le statut de l\'actualité N° : <b>' +
                  a +
                  '</b> en <b>publier</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              ),
              $(t)
                .siblings(".show_actualite")
                .html(
                  '<a class="c-4" href="../actualite-details.html?id=' +
                    a +
                    '" target="_blank" data-html="true" data-trigger="hover" data-toggle="popover" data-content="<b>Affichage de l\'Actualité N°</b> : 2" data-placement="bottom" data-original-title="" title=""><i class="fa fa-eye" aria-hidden="true"></i></a>'
                ))
            : $(".alert-body").html(
                '<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              );
        },
      });
});

/* actualite changement statut (brouillon) */
$("body").on("click", ".deactive_cat_btn", function () {
    var t = this,
      a = $(this).data("id");
    1 ==
      confirm(
        "Confirmation de la changement d'état de catégorie d'actualité N° : " +
          a +
          " à inactif"
      ) &&
      $.ajax({
        url: "../Actions/Con-Act/Etat-actualite-cat.html",
        type: "POST",
        data: { id: a, etat: "O" },
        success: function (e) {
          1 == e
            ? ($(t).removeClass("deactive_cat_btn") &&
                $(t).addClass("active_cat_btn"),
              $(t).attr(
                "data-content",
                "<b>Changement d'état<br> de catégorie d'actualité N° :</b> " +
                  a +
                  " <b>à inactif</b>"
              ),
              $(t).html('<i class="fa fa-check-circle"></i>'),
              $(".alert-body").html(
                '<div class="alert alert-success" role="alert">Vous avez changé l\'état de catégorie d\'actualité N° : <b>' +
                  a +
                  '</b> en <b>inactif</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              ))
            : $(".alert-body").html(
                '<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              );
        },
      });
  });
  
  /* actualite changement statut (publier) */
  $("body").on("click", ".active_cat_btn", function () {
    var t = this,
      a = $(this).data("id");
    1 ==
      confirm(
        "Confirmation de la changement d'état de catégorie d'actualité N° : " +
          a +
          " à actif"
      ) &&
      $.ajax({
        url: "../Actions/Con-Act/Etat-actualite-cat.html",
        type: "POST",
        data: { id: a, etat: "N" },
        success: function (e) {
          1 == e
            ? ($(t).removeClass("active_cat_btn") &&
                $(t).addClass("deactive_cat_btn"),
              $(t).attr(
                "data-content",
                "<b>Changement d'état<br> de catégorie d'actualité N° :</b> " +
                  a +
                  " <b>à actif</b>"
              ),
              $(t).html('<i class="fa fa-times-circle"></i>'),
              $(".alert-body").html(
                '<div class="alert alert-success" role="alert">Vous avez changé l\'état de catégorie d\'actualité N° : <b>' +
                  a +
                  '</b> en <b>actif</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              ))
            : $(".alert-body").html(
                '<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              );
        },
      });
  });
  
  /* actualite suppression */
  $(".delete_cat_btn").click(function () {
    var t = this,
      e = $(this).data("id");
    1 ==
      confirm(
        "Confirmation de la suppression de catégorie d'actualité N°: " + e
      ) &&
      $.ajax({
        url: "../Actions/Con-Act/Supprimer-actualite-cat.html",
        type: "POST",
        data: { id: e },
        success: function (a) {
          1 == a
            ? ($(t).closest("tr").css("background", "tomato"),
              $(t)
                .closest("tr")
                .fadeOut(800, function () {
                  $(this).remove() &&
                    $(".alert-body").html(
                      '<div class="alert alert-danger" role="alert">Catégorie de l\'actualité N°: <b>' +
                        e +
                        '</b> a été <b>supprimé</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
                    );
                }))
            : $(".alert-body").html(
                '<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
              );
        },
      });
  });

/* chatbot suppression */
$(".delete_btn_cb").click(function(){var t=this,e=$(this).data("id");1==confirm("Confirmation de la suppression de la conversation N°: "+e)&&$.ajax({url:"../Actions/Con-Act/supprimer-chatbot.html",type:"POST",data:{id:e},success:function(a){1==a?($(t).closest("tr").css("background","tomato"),$(t).closest("tr").fadeOut(800,function(){$(this).remove()&&$(".alert-body").html('<div class="alert alert-danger" role="alert">La conversation N°: <b>'+e+'</b> a été <b>supprimé</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')})):$(".alert-body").html('<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')}})});

/* FAQ suppression */
$(".delete_btn_faq").click(function () {
  var t = this,
    e = $(this).data("id");
  1 == confirm("Confirmation de la suppression de FAQ N°: " + e) &&
    $.ajax({
      url: "../Actions/Con-Act/d-faq.html",
      type: "POST",
      data: { id: e },
      success: function (a) {
        1 == a
          ? ($(t).closest("tr").css("background", "tomato"),
            $(t)
              .closest("tr")
              .fadeOut(800, function () {
                $(this).remove() &&
                  $(".alert-body").html(
                    '<div class="alert alert-danger" role="alert">FAQ N°: <b>' +
                      e +
                      '</b> a été <b>supprimé</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
                  );
              }))
          : $(".alert-body").html(
              '<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
            );
      },
    });
});

/* chatbot suppression ext */
$(".delete_btn_cb_ext").click(function(){var t=this,e=$(this).data("id");1==confirm("Confirmation de la suppression de la réponse supplémentaire N°: "+e)&&$.ajax({url:"../Actions/Con-Act/supprimer-chatbot-ext.html",type:"POST",data:{id:e},success:function(a){1==a?($(t).closest("tr").css("background","tomato"),$(t).closest("tr").fadeOut(800,function(){$(this).remove()&&$(".alert-body").html('<div class="alert alert-danger" role="alert">La réponse supplémentaire N°: <b>'+e+'</b> a été <b>supprimé</b>.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')})):$(".alert-body").html('<div class="alert alert-danger" role="alert">Une erreur s\'est produite, veuillez contacter le service informatique.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')}})});
