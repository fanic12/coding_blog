import React from "react";

function If() {
    return <div className="BlogContent">
        <h2>JAVARSCRIPT-if</h2>
        <iframe
        title="ifintroduce" 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/wjlbT3hvDMc" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="true">
        </iframe>
        <p>
        이번에 배워볼 문법은 바로 if(조건문)입니다
        <br />익숙하신 분들이 많으실겁니다 
        <br />실제 영어 문법에서도 if는 조건문으로도 사용되기 때문이죠
        <br />여기서의 if는 영어 문법에서 처럼 단독으로 사용되지 않습니다
        <br />else라는 다른 단어랑 사용됩니다
        <br />기본적인 형태는 if와 else로 만약 정해놓은 값이라면 혹은 아니라면의 형태가 되는 것이죠
        <br />if에의 기본적인 형태는 if (true or false) {"{"} 명령어 {"}"}else {"{"} 명령어 {"}"}
        <br />이때 ()괄호는 조건값을 넣는 곳입니다
        <br />해당 ()괄호안의 조건값과 일치한다면 true 아니면 false로  값이 정해지고 
        <br />그것에 따라 else안의 명령어를 제외하고 실행시킬지
        <br />else안의 명령어를 실행시킬지 정합니다
        <br />혹은 조건값을 넣어 원하는 값을 바로 적용시킬수도 있습니다
        <br />()에 true, false를 넣어서 말이죠
        <br />또한 document.write의 ()안의 ""의 유무에따라 ""가 있다면 그대로 내보내고 
        <br />없다면 동적으로 바꿔서 적용하는 것입니다
        <br />또한 이때 명령어는 html에 거쳐서 적용되기 때문에
        <br />""내에 코드가 있다면 해당 내용에 적용을 시키고 
        <br />없다면 그대로 내보내는 것입니다
        <br />아래의 실습에서도 한번 확인 해보시고 본인이 원하는 값으로 바꿔 보시길 바랍니다
        <iframe height="500" width="100%" scrolling="no" title="javarscript if(조건문)" src="https://codepen.io/fanic12/embed/yLJKKLd?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/fanic12/pen/yLJKKLd'>javarscript if(조건문)</a> by fanic12
  (<a href='https://codepen.io/fanic12'>@fanic12</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> 
()내의 값을 true와 false로 바꿔보시면서
    <br />if문을 체험해보시기 바랍니다
    <br />script태그안에 있는 if문밖의 값인 "야식"과"라면도 좋다"는
    <br />항상 적용됩니다 그러나 
    <br />if문안의 "땡긴다"와 "먹기엔 시간이 늦었다"는
    <br />()값이 true인지 false인지에따라 갈립니다
    <br />또한 write의 ()에서 ""의 유무에 따라
    <br />값이 달라진다는걸 아실수 있습니다
    <br />""가없다면 동적인 것으로 적용되고1+1이 2로 적용되는것처럼
    <br />""가있다면 해당 값을 그대로 내보냅니다
    <br />그럼 왜  {"<"}br {">"}은 이대로 글로 나오는 게아니고 
    <br />적용이 되나요 라고 의구심을 품으실수 있습니다
    <br />왜냐하면 이때 ""의 내용은 사이트로 보내는것이 아니고
    <br />html을 거쳐서 송출하기 때문입니다
    <br />여기서 그냥 아무값도 없는 것이면 그대로 송출을
    <br />존재하는 코드라면 송출하는 값에 적용을 시키는 겁니다
    <br />즉 이렇게 javarscript가 동적으로 적용을 시키는 겁니다
</p>
    </div>
}

export default If