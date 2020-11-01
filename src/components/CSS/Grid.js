import React from "react";

function Grid() {
    return <div className="BlogContent">
        <h2>CSS-grid</h2>
        <iframe 
        title="gridintroduce"
        width="100%" 
        height="400px" 
        src="https://www.youtube.com/embed/M1eQFIBY2vI" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true">
        </iframe>
        <p>
          이번 수업에서 배워볼 grid라는 코드는 앞서 공부한 
          <br />padding과 margin을 조금 더 시각적으로 체험할수있을 뿐만 아니라 
          <br />여러분들은 grid를 통해 최초로 실시간으로 변형되는 웹을 체험 해보실겁니다
          <br />fr이라는 단위는 고정되어있지 않습니다 
          <br />나머지 전부의 값인거죠
          <br />사이트가 커지면 그만큼 길이가 늘어나고
          <br />사이트가 작아지면 그만큼 작아지는 겁니다
          <br />단위를제외한 나머지의 값이기 때문이죠
          <br />비율도 똑같습니다
          <br />작을때 비율이나 클때의 비율이나
          <br />비율의 크기가 달라지는 것이지 비가 달라지지는 않습니다
          <br />grid를 공부하기전에 먼저 기초지식 하나를 알려드리도록 하겠습니다.
          <br />fr이라는 비율을 나타내는 단위입니다
          <br />수학에서 비율은 1:1이라고 표기한다면 웹에서는 1fr:1fr이라고 생각하시면 됩니다
          <br />혹은 px과같은 단위와 혼용되서 사용된다면 1fr:10px이라고 한다면 어떻게 풀어나가실건가요?
          <br />그럴때는 단위를 통합할려고 하지마시고 따로따로 생각하시면 됩니다
          <br />전체px-10px한 값 : 10px입니다
          <br />이때의 1fr은 나머지를 전부 사용한다고 생각하시면 됩니다
          <br />즉 fr : fr의 단위는 비율로 생각하시되
          <br />px,%,em,rem : fr 의 경우 px,%,em,rem의 값만큼 : 나머지 값(fr) 이라고 생각하시면 됩니다
          <br />아래의 체험을 해보면서 fr을 조금 더 이해해보시고 
          <br />단위가 혼용되서 사용되었을때 어떻게 사용되는지도 한번 알아보시길 바랍니다  
          <iframe height="500" width= "100%" scrolling="no" title="css grid" src="https://codepen.io/fanic12/embed/OJXQGBb?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
          See the Pen <a href='https://codepen.io/fanic12/pen/OJXQGBb'>css grid</a> by fanic12
          (<a href='https://codepen.io/fanic12'>@fanic12</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
        </p>
    </div>
}

export default Grid