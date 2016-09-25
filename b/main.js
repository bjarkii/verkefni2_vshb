$(function() {

  var data = {
        "catInfo": {
            name: ['Jón','Bósi','Tinna','Grettir'],
            pic: ['cat1.jpg','cat2.jpg','cat3.jpg','cat4.jpg'],
            count: [0,0,0,0]
        }
  };

  var model = {

    clearScreen: function() {
      $("ul").hide();
      $("li").hide();
      $("img").hide();
      $("p").hide();
      $("h3").hide();
    },

    catClick: function() {

      var catElement = document.getElementsByClassName('cat-list-item');

      var displayCat = function() {
          var idNumber = event.target.id;
          console.log(idNumber);
          model.clearScreen();
          data.catInfo.count[idNumber]++;
          viewWindow.displayCatScreen(idNumber);
      };

      for (var i = 0; i < catElement.length; i++) {
          catElement[i].addEventListener('click', displayCat, false);
      }
    },

    backButton: function() {

      var backButtonClass = document.getElementsByClassName('back-button');

      var goBack = function() {
          model.clearScreen();
          viewList.renderList();
      };

      for (var i = 0; i < backButtonClass.length; i++) {
          backButtonClass[i].addEventListener('click', goBack, false);
      }

    }

  }

  var viewList = {

    // Býr til html lista
    renderList: function(){

      var catListWrap = '<ul id="cat-list-wrap">';

      for (var i = 0; i < data.catInfo.name.length; i++) {
        catListWrap += '<li>';
        catListWrap += '<div>';
        catListWrap +=  '<p class="cat-list-item" id="';
        catListWrap +=   [i];
        catListWrap +=  '">';
        catListWrap +=  data.catInfo.name[i];
        catListWrap +=  '</p>';
        catListWrap += '</div>';
        catListWrap += '</li>';
      }

      catListWrap += '</ul>';

      $('body').append(catListWrap);

      model.catClick();
    } // Render list
  }

  var viewWindow = {

    displayCatScreen: function($id) {
      var currentDiv = document.getElementById("main");

      // Cat name
      var catNameEle = document.createElement("h3");
      var catNameValue = document.createTextNode(data.catInfo.name[$id]);
      catNameEle.appendChild(catNameValue);

      // Cat img
      var img = new Image();
      img.src = 'cat'+ $id + '.jpg';
      img.id = 'cat';

      // Count
      var countDiv = document.createElement("p");
      var countValue = document.createTextNode(data.catInfo.count[$id]);
      countDiv.appendChild(countValue);
      countDiv.className = "count";

      // Back button
      var backButton = document.createElement("p");
      var backButtonValue = document.createTextNode("Back");
      backButton.appendChild(backButtonValue);
      backButton.className = "back-button";

      document.body.insertBefore(catNameEle, currentDiv);
      document.body.insertBefore(countDiv, currentDiv);
      document.body.insertBefore(backButton, currentDiv);
      document.body.insertBefore(img, currentDiv);

      model.backButton();
    }

  }

  // Starta forrit
  viewList.renderList();

  }());
