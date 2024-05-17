function initFunction() {
  function outerFunction() {
    function createListItem() {
      let li = document.createElement('li');
      li.textContent = "항목";
      return li;
    }

    function createHeader(callback) {
      let header = document.createElement('header');
      let ul = document.createElement('ul');
      for (let i = 0; i < 5; i++) {
        ul.appendChild(createListItem());
      }
      header.appendChild(ul);
      document.body.appendChild(header);
      console.log("헤더 생성");
      callback(createMain);
    }

    function createMain(callback) {
      let main = document.createElement('main');
      main.textContent = "간단한 블로그 소개글입니다. 복잡한 구조의 예시 코드를 확인해 보세요.";
      document.body.appendChild(main);
      console.log("메인 섹션 생성");
      callback(createFooter);
    }

    function createFooter() {
      function createListItem() {
        let li = document.createElement('li');
        li.textContent = "바닥글 항목";
        return li;
      }

      let footer = document.createElement('footer');
      let ul = document.createElement('ul');
      for (let i = 0; i < 5; i++) {
        ul.appendChild(createListItem());
      }
      footer.appendChild(ul);
      document.body.appendChild(footer);
      console.log("바닥글 생성");
    }

    createHeader(function(next) {
      console.log("헤더 추가됨");
      next(function() {
        console.log("메인 섹션 추가됨");
        createFooter();
        console.log("바닥글 추가됨. 페이지 완성...");
      });
    });
  }
  outerFunction();
}

initFunction();