<template>
    <div class="pages">
      <div class="shadow dashArea">
        <img src="../assets/image/scape.png"/>
        <div style="color: red">请使用横屏</div>
      </div>

    </div>
</template>

<script>
    export default {
      name: "pageShadow"
    }
</script>

<style scoped>
  .shadow{
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
    animation:transform 1s ;
  }

  .dashArea{
    background: #333;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    z-index: 999;
  }
  .shadow img{
    /*width: 100%;*/
    transform: rotate(-180deg);
  }
  @keyframes transform {
    0%{
      transform: rotate(0deg);
    }
    50%{
      transform: rotate(90deg);
    }
    100%{
      transform: rotate(0);
    }
  }
</style>
