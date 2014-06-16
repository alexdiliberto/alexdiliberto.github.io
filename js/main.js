$(document).ready(function() {
  outdatedBrowser({
    bgColor: '#3f3f3f',
    color: '#e3e3e3',
    lowerThan: 'IE10'
  });
});

$("a.top-link").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
