/* Java Script Utilities for Artecnología */
/* Author: Ángela López Mendoza           */
/* Copyright Artecnología 2023            */
/* AixKare/Artecnología 11/2023           */

var _headerId = null;

function hideMenuIfOpen() {
    var dElement = document.getElementById("buttonMenu");
    if(dElement.getAttribute("aria-expanded") === "true") {
        dElement.click();
    }
}

function isChild(selector1, selector2) {
    var child = $(selector1);

    if (child.parents(selector2).length)
        return true;
    else
        return false;
}

function handleClickOutside(event) {
    if(!(isChild(event.target, "#headerId") === true))   {
        hideMenuIfOpen();
    }
}

$(function() {
    _headerId = $("#headerId");
    $(document).on('click', handleClickOutside);
});
