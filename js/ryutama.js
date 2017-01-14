$().ready(function(){
  $("[data-key]").each(function() {
    $(this).addClass(this.dataset.key);
  });

  $.getJSON( "http://charasheet.vampire-blood.net/962930.json?callback=?", function( data ) {
    if (!data) {
      return;
    }

    var $div = $('div.json');
    for (var key in data) {
      $div.append(createDiv(key, data[key]));
    }

    $('.data').each(function(){
      if (data[this.dataset.key]) {
        $(this).text(data[this.dataset.key]);
      }
    });
  })
  .fail(function(){alert('failed');});

});

function createDiv(key, value){
  return '<div class="'+key+'">'+key+' : '+value+'</div>';
}
