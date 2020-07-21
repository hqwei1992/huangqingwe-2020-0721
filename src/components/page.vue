<template>
    <div class="page">
      <div class="header">
        <img class="bgImg" src="../assets/image/bg.png"/>
        <img class="logo" src="../assets/image/logo.png"/>
      </div>
      <div>
        2222

      </div>
      <pageShadow/>
    </div>
</template>

<script>
  import pageShadow from './pageShadow'
  import ajax from '../ajax/index'
    export default {
        name: "page",
      components:{
        pageShadow,
        ajax
      },
      data(){
          return{

          }
      },
      methods:{
          request(){
            ajax({
              method:'get',
              url:'xxxx',
              data:{},
              success(){

              },
              error(){

              }
            })
          }
      }

    }
</script>

<style scoped >
  .page{
    position: relative;
    height: 100%;
  }
  .header{
    position: relative;
  }
  .header .bgImg{
    width: 100%;
  }
  .logo{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 5%;
    margin: auto;
  }

</style>
