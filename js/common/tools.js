/**
 * 获取链接中的参数
 * @param {*} urlStr 
 */
function GetUrlParams(urlStr) {
    if (typeof urlStr == "undefined") {
        var url = decodeURI(location.search); //获取url中"?"符后的字符串
    } else {
        var url = "?" + urlStr.split("?")[1];
    }
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

function GetPageChooseHtml(pageNum, totalPage, fucntionStr) {
    pageNum = pageNum < 1 ? 1 : parseInt(pageNum);
    totalPage = totalPage < 1 ? 1 : parseInt(totalPage);
    pageNum = pageNum > totalPage ? totalPage : pageNum;
    var headPage = 2;
    var beaforPage = 2;
    var afterPage = 2;
    var tailPage = 2;
    var pageStr = "<ul class=\"pagination\">";
    if (1 < pageNum) {
        pageStr += "<li><a onclick=\"" + fucntionStr + "(1)\">首页</a></li>";
    } else {
        pageStr += "<li><a style=\"color:black\">首页</a></li>";
    }
    for (i = 2; i <= headPage && i < pageNum; i++) {
        pageStr += "<li><a onclick=\"" + fucntionStr + "(" + i + ")\">" + i + "</a></li>";
    }
    if (headPage + beaforPage + 1 < pageNum) {
        pageStr += "<li><a style=\"color:black\">...</a></li>";
    }
    beaforStartPage = (pageNum - beaforPage) > headPage ? pageNum - beaforPage : headPage + 1;
    for (i = beaforStartPage; i < pageNum; i ++) {
        pageStr += "<li><a onclick=\"" + fucntionStr + "(" + i + ")\">" + i + "</a></li>";
    }
    if (pageNum != 1 && pageNum != totalPage) {
        pageStr += "<li><a style=\"color:black\">" + pageNum + "</a></li>";
    }
    for (i = pageNum + 1; i <= pageNum + afterPage && i < totalPage; i ++) {
        pageStr += "<li><a onclick=\"" + fucntionStr + "(" + i + ")\">" + i + "</a></li>";
    }
    if (pageNum + afterPage + 1 < totalPage - tailPage) {
        pageStr += "<li><a style=\"color:black\">...</a></li>";
    }
    tailStartPage = (pageNum + afterPage + 1) > (totalPage - tailPage) ? pageNum + afterPage + 1 : totalPage - tailPage;
    for (i = tailStartPage; i < totalPage; i++) {
        pageStr += "<li><a onclick=\"" + fucntionStr + "(" + i + ")\">" + i + "</a></li>";
    }
    if (pageNum < totalPage) {
        pageStr += "<li><a onclick=\"" + fucntionStr + "(" + totalPage + ")\">尾页</a></li>";
    } else {
        pageStr += "<li><a style=\"color:black\">尾页</a></li>";
    }
    pageStr += "</ul>";
    return pageStr;
}