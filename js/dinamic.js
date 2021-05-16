// Fixed Menu
var fixed = $(".fixed-menu");
$(".fixed-menu i").click(function() {
    $(this).toggleClass("fa-times fa-bars");
    fixed.toggleClass("is-visible");
    if (fixed.hasClass("is-visible")) {
        fixed.animate({ left: '0' }, 500);
    } else {
        fixed.animate({ left: '-' + fixed.innerWidth() }, 500);
    }
});

/* Admin pgae Links */

$(".fixed-menu a").click(function() {
    $(this).addClass("active").siblings().removeClass("active");
})


/*##################### Dinamic Form #####################*/
function addArrow() {
    var columnLength = $(".box tr:first td").length;
    console.log(columnLength)
    $(".box").append(`<tr></tr>)`);
    for (let i = 0; i < columnLength; i++) {
        $(".box tr:last").append(`<td><input class="form-control" type="text"></td>`)
    }
}

function addCol() {
    $(".box tr").append(`<td><input class="form-control" type="text"></td>`)
}

function deleteRow() {
    $(".box tr:last").remove();
}

function deleteCol() {

    var rowLength = $(".box tr").length;
    console.log(rowLength)
    for (let i = 0; i < rowLength; i++) {

        $(".box tr").eq(i).find("td:last").remove();

    }
}