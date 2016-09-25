$(function() {

var data = {
  clickCount: 0
};

var model = {
  catClick: function() {
    view.render.img.addEventListener('click', function(){
    ++data.clickCount;
    view.render.countDiv.innerHTML = data.clickCount;
    }, false);
  }
};

var view = {
  render: function() {
    // Skilgreina main div-ið og cat click count
    var currentDiv = document.getElementById("main");

    // Dom IMG
    var img = new Image();
    img.src = 'cat.jpg';
    img.id = 'cat';

    // Dom Count DIv
    var countDiv = document.createElement("h3");
    var countText = document.createTextNode(data.clickCount);
    countDiv.appendChild(countText);
    countDiv.className = "count";

    // Appenda í HMTL
    document.body.insertBefore(countDiv, currentDiv);
    document.body.insertBefore(img, currentDiv);

  }
};

view.render();
model.catClick();

}());
