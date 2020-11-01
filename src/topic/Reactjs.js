import React from "react";

function Reactjs() {
    return <div className="BlogContent">
        <h2>REACTJS-introduce</h2>
        <iframe
        title="reactjsintroduce" 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/XMb0w3KMw00" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true">
        </iframe>
        <p>
          이번에 우리가 배워볼 언어는 Reactjs라는 언어입니다 
          <br />react는 js즉 javarscript기반으로 움직이는 언어입니다
          <br />그렇기에 여러분들이 
          <a href = "https://ko.wikipedia.org/wiki/HTML"
          target="_blank" rel="noopener noreferrer"  title="html5 guide" className="SetColor">html</a>,  
          <a href = "https://namu.wiki/w/CSS"
      target="_blank" rel="noopener noreferrer"  title="css guide" className="SetColor">css</a>, 
      <a href = "https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8"
      target="_blank" rel="noopener noreferrer"  title="js guide" className="SetColor">javarscript</a>를 잘 배워오셨다면 이해하시기에 훨씬 쉬우실겁니다  
          <br />또한 이번에는 codepen이 아닌 
          <a href="https://stackblitz.com/"
          target="_blank" rel="noopener noreferrer" title="stackblitzintoduce" className="SetColor">StackBlitz</a>라는 웹으로 체험해보실겁니다
          <br />이번 StackBlitz의 경우 왼쪽위에 보시면 파일 모양 아이콘이있습니다 여기를 누르시면 여러가지 파일들이 나오게 되는데
          <br />우리는 이파일들을 옮겨가면서 수업을 진행 할겁니다
          <br />또한 atom을 사용하지 않고 이번에는 
          <a href="https://code.visualstudio.com/"
          target="_blank" rel="noopener noreferrer" title="reactdownload" className="SetColor">visual studio code</a>라는 에디터를 사용할겁니다
          <br />새로운 웹과 에디터에 적응하시기 어려우실수 있지만 하다보면 적응 되실겁니다
          <br />이번수업은 한개의 파일로만 진행되지 않습니다 여러가지 파일을 왔다 갔다 하기 때문에 
          <br />최대한 파일들을 하나의 틀로 묶어서 이해하시길 바랍니다
        <h4>*아래에 Both를 누르시면 코드가 실시간으로 적용되는 웹을 보실수 있습니다*</h4>
        <iframe
        title="reactjsintroduce"
        width="100%"
        height="500px" 
        src="https://stackblitz.com/edit/react-introduce?embed=1&file=src/App.js"></iframe>
        </p>
    </div>
}

export default Reactjs